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
    title: "No Upfront Capital Required",
    desc: "Upgrade your lighting without financial strain—everything is included in a single, manageable payment plan."
  },
  {
    step: "02",
    title: "Expert Design and Installation",
    desc: "From assessment to completion, our team ensures your lighting system is tailored to meet your needs."
  },
  {
    step: "03",
    title: "Complete Maintenance",
    desc: "Enjoy peace of mind with all service, repairs, and replacements fully handled throughout the agreement."
  },
  {
    step: "04",
    title: "Instant Energy and Cost Savings",
    desc: "Reduce your energy expenses from day one while enjoying improved light quality and performance."
  }
];

const galleryImages = [
  { src: "/main-assets/img/service/gallery-1.webp", alt: "Image 1", colClass: "col-xl-4 col-md-6" },
  { src: "/main-assets/img/service/gallery-2.webp", alt: "Image 2", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-3.webp", alt: "Image 3", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-4.webp", alt: "Image 4", colClass: "col-xl-4 col-md-6" }
];

const whyChooseItems = [
  "Zero upfront investment to preserve capital for other priorities",
  "Fixed monthly payments for consistent and predictable costs",
  "Full maintenance coverage, eliminating repair and replacement expenses",
  "Expert project management for seamless design, installation, and support",
  "Immediate energy savings that contribute to positive cash flow",
  "Access to advanced LED technology with upgrade options at term end"
];

const faqItems = [
  {
    q: "Q1. What is Lighting as a Service (LaaS)?",
    a: "LaaS is a solution that allows businesses to upgrade to energy-efficient lighting with no upfront cost. Through a subscription model, you pay a fixed monthly fee for lighting, installation, and maintenance. This allows you to improve energy efficiency while eliminating capital expenses.\n\nWith LaaS, your monthly payments are offset by energy savings from upgraded LED systems, making it a budget-friendly way to modernize your lighting infrastructure. It's a fully managed service, providing hassle-free maintenance for the entire duration of the agreement."
  },
  {
    q: "Q2. How does LaaS help improve cash flow?",
    a: "LaaS eliminates the need for upfront capital investment, allowing your business to avoid large expenditures. The subscription model means that your lighting upgrade is paid for over time, and the energy savings generated immediately offset monthly costs.\n\nSince payments are predictable and aligned with energy savings, you benefit from an immediate positive cash flow, helping maintain your financial flexibility while upgrading your lighting."
  },
  {
    q: "Q3. What happens if my lighting needs maintenance?",
    a: "Under the LaaS program, all maintenance is covered for the duration of the service agreement. This includes the replacement of faulty components and the servicing of your lighting system, ensuring optimal performance.\n\nYou won't incur unexpected maintenance costs, making LaaS a reliable solution for businesses that want to avoid the burden of managing ongoing lighting repairs and maintenance."
  },
  {
    q: "Q4. Are there any additional costs beyond the monthly fee?",
    a: "No. The monthly subscription fee covers everything — from installation to lighting maintenance. There are no hidden fees or surprise costs, ensuring you have a clear understanding of your financial commitment.\n\nThis all-inclusive model allows you to focus on your business operations without worrying about unexpected expenses, ensuring a smooth and transparent upgrade process."
  },
  {
    q: "Q5. How does LaaS contribute to sustainability goals?",
    a: "Switching to LED lighting significantly reduces energy consumption and carbon emissions, aligning with corporate sustainability objectives. LaaS helps you achieve your environmental targets by implementing cutting-edge, energy-efficient lighting without the need for upfront investment.\n\nAs part of the service, we also track and report on the environmental impact of your lighting upgrades, so you can accurately measure and showcase your sustainability progress."
  }
];

export default function AsAServiceClientPage() {
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
                <h1 className="breadcumb-title">Lighting As A Service</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">LIGHTING AS A SERVICE</li>
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
                    alt="Lighting As A Service"
                    className="w-100"
                    style={{ objectFit: "cover", height: "450px" }}
                  />
                </div>

                {/* Main Heading */}
                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Upgrade Your Lighting Without the Financial Burden
                </h2>

                {/* Overview Paragraphs */}
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  Lighting as a Service (LaaS) redefines how businesses approach lighting upgrades by
                  providing an effortless, cost-effective solution. With zero upfront costs, this subscription-
                  based model delivers cutting-edge LED systems, seamless installation, and ongoing
                  maintenance under one predictable monthly payment.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  This approach eliminates financial barriers while ensuring instant energy savings and long-
                  term operational benefits. By shifting lighting from a capital expense to an operational one,
                  LaaS enhances cash flow and allows you to focus resources on other priorities. It&apos;s the
                  smarter way to light up your spaces with efficiency, sustainability, and ease.
                </p>
              </div>

              {/* What's Included Section */}
              <div className="mt-50 mb-40">
                <div className="mb-30">
                  <h3 className="font-title text-3xl font-bold text-gray-900 mb-2">
                    What&apos;s Included in Our Lighting as a Service Program
                  </h3>
                  <p className="text-gray-500 font-body text-base leading-relaxed">
                    We provide end-to-end solutions for lighting upgrades, prioritizing seamless installation,
                    energy efficiency, and hassle-free maintenance.
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
                            <i className="ri-loop-left-line"></i>
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
                  What Makes Our Lighting as a Service Unique
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
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-30">
                  Lighting As A Service FAQ
                </h3>
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
                      const isActive = s.slug === "as-a-service";
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
