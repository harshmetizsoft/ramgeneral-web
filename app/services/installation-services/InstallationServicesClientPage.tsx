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
    title: "Pre-Installation Preparation",
    desc: "Conduct on-site assessments and finalize installation plans ensuring all materials are ready for seamless execution."
  },
  {
    step: "02",
    title: "Certified Install Teams",
    desc: "Our skilled technicians expertly install fixtures safely and precisely, adhering to all industry and regulatory standards for optimal performance."
  },
  {
    step: "03",
    title: "System Testing and Calibration",
    desc: "Ensure proper fixture functionality, adjust settings, and optimize lighting for maximum efficiency and performance."
  },
  {
    step: "04",
    title: "Post-Installation Handover",
    desc: "Deliver comprehensive system documentation, operational walk-throughs, and a smooth transition to your fully operational lighting system."
  }
];

const galleryImages = [
  { src: "/main-assets/img/service/gallery-1.webp", alt: "Image 1", colClass: "col-xl-4 col-md-6" },
  { src: "/main-assets/img/service/gallery-2.webp", alt: "Image 2", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-3.webp", alt: "Image 3", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-4.webp", alt: "Image 4", colClass: "col-xl-4 col-md-6" }
];

const whyChooseItems = [
  "Nationwide network of licensed and certified technicians",
  "Adherence to all local, state, and national electrical codes",
  "Fast, efficient installations with minimal disruption to operations",
  "Comprehensive system testing for long-term reliability",
  "Expertise in complex retrofits and advanced lighting systems",
  "Clear communication and real-time updates at every step"
];

const faqItems = [
  {
    q: "Q1. What steps do you take to ensure a seamless installation process?",
    a: "We begin with a comprehensive site assessment to identify your specific requirements and challenges. Our team creates a detailed installation plan that covers material procurement, scheduling, and compliance with safety and electrical codes. This ensures every phase of the process is carefully coordinated for a hassle-free experience.\n\nThroughout the project, we maintain regular communication to keep you informed of progress and address any concerns promptly. By prioritizing efficiency and quality control, we ensure your lighting installation is completed on time, within budget, and to the highest standards."
  },
  {
    q: "Q2. Do you provide installation services for large-scale or multi-site projects?",
    a: "Yes, we excel in handling installations for both single locations and multi-site rollouts. Our scalable approach involves centralized project management, allowing us to maintain consistent quality and compliance across all sites. This ensures a seamless experience, regardless of the project's size or scope.\n\nWe assign dedicated teams to oversee planning, coordination, and execution, streamlining the entire process. By acting as a single point of contact, we simplify communication and logistics, making even complex rollouts stress-free and efficient."
  },
  {
    q: "Q3. How do you manage unexpected challenges during installation?",
    a: "Our team adopts a proactive approach, identifying potential risks during the planning phase and creating contingency plans to address them. This ensures we're well-prepared to handle challenges like delays, resource shortages, or site-specific issues.\n\nIf unexpected problems arise during installation, we act swiftly to resolve them with minimal disruption. Our commitment to adaptability and problem-solving helps maintain the project's timeline, budget, and overall quality."
  },
  {
    q: "Q4. Can you retrofit my existing lighting system with new LED solutions?",
    a: "Absolutely! Retrofitting outdated systems with energy-efficient LED lighting is one of our specialties. We evaluate your current infrastructure to ensure compatibility and create a tailored plan for a smooth transition to modern lighting technology.\n\nOur process minimizes downtime and disruption to your operations, delivering an upgraded system that enhances performance and reduces energy costs. With our expertise, retrofitting becomes an efficient and cost-effective solution for your lighting needs."
  },
  {
    q: "Q5. Can you assist with installing advanced lighting controls and automation?",
    a: "Yes, we have extensive experience in installing advanced lighting controls and IoT-enabled automation systems. Whether it's motion sensors, dimmers, or fully integrated smart lighting, we tailor solutions to enhance functionality and efficiency in your space.\n\nOur team ensures proper installation and setup, providing training and support as needed. These systems not only improve energy management but also elevate convenience and control, making them a smart investment for modern lighting needs."
  }
];

export default function InstallationServicesClientPage() {
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
                <h1 className="breadcumb-title">Lighting Installation Services</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">LIGHTING INSTALLATION SERVICES</li>
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
            {/* Left Column */}
            <div className="col-xl-8 col-12">
              <div className="mb-40">
                {/* Banner Image */}
                <div className="mb-30 overflow-hidden" style={{ borderRadius: "24px" }}>
                  <img
                    src="/main-assets/img/service/service_details.jpg"
                    alt="Lighting Installation Services"
                    className="w-100"
                    style={{ objectFit: "cover", height: "450px" }}
                  />
                </div>

                {/* Main Heading */}
                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Lighting Installations That Redefine Durability and Style
                </h2>

                {/* Overview Paragraphs */}
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  Lighting installation is the foundation of any successful lighting upgrade. Our expert team
                  ensures that every fixture is installed with precision and care, delivering maximum
                  performance and longevity. Whether it&apos;s a small retrofit or a multi-location rollout, we
                  manage every step of the process, from preparation to final commissioning, so you can focus
                  on running your business.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  We adhere to strict safety and compliance standards, ensuring all installations meet or
                  exceed local regulations. With efficient scheduling and minimal disruption to your
                  operations, we provide a seamless installation experience that brings your lighting vision to
                  life.
                </p>
              </div>

              {/* What's Included Section */}
              <div className="mt-50 mb-40">
                <div className="mb-30">
                  <h3 className="font-title text-3xl font-bold text-gray-900 mb-2">
                    What&apos;s Included in Our Lighting Installation Services
                  </h3>
                  <p className="text-gray-500 font-body text-base leading-relaxed">
                    Every lighting installation is crafted with precision, guided by expertise, and executed to
                    achieve outstanding results.
                  </p>
                </div>
                <div className="row g-4">
                  {processSteps.map((step) => (
                    <div className="col-md-6 col-12" key={step.step}>
                      <div
                        className="p-4 bg-white border rounded-2xl relative h-100 flex flex-col justify-between"
                        style={{ borderRadius: "16px", borderColor: "rgba(0,0,0,0.06)" }}
                      >
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
                            <i className="ri-tools-line"></i>
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
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-20">
                  What Sets Our Lighting Installation Services Apart
                </h3>
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
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-30">Lighting Installation FAQ</h3>
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

            {/* Right Column: Sidebar */}
            <div className="col-xl-4 col-12">
              <div className="space-y-6">
                {/* Sidebar Navigation */}
                <div className="p-6 bg-white border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4">All Services</h4>
                  <div className="flex flex-col gap-2">
                    {allServices.map((s) => {
                      const isActive = s.slug === "installation-services";
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
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
