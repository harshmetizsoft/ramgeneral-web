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
  "Detailed payback period and IRR calculations",
  "Monthly cash flow positive energy models",
  "HVAC heat-load reduction savings metrics",
  "Maintenance labor and material savings estimates",
  "Tax incentive eligibility (Section 179D, etc.)"
];

const processSteps = [
  {
    step: "01",
    title: "Comprehensive Cost Analysis",
    desc: "Evaluate upfront costs, operational expenses, and potential rebates to determine total investment requirements."
  },
  {
    step: "02",
    title: "Payback Period Analysis",
    desc: "Calculate the timeline for recovering your investment by factoring in utility rebates, energy savings, and maintenance reductions."
  },
  {
    step: "03",
    title: "Energy Savings Assessment",
    desc: "Calculate anticipated energy reductions and monthly cost savings achieved through upgraded lighting systems."
  },
  {
    step: "04",
    title: "Financial Forecasts",
    desc: "Provide a detailed outlook on cost savings, operational efficiency, and sustainability benefits over the system's lifetime."
  }
];

const galleryImages = [
  { src: "/main-assets/img/service/gallery-1.webp", alt: "Image 1", colClass: "col-xl-4 col-md-6" },
  { src: "/main-assets/img/service/gallery-2.webp", alt: "Image 2", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-3.webp", alt: "Image 3", colClass: "col-xl-8 col-md-6" },
  { src: "/main-assets/img/service/gallery-4.webp", alt: "Image 4", colClass: "col-xl-4 col-md-6" }
];

const whyChooseItems = [
  "Customized ROI reports tailored to your specific project and goals",
  "In-depth rebate and incentive identification to reduce upfront costs",
  "Advanced modelling tools to ensure accurate financial projections",
  "Expert recommendations for maximizing energy and operational savings",
  "Transparent insights into cost recovery and long-term benefits",
  "Guidance on financing options to make your investment affordable"
];

const faqItems = [
  {
    q: "Q1. How do you calculate the ROI for lighting upgrades?",
    a: "We start by analyzing your current energy usage and operational costs, then compare them to projected savings from the upgraded system. This includes evaluating upfront costs, utility bill reductions, maintenance savings, and potential rebates or incentives.\n\nUsing this data, we calculate the payback period and long-term financial benefits, presenting the results in a clear, easy-to-understand format. This helps you make confident decisions about your investment."
  },
  {
    q: "Q2. Can you help me access rebates and incentives for my lighting upgrade?",
    a: "Yes, we specialize in identifying and securing rebates and incentives to minimize your project's upfront costs. We work with local utilities and clean energy programs to ensure you receive the maximum financial support available.\n\nOur team handles the entire process, including documentation and submission, so you can focus on implementing your lighting upgrade while maximizing your return on investment."
  },
  {
    q: "Q3. How accurate are the energy savings projections?",
    a: "We use industry-leading tools and real-world data to provide precise energy savings projections. Our analysis accounts for variables such as operating hours, fixture performance, and local utility rates.\n\nBy tailoring the assessment to your unique environment and usage patterns, we ensure the projections are reliable, giving you a clear understanding of the expected financial impact."
  },
  {
    q: "Q4. What factors influence the payback period of a lighting upgrade?",
    a: "The payback period depends on factors like the initial investment, energy savings, utility rates, and available rebates. For example, upgrading to LED systems typically results in faster payback due to significant reductions in energy consumption.\n\nOur analysis takes all these factors into account, giving you a realistic timeline for recovering your investment and enjoying long-term savings."
  },
  {
    q: "Q5. What happens if I delay my lighting upgrade?",
    a: "Delaying your lighting upgrade means continuing to spend on inefficient systems, increasing operational costs over time. Our analysis highlights the \"cost of waiting,\" showing how much money you could save annually by transitioning to LED sooner rather than later.\n\nThis insight helps you understand the financial impact of inaction, making it easier to prioritize your lighting investment."
  }
];

export default function InvestmentReturnAnalysisClientPage() {
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
                <h1 className="breadcumb-title">Lighting Investment Return Analysis</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">LIGHTING INVESTMENT RETURN ANALYSIS</li>
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
                    alt="Lighting Investment Return Analysis"
                    className="w-100"
                    style={{ objectFit: "cover", height: "450px" }}
                  />
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-lg"
                    style={{ backgroundColor: "#EA5501" }}
                  >
                    Featured
                  </span>
                  <span className="flex items-center gap-1 text-base font-bold text-gray-700">
                    <i className="ri-star-fill text-amber-500"></i>
                    4.8
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Unlocking the Full Value of Your Lighting Investments
                </h2>

                {/* Overview Paragraphs */}
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  Investing in modern lighting solutions goes beyond upgrading fixtures—it&apos;s a strategic
                  decision that transforms energy consumption into long-term cost savings and operational
                  efficiency. Our Lighting Investment Return Analysis service empowers businesses with a clear
                  financial understanding of lighting upgrades. By evaluating energy reductions, payback
                  periods, and sustainability gains, we help you uncover the full value of your investment.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  We provide precise, data-driven insights tailored to your facility, so you can make informed
                  decisions about transitioning to energy-efficient LED systems. With significant savings
                  potential, faster payback periods, and environmental benefits, our analysis ensures you
                  achieve financial and operational success while supporting sustainability goals.
                </p>
              </div>

              {/* What's Included Section */}
              <div className="mt-50 mb-40">
                <div className="mb-30">
                  <h3 className="font-title text-3xl font-bold text-gray-900 mb-2">
                    What&apos;s Included in Our Lighting Investment Return Analysis
                  </h3>
                  <p className="text-gray-500 font-body text-base leading-relaxed">
                    We provide a detailed breakdown of your lighting investment, highlighting savings, efficiency
                    gains, and long-term financial benefits.
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
                            <i className="ri-line-chart-line"></i>
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
                  What Sets Our Lighting Investment Return Analysis Apart
                </h3>
                <div className="checklist style2">
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
                  Lighting Investment Return Analysis FAQ
                </h3>
                <div className="accordion" id="faqAccordion2">
                  {faqItems.map((item, idx) => (
                    <div className={`accordion-card ${activeFaq === idx ? "active" : ""}`} key={idx}>
                      <div className="accordion-header">
                        <button
                          className={`accordion-button ${activeFaq === idx ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        >
                          {item.q}
                        </button>
                      </div>
                      <div className={`accordion-collapse collapse ${activeFaq === idx ? "show" : ""}`}>
                        <div className="accordion-body">
                          <p className="m-0 text-gray-600 font-body text-sm leading-relaxed whitespace-pre-line">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="col-xl-4 col-12">
              <div className="space-y-6">
                {/* Stats Card */}
                <div
                  className="p-6 rounded-3xl text-white shadow-xl text-center flex flex-col justify-center items-center"
                  style={{ background: "linear-gradient(135deg, #FF6B35 0%, #EA5501 100%)", borderRadius: "24px" }}
                >
                  <span className="text-5xl font-extrabold font-title tracking-tight mb-2">
                    18mo
                  </span>
                  <p className="text-sm font-medium opacity-90 m-0">
                    Average Complete Payback Period Achieved
                  </p>
                </div>

                {/* Core Features list card */}
                <div className="p-6 bg-gray-50 border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i className="ri-list-check-3 text-orange-600"></i> Core Features
                  </h4>
                  <ul className="space-y-3 pl-0 list-none m-0">
                    {coreFeatures.map((feature, idx) => (
                      <li className="flex items-start gap-2" key={idx}>
                        <i className="ri-checkbox-circle-fill text-emerald-500 text-lg shrink-0 mt-0.5"></i>
                        <span className="text-gray-600 font-body text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar Navigation */}
                <div className="p-6 bg-white border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4">All Services</h4>
                  <div className="flex flex-col gap-2">
                    {allServices.map((s) => {
                      const isActive = s.slug === "investment-return-analysis";
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

                {/* Contact CTA Card */}
                <div className="p-6 bg-gray-900 text-white rounded-3xl text-center relative overflow-hidden" style={{ borderRadius: "24px" }}>
                  <div className="relative z-10">
                    <h4 className="font-title text-2xl font-bold mb-3">Ready to Upgrade?</h4>
                    <p className="text-gray-300 text-xs mb-4">
                      Get a free ROI analysis and rebate assessment for your lighting project.
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
