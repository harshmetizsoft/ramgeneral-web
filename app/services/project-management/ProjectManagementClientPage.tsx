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
    title: "Comprehensive Project Strategy",
    desc: "Create a tailored action plan with timelines, resource allocation, milestones to keep your project on track."
  },
  {
    step: "02",
    title: "Full-Service Management",
    desc: "Coordinate all aspects of the project, including material delivery, installation, and compliance verification."
  },
  {
    step: "03",
    title: "Real-Time Progress Tracking",
    desc: "Provide transparent updates with milestone checks and proactive solutions to keep the project on course."
  },
  {
    step: "04",
    title: "Final Inspections and Handover",
    desc: "Deliver comprehensive testing, quality assurance, and a smooth transition to fully operational, optimized lighting systems."
  }
];

const galleryImages = [
  { src: "/main-assets/img/service/gallery-1.webp", alt: "Image 1", colClass: "col-xl-4 col-md-6" },
  { src: "/main-assets/img/service/gallery-2.webp", alt: "Image 2", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-3.webp", alt: "Image 3", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-4.webp", alt: "Image 4", colClass: "col-xl-4 col-md-6" }
];

const whyChooseItems = [
  "Advanced real-time project tracking systems",
  "Strict milestone accountability practices",
  "Proactive risk identification and mitigation strategies",
  "Guaranteed adherence to all regulatory and safety standards",
  "Comprehensive resource and logistics optimization",
  "Dedicated project managers as your single point of contact",
  "Post-installation support services"
];

const faqItems = [
  {
    q: "Q1. How do you ensure my lighting project is completed on time and within budget?",
    a: "Our approach begins with careful planning and clear goal-setting to ensure that timelines and budgets are established from the outset. We monitor every aspect of the project, from material procurement to installation, and adjust as needed to avoid delays. We ensure that resources are allocated efficiently and that materials arrive on time. Regular updates and transparent communication keep you in control of the project's progress, ensuring there are no surprises or unforeseen costs."
  },
  {
    q: "Q2. What types of businesses benefit from your lighting project management services?",
    a: "Our services cater to a broad range of industries, including offices, warehouses, retail spaces, industrial facilities, and hospitality. We provide tailored solutions for businesses of all sizes, whether you have a single location or multiple sites. We specialize in upgrading existing lighting systems for energy efficiency, improved ambiance, or enhanced functionality. Our lighting solutions are designed to meet the unique needs of your business while reducing operational costs and improving overall performance."
  },
  {
    q: "Q3. How do you handle multi-location or national lighting rollouts?",
    a: "Managing multi-location rollouts requires precise planning, coordination, and a scalable approach. Our project managers create a unified plan for all locations, ensuring consistent quality and compliance across every site. By acting as a single point of contact, we simplify communication, manage timelines, and ensure resources are distributed effectively. This coordinated effort results in a streamlined, hassle-free rollout process, whether you're upgrading a few sites or hundreds."
  },
  {
    q: "Q4. How do you ensure the lighting system meets regulatory standards and codes?",
    a: "We ensure compliance with all relevant codes and regulations by staying up to date with local, state, and federal standards. Our team conducts a thorough review of your project to ensure that the lighting system meets energy efficiency requirements and safety protocols. We also manage the necessary inspections and certifications required for compliance, so you can rest assured that your new lighting system adheres to all regulations, minimizing any risk of fines or delays."
  },
  {
    q: "Q5. Can you help with obtaining energy rebates or incentives for my lighting project?",
    a: "Yes, we assist in identifying and securing available energy rebates and incentives, which can significantly offset the costs of your lighting upgrades. Our team is knowledgeable about the various programs and will handle all the paperwork and submissions. We work with Clean Energy Programs and other government initiatives to ensure you get the maximum rebate possible. This reduces your upfront costs and accelerates the return on your investment in energy-efficient lighting."
  }
];

export default function ProjectManagementClientPage() {
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
                <h1 className="breadcumb-title">Lighting Project Management</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">LIGHTING PROJECT MANAGEMENT</li>
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
                    alt="Lighting Project Management" 
                    className="w-100"
                    style={{ objectFit: "cover", height: "450px" }}
                  />
                </div>

                {/* Main Heading */}
                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Lighting Projects Done Right, Every Time
                </h2>

                {/* Overview Paragraphs */}
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  We understand that every customer is unique, and so are their lighting project needs. Our
                  project management services are tailored to your specific goals, challenges, and vision.
                  Whether upgrading a single location or executing a multi-site rollout, we create a
                  personalized approach for each project. From planning to execution, we ensure every detail
                  is handled with precision, delivering on time and within budget.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  Our expert project managers keep you informed with real-time updates, maintaining focus
                  on efficiency, energy savings, and compliance. We manage everything from securing rebates
                  to optimizing installation logistics, ensuring your lighting solution transforms your space and
                  delivers lasting value.
                </p>
              </div>

              {/* What's Included Section */}
              <div className="mt-50 mb-40">
                <div className="mb-30">
                  <h3 className="font-title text-3xl font-bold text-gray-900 mb-2">What’s Included in Our Lighting Project Management</h3>
                  <p className="text-gray-500 font-body text-base leading-relaxed">
                    From planning to final execution, we bring structure, precision, and expertise to every stage
                    of your lighting project.
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
                            <i className="ri-bubble-chart-line"></i>
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

              {/* Checklist Section */}
              <div className="mt-50 mb-40">
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-20">What Sets Our Project Management Apart</h3>
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
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-30">Lighting Project Management FAQ</h3>
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
                                  <p className="m-0 text-gray-600 font-body text-sm leading-relaxed whitespace-pre-line">
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
                      const isActive = s.slug === "project-management";
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
