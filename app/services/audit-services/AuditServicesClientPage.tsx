"use client";

import { useState } from "react";
import Link from "next/link";
import { ServiceContactSidebar } from "@/components/service-detail";

const allServices = [
  { title: "Audit Services", slug: "audit-services", icon: "ri-survey-line" },
  { title: "Layout Planning", slug: "layout-planning", icon: "ri-layout-masonry-line" },
  { title: "Project Management", slug: "project-management", icon: "ri-bubble-chart-line" },
  { title: "Installation Services", slug: "installation-services", icon: "ri-tools-line" },
  { title: "Investment Return Analysis", slug: "investment-return-analysis", icon: "ri-line-chart-line" },
  { title: "As A Service", slug: "as-a-service", icon: "ri-loop-left-line" }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Goals",
    desc: "We assess your lighting needs to identify energy-saving opportunities, setting clear goals for cost and efficiency improvements."
  },
  {
    step: "02",
    title: "On-Site Evaluation",
    desc: "Our experts assess your space, gathering data on existing fixtures to craft a layout that maximizes performance and enhances ambiance."
  },
  {
    step: "03",
    title: "Project Analysis",
    desc: "We analyze the collected data and develop a strategic plan tailored to your goals, ensuring cost-effective, energy-efficient upgrades."
  },
  {
    step: "04",
    title: "Key Insights",
    desc: "After audit, we deliver a detailed report with tailored LED upgrade plans, ensuring energy-efficient and cost-effective installations."
  }
];

const galleryImages = [
  { src: "/main-assets/img/service/gallery-1.webp", alt: "Image 1", colClass: "col-xl-4 col-md-6" },
  { src: "/main-assets/img/service/gallery-2.webp", alt: "Image 2", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-3.webp", alt: "Image 3", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-4.webp", alt: "Image 4", colClass: "col-xl-4 col-md-6" }
];

const whyChooseItems = [
  "Comprehensive site evaluation for optimal lighting performance",
  "Tailored solutions for cost reduction and energy savings",
  "Detailed audit report with actionable insights and potential savings",
  "Full compliance with industry standards and regulations",
  "Dedicated team of certified professionals to guide you through the process"
];

const faqItems = [
  {
    q: "Q1. How can a lighting audit save my business money?",
    a: "A lighting audit identifies inefficiencies in your current lighting system, allowing us to recommend upgrades, like switching to energy-efficient LEDs. This leads to lower energy consumption, reduced maintenance costs, and long-term savings on electricity bills.",
  },
  {
    q: "Q2. How do you determine which lighting upgrades are right for my business?",
    a: "Our experts consider your business goals, energy savings targets, and the specific needs of your space. We then analyze your existing setup and provide recommendations based on your operational requirements, budget, and desired outcomes.",
  },
  {
    q: "Q3. How do I know if my lighting system is inefficient?",
    a: "If your lighting is outdated, frequently requires maintenance, or doesn’t provide adequate illumination, it may be time for an audit. High energy bills and poor lighting quality are also indicators that your system could benefit from an upgrade.",
  },
  {
    q: "Q4. What will the lighting audit report include?",
    a: "The audit report provides a detailed analysis of your existing lighting system, including an overview of current energy usage, fixture performance, light levels, and areas for improvement. It also includes tailored recommendations for cost-effective upgrades and projected savings.",
  },
  {
    q: "Q5. How much energy can I save with a lighting audit?",
    a: "Savings vary based on your facility's current system, but businesses can typically save between 30-60% on energy costs after implementing the recommended changes, such as upgrading to LEDs or improving fixture placement.",
  }
];

export default function AuditServicesClientPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div style={{ overflow: "hidden" }} className="bg-white">
      {/* Breadcrumb section */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(234,85,1,0.55) 0%, rgba(21,22,28,0.75) 100%), url('/main-assets/img/bg/client-bg1-1.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">Lighting Audit Services</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">LIGHTING AUDIT SERVICES</li>
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
                    alt="Lighting Audit Services" 
                    className="w-100"
                    style={{ objectFit: "cover", height: "450px" }}
                  />
                </div>

                {/* Main Heading */}
                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Elevate Your Space with Precision Lighting Audits
                </h2>

                {/* Overview Paragraphs */}
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  Lighting audits are more than just an inspection; they’re an investment in your future. 
                  We perform in-depth evaluations of your lighting system, assessing everything from fixture layouts 
                  to electrical capacity, and offering tailored recommendations for energy-saving LED upgrades. 
                  Whether you&apos;re managing an office, warehouse, or industrial space, our expert audits help you meet 
                  your energy goals while ensuring your lighting infrastructure is prepared for the future.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  Through a comprehensive lighting audit, we help you uncover hidden savings and make informed decisions 
                  about your lighting system’s long-term performance. By switching to energy-efficient solutions, you 
                  can not only reduce costs but also enhance the quality of light in your space, creating a better 
                  environment for employees, customers, and visitors alike.
                </p>
              </div>

              {/* Lighting Audit Process Timeline */}
              <div className="mt-50 mb-40">
                <div className="mb-30">
                  <h3 className="font-title text-3xl font-bold text-gray-900 mb-2">Our Lighting Audit Process</h3>
                  <p className="text-gray-500 font-body text-base leading-relaxed">
                    We assess every detail to uncover opportunities for energy savings, improved lighting, and long-term value. 
                    Our expert insights transform your system into a sustainable, cost-efficient asset.
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
                            <i className="ri-survey-line"></i>
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
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-20">Why Choose Our Lighting Audits</h3>
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
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-30">Lighting Audit FAQ</h3>
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
                                onClick={() =>
                                  setActiveFaq(isOpen ? null : idx)
                                }
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


                {/* Sidebar Navigation */}
                <div className="p-6 bg-white border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4">
                    All Services
                  </h4>
                  <div className="flex flex-col gap-2">
                    {allServices.map((s) => {
                      const isActive = s.slug === "audit-services";
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

                <ServiceContactSidebar />
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
