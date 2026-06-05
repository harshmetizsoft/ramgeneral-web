"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ChatHistoryMessage } from "~/lib/product-catalog";
import { ProductResultCard, type ChatProductResult } from "./ProductResultCard";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  products?: ChatProductResult[];
}

const SUGGESTIONS = ["Lights"];

const WELCOME_MESSAGE =
  "Welcome to RAM General Supply. I can search our commercial LED catalog by product name, category, or SKU and share specs and pricing when available. What lighting solution are you looking for today?";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function ProductChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: WELCOME_MESSAGE,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setError(null);
      setInput("");

      const userMessage: ChatMessage = {
        id: createId(),
        role: "user",
        content: trimmed,
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      const history: ChatHistoryMessage[] = messages
        .filter((m) => m.id !== "welcome")
        .slice(-8)
        .map((m) => ({ role: m.role, content: m.content }));

      try {
        const res = await fetch("/api/product-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed, history }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error ?? "Request failed");
        }

        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            content: data.reply,
            products: data.products,
          },
        ]);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Something went wrong";
        setError(message);
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            content:
              "We couldn't complete that search right now. Please try again, browse our shop, or contact our team for a free quote.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="product-chat-root">
      {isOpen && (
        <div
          className="product-chat-panel"
          role="dialog"
          aria-label="LED product search assistant"
        >
          <header className="product-chat-header">
            <div className="product-chat-header__top">
              <div>
                <h2 className="product-chat-header__title">LED Product Assistant</h2>
              </div>
              <button
                type="button"
                className="product-chat-header__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
          </header>

          <div className="product-chat-body">
            <div className="product-chat-messages" ref={listRef}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`product-chat-bubble product-chat-bubble--${msg.role} ${
                    msg.id === "welcome" ? "product-chat-bubble--welcome" : ""
                  }`}
                >
                  <p className="product-chat-bubble__text">{msg.content}</p>
                  {msg.products && msg.products.length > 0 && (
                    <div className="product-chat-cards">
                      {msg.products.map((product) => (
                        <ProductResultCard key={product.uid} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="product-chat-bubble product-chat-bubble--assistant">
                  <p className="product-chat-bubble__text product-chat-typing" aria-live="polite">
                    Searching our catalog
                    <span></span>
                    <span></span>
                    <span></span>
                  </p>
                </div>
              )}
            </div>

            {error && <p className="product-chat-error">{error}</p>}

            {!isLoading && messages.length <= 1 && (
              <div className="product-chat-suggestions-wrap">
                <p className="product-chat-suggestions-label">Popular searches</p>
                <div className="product-chat-suggestions">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="product-chat-suggestion"
                      onClick={() => sendMessage(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form className="product-chat-form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                className="product-chat-input"
                placeholder="Product name, category, or SKU..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                maxLength={500}
                autoComplete="off"
              />
              <button
                type="submit"
                className="product-chat-send"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        className="product-chat-fab"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close product assistant" : "Open product assistant"}
      >
        <i className={isOpen ? "ri-close-line" : "ri-search-line"}></i>
        {!isOpen && <span className="product-chat-fab__label">Find Products</span>}
      </button>
    </div>
  );
}
