"use client";
import Link from "next/link";

const services = [
  {
    title: "Audit Services",
    slug: "audit-services",
    icon: "ri-survey-line",
    shortDesc: "Comprehensive on-site energy audits and fixture counting to calculate exact energy savings and maximize utility rebate eligibility.",
    bgGradient: "linear-gradient(135deg, #FF6B35 0%, #EA5501 100%)",
    accentColor: "#EA5501"
  },
  {
    title: "Layout Planning",
    slug: "layout-planning",
    icon: "ri-layout-masonry-line",
    shortDesc: "Custom 3D photometric layout design ensuring perfect light levels, visual comfort, and strict code compliance for your specific facility layout.",
    bgGradient: "linear-gradient(135deg, #4EA8DE 0%, #0077B6 100%)",
    accentColor: "#0077B6"
  },
  {
    title: "Project Management",
    slug: "project-management",
    icon: "ri-bubble-chart-line",
    shortDesc: "End-to-end logistics, scheduling, material procurement, and supervision to guarantee smooth, on-time project completion with zero downtime.",
    bgGradient: "linear-gradient(135deg, #7209B7 0%, #560BAD 100%)",
    accentColor: "#560BAD"
  },
  {
    title: "Installation Services",
    slug: "installation-services",
    icon: "ri-tools-line",
    shortDesc: "Professional, safety-first LED installation and legacy system decommissioning handled by certified, licensed electrical technicians.",
    bgGradient: "linear-gradient(135deg, #FF9F1C 0%, #F15B2A 100%)",
    accentColor: "#F15B2A"
  },
  {
    title: "Investment Return Analysis",
    slug: "investment-return-analysis",
    icon: "ri-line-chart-line",
    shortDesc: "Comprehensive financial modeling showcasing payback periods, IRR, monthly cash flow positive savings, and lifetime cost calculations.",
    bgGradient: "linear-gradient(135deg, #2EC4B6 0%, #011627 100%)",
    accentColor: "#2EC4B6"
  },
  {
    title: "As A Service",
    slug: "as-a-service",
    icon: "ri-loop-left-line",
    shortDesc: "Innovative Energy-as-a-Service (EaaS) program delivering complete LED upgrades for $0 upfront, funded entirely by immediate energy savings.",
    bgGradient: "linear-gradient(135deg, #EE6C4D 0%, #293241 100%)",
    accentColor: "#EE6C4D"
  }
];

export default function ServicesPage() {
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
                <h1 className="breadcumb-title">Our Services</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">SERVICES</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="space-top space-bottom">
        <div className="container">
          <div className="title-area text-center mb-50">
            <span className="sub-title">
              <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" />
              OUR SPECIALTIES
            </span>
            <h2 className="sec-title">
              Turnkey Energy-Efficient Solutions
            </h2>
            <p className="sec-text mx-auto" style={{ maxWidth: "680px" }}>
              At RAM General Supply, we handle every step of your commercial LED lighting conversion. 
              From initial audit to expert installation, utility rebate management, and ongoing maintenance.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {services.map((service) => (
              <div className="col-xl-4 col-md-6 col-12" key={service.slug}>
                <div 
                  className="p-5 h-100 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                    borderRadius: "24px",
                    border: "1px solid rgba(0,0,0,0.05)"
                  }}
                >
                  <div>
                    {/* Icon container */}
                    <div 
                      className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-white text-3xl font-normal shadow-md"
                      style={{ background: service.bgGradient }}
                    >
                      <i className={service.icon}></i>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 font-title text-gray-900 transition-colors duration-200 hover:text-[var(--color-theme)]">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-gray-500 font-body text-base leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-bold tracking-wider uppercase transition-colors duration-200"
                      style={{ color: service.accentColor }}
                    >
                      LEARN MORE 
                      <i className="ri-arrow-right-line ms-2 transition-transform duration-200 group-hover:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature section showing stats/process */}
      <section className="bg-gray-50 space-top space-bottom relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-12">
              <div className="mb-40 mb-xl-0">
                <span className="sub-title">
                  <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" />
                  OUR DELIVERY MODEL
                </span>
                <h2 className="sec-title mb-3">
                  How We Drive High Return Upgrades
                </h2>
                <p className="sec-text mb-4">
                  We leverage engineering excellence, utility relationships, and certified crews 
                  to upgrade your corporate infrastructure with guaranteed performance standards.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100 text-orange-600 text-xl shrink-0 mt-1">
                      <i className="ri-check-fill"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-title text-gray-900 mb-1">Maximized Utility Rebates</h4>
                      <p className="text-gray-500 text-sm">We handle all technical filings and administrative paperwork to guarantee you secure the highest potential financial incentives.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100 text-orange-600 text-xl shrink-0 mt-1">
                      <i className="ri-check-fill"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-title text-gray-900 mb-1">OSHA Certified Field Crews</h4>
                      <p className="text-gray-500 text-sm">Safety is our number one priority. Our field technicians carry valid certifications and follow rigorous safety standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100 text-orange-600 text-xl shrink-0 mt-1">
                      <i className="ri-check-fill"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-title text-gray-900 mb-1">Guaranteed Lifetime Support</h4>
                      <p className="text-gray-500 text-sm">We back all product selections with ironclad manufacturer warranties and complete system startup testing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-12">
              <div className="p-8 rounded-3xl bg-white shadow-xl relative overflow-hidden" style={{ borderRadius: "24px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 className="text-2xl font-bold font-title text-gray-900 mb-6">Request A Professional Consultation</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6 col-12">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-100 p-3 bg-gray-50 rounded-lg text-sm focus:outline-none border border-transparent focus:border-orange-500" 
                        style={{ border: "1px solid #f0f0f0" }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-100 p-3 bg-gray-50 rounded-lg text-sm focus:outline-none border border-transparent focus:border-orange-500" 
                        style={{ border: "1px solid #f0f0f0" }}
                      />
                    </div>
                    <div className="col-12">
                      <select 
                        className="w-100 p-3 bg-gray-50 rounded-lg text-sm text-gray-500 focus:outline-none border border-transparent focus:border-orange-500"
                        style={{ border: "1px solid #f0f0f0", WebkitAppearance: "none", appearance: "none" }}
                      >
                        <option value="">Select Service Needed</option>
                        <option value="audit">Audit Services</option>
                        <option value="layout">Layout Planning</option>
                        <option value="project">Project Management</option>
                        <option value="install">Installation Services</option>
                        <option value="financial">Investment Return Analysis</option>
                        <option value="eaas">As A Service</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea 
                        placeholder="Project Details / Facility Size" 
                        rows={4}
                        className="w-100 p-3 bg-gray-50 rounded-lg text-sm focus:outline-none border border-transparent focus:border-orange-500" 
                        style={{ border: "1px solid #f0f0f0" }}
                      ></textarea>
                    </div>
                    <div className="col-12 mt-3">
                      <button 
                        type="submit" 
                        className="btn w-100 style3 py-3 rounded-lg text-white font-bold text-center flex items-center justify-center gap-2"
                        style={{ background: "var(--color-theme)", border: "none" }}
                      >
                        SUBMIT REQUEST <i className="ri-arrow-right-up-line"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
