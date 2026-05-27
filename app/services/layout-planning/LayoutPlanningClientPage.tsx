"use client";

import { useState } from "react";
import Link from "next/link";

const allServices = [
  { title: "Audit Services", slug: "audit-services", icon: "ri-survey-line" },
  { title: "Layout Planning", slug: "layout-planning", icon: "ri-layout-masonry-line" },
  { title: "Project Management", slug: "project-management", icon: "ri-bubble-chart-line" },
  { title: "Installation Services", slug: "installation-services", icon: "ri-tools-line" },
  { title: "Investment Return Analysis", slug: "investment-return-analysis", icon: "ri-line-chart-line" },
  { title: "As A Service", slug: "as-a-service", icon: "ri-loop-left-line" }
];

const coreFeatures = [
  "3D Photometric calculations and simulations",
  "Energy code compliance (ASHRAE / IECC)",
  "Optimal light distribution mapping",
  "Luminaire layout drafting and CAD design",
  "Worker safety and glare analysis"
];

const processSteps = [
  {
    step: "01",
    title: "2D/3D Fixture Placement",
    desc: "Visualize precise luminaire positioning and mounting configurations tailored to your space."
  },
  {
    step: "02",
    title: "Point-by-Point Light Level Calculations",
    desc: "Measure light intensity across surfaces to ensure proper illumination and uniformity."
  },
  {
    step: "03",
    title: "Heatmap Visualization",
    desc: "See how light is distributed throughout your area, highlighting any dark spots or over-lit zones."
  },
  {
    step: "04",
    title: "Comprehensive Fixture Schedule",
    desc: "Detailed documentation of product specifications, quantities, and mounting for seamless execution."
  }
];

const galleryImages = [
  { src: "/main-assets/img/service/gallery-1.webp", alt: "Image 1", colClass: "col-xl-4 col-md-6" },
  { src: "/main-assets/img/service/gallery-2.webp", alt: "Image 2", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-3.webp", alt: "Image 3", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-4.webp", alt: "Image 4", colClass: "col-xl-4 col-md-6" }
];

const whyChooseItems = [
  "Tailor-made designs that blend aesthetics with optimal functionality",
  "Advanced 2D/3D simulations for accurate visualization and planning",
  "Energy-smart strategies to reduce costs and maximize efficiency",
  "Guaranteed compliance with all regulatory and industry standards",
  "Expert guidance from concept to completion for seamless execution"
];

const faqItems = [
  {
    q: "Q1. What is a lighting audit, and why do I need one?",
    a: "A lighting audit is a comprehensive evaluation of your existing lighting system. It helps identify inefficiencies, highlights potential savings, and provides actionable insights on how to optimize lighting for energy efficiency, cost reduction, and enhanced performance."
  },
  {
    q: "Q2. What types of businesses can benefit from a lighting audit?",
    a: "Whether you operate an office, warehouse, retail space, or industrial facility, our lighting audits help businesses of all types reduce energy costs and improve lighting systems."
  },
  {
    q: "Q3. Can your lighting audits help me qualify for rebates?",
    a: "Yes! We collaborate with Clean Energy Programs and other initiatives to help businesses take advantage of available rebates, covering up to 90% of upgrade costs."
  },
  {
    q: "Q4. Are the LED lighting solutions you recommend suitable for all types of spaces?",
    a: "Yes! Our solutions are customizable for all types of spaces, including offices, warehouses, retail stores, and industrial environments."
  },
  {
    q: "Q5. Will your team handle the installation of recommended lighting upgrades?",
    a: "Yes! After providing the audit and recommendations, our experienced team will handle the installation, ensuring a seamless transition to your new lighting system."
  }
];

export default function LayoutPlanningClientPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div style={{ overflow: "hidden" }} className="bg-white">
      {/* Breadcrumb section */}
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url('/main-assets/img/bg/breadcrumb-bg.png')" }}
      >
        <div
          className="section-animation-shape1-1 shape-mockup animation-infinite"
          data-top="0"
          style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">Lighting Layout Planning</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">LIGHTING LAYOUT PLANNING</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Service Details Section */}
      <section className="space-top space-bottom">
        <div className="container">
          <div className="row gx-40">
            {/* Left Column: Descriptions, Process, Gallery, Why Choose, FAQs */}
            <div className="col-xl-8 col-12">
              <div className="mb-40">
                {/* Banner Image */}
                <div className="mb-30 overflow-hidden rounded-3xl" style={{ borderRadius: "24px" }}>
                  <img 
                    src="/main-assets/img/service/service_details.jpg" 
                    alt="Lighting Layout Planning" 
                    className="w-100"
                    style={{ objectFit: "cover", height: "450px" }}
                  />
                </div>

                {/* Main Heading */}
                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Optimizing Every Corner with Custom Lighting Layouts
                </h2>

                {/* Overview Paragraphs */}
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  Transform your space with our expert lighting layouts that maximize both efficiency and
                  visual appeal. We go beyond just placing fixtures; we design lighting solutions that enhance
                  your environment, boost productivity, and drive energy savings.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  Our process starts with a thorough evaluation of your space to understand your unique
                  needs. From there, we create a customized layout that optimizes light distribution, elevates
                  ambiance, and ensures every corner is illuminated to perfection. Whether it’s for your office,
                  warehouse, or retail space, our designs deliver high-quality lighting that meets your
                  functional and aesthetic goals.
                </p>
              </div>

              {/* What's Included Section */}
              <div className="mt-50 mb-40">
                <div className="mb-30">
                  <h3 className="font-title text-3xl font-bold text-gray-900 mb-2">What’s Included in Our Lighting Layouts</h3>
                  <p className="text-gray-500 font-body text-base leading-relaxed">
                    We meticulously craft every detail of your lighting design, ensuring energy efficiency,
                    seamless functionality, and long-term impact that elevates your space.
                  </p>
                </div>
                <div className="row g-4">
                  {processSteps.map((step) => (
                    <div className="col-md-6 col-12" key={step.step}>
                      <div className="p-4 bg-white border rounded-2xl relative h-100 flex flex-col justify-between" style={{ borderRadius: "16px", borderColor: "rgba(0,0,0,0.06)" }}>
                        <div className="flex justify-between items-center mb-4">
                          <span 
                            className="text-4xl font-bold font-title tracking-tight"
                            style={{ color: "#EA550120" }}
                          >
                            {step.step}
                          </span>
                          <span 
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg shadow-sm"
                            style={{ background: "linear-gradient(135deg, #FF6B35 0%, #EA5501 100%)" }}
                          >
                            <i className="ri-layout-masonry-line"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold font-title text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-gray-500 font-body text-xs leading-relaxed m-0">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Section */}
              <div className="mt-50 mb-40">
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-30">From our gallery</h3>
                <div className="row g-4">
                  {galleryImages.map((img, idx) => (
                    <div className={img.colClass} key={idx}>
                      <div 
                        className="overflow-hidden rounded-2xl relative group cursor-pointer shadow-sm"
                        onClick={() => setSelectedImage(img.src)}
                      >
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-100 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                          style={{ objectFit: "cover", height: "280px" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-3xl">
                          <i className="ri-zoom-in-line"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="mt-50 mb-40">
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-20">Why Choose Our Lighting Layout Planning Services</h3>
                <div>
                  <ul className="pl-0 list-none m-0">
                    {whyChooseItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 mb-3 text-gray-700 font-body text-base">
                        <i className="ri-checkbox-circle-fill text-emerald-500 text-xl shrink-0 mt-0.5"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ Accordion Section */}
              <div className="mt-50 mb-40">
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-30">Lighting Layout Planning FAQ</h3>
                <div className="accordion" id="faqAccordion2">
                  {faqItems.map((item, idx) => (
                    <div className={`accordion-card ${activeFaq === idx ? "active" : ""}`} key={idx}>
                      {(() => {
                        const isOpen = activeFaq === idx;
                        return (
                          <>
                            <div className="accordion-header">
                              <button
                                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                type="button"
                                onClick={() => setActiveFaq(isOpen ? null : idx)}
                              >
                                {item.q}
                              </button>
                            </div>
                            {isOpen && (
                              <div className="accordion-collapse">
                                <div className="accordion-body">
                                  <p className="m-0 text-gray-600 font-body text-sm leading-relaxed">
                                    {item.a}
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar, Checklist, Stats */}
            <div className="col-xl-4 col-12">
              <div className="space-y-6">
                {/* Core Features list card */}
                <div className="p-6 bg-gray-50 border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i className="ri-list-check-3 text-orange-600"></i> Core Features
                  </h4>
                  <ul className="space-y-3 pl-0 list-none m-0">
                    {coreFeatures.map((feature, idx) => (
                      <li className="flex items-start gap-2" key={idx}>
                        <i className="ri-checkbox-circle-fill text-emerald-500 text-lg shrink-0 mt-0.5"></i>
                        <span className="text-gray-600 font-body text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar Navigation */}
                <div className="p-6 bg-white border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4">
                    All Services
                  </h4>
                  <div className="flex flex-col gap-2">
                    {allServices.map((s) => {
                      const isActive = s.slug === "layout-planning";
                      return (
                        <Link 
                          key={s.slug} 
                          href={`/services/${s.slug}`}
                          className={`p-3 rounded-xl flex items-center justify-between border transition-all duration-200 ${
                            isActive 
                              ? "bg-orange-50 border-orange-500 text-orange-600 font-bold" 
                              : "bg-white hover:bg-gray-50 border-gray-100 text-gray-700"
                          }`}
                          style={{ borderRadius: "12px" }}
                        >
                          <span className="flex items-center gap-3 text-sm">
                            <i className={`${s.icon} ${isActive ? "text-orange-600" : "text-gray-400"}`}></i>
                            {s.title}
                          </span>
                          <i className="ri-arrow-right-s-line text-lg"></i>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Consultation Mini-Card */}
                <div className="p-6 bg-gray-900 text-white rounded-3xl text-center relative overflow-hidden" style={{ borderRadius: "24px" }}>
                  <div className="relative z-10">
                    <h4 className="font-title text-2xl font-bold mb-3">Ready to Upgrade?</h4>
                    <p className="text-gray-300 text-xs mb-4">
                      Get a free audit valuation and rebate assessment for your facility setup.
                    </p>
                    <Link 
                      href="/contact" 
                      className="btn w-100 style3 text-center py-3 block text-white font-bold"
                      style={{ background: "var(--color-theme)", border: "none" }}
                    >
                      REQUEST CALL <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
          style={{ backdropFilter: "blur(4px)" }}
        >
          <div className="relative max-w-4xl w-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50 bg-black bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <i className="ri-close-line"></i>
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
