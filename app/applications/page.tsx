"use client";
import Link from "next/link";

const applications = [
  {
    title: "Airports & Transport Hubs",
    slug: "airports-transport-hubs",
    icon: "ri-plane-line",
    shortDesc: "High-efficacy, low-glare LED solutions for runways, passenger terminals, baggage claims, and security checkpoints to ensure FAA compliance.",
    bgGradient: "linear-gradient(135deg, #023e8a 0%, #0077b6 100%)",
    accentColor: "#0077b6"
  },
  {
    title: "Convenience Stores",
    slug: "convenience-stores",
    icon: "ri-store-2-line",
    shortDesc: "High-impact merchandising and canopy lights that draw in motorists, eliminate shadows, and create a warm, inviting store perimeter.",
    bgGradient: "linear-gradient(135deg, #ee6c4d 0%, #f25c54 100%)",
    accentColor: "#ee6c4d"
  },
  {
    title: "Educational Institutions",
    slug: "educational-institutions",
    icon: "ri-book-open-line",
    shortDesc: "Low-glare panel lighting designed to support concentration, enhance learning environments, and lower operating costs for universities and schools.",
    bgGradient: "linear-gradient(135deg, #7209b7 0%, #480ca8 100%)",
    accentColor: "#7209b7"
  },
  {
    title: "Healthcare Facilities",
    slug: "healthcare-facilities",
    icon: "ri-heart-pulse-line",
    shortDesc: "Hygienic, high-CRI clean room LEDs and human-centric circadian cycle solutions designed to support rapid recovery and nurse performance.",
    bgGradient: "linear-gradient(135deg, #06d6a0 0%, #00b4d8 100%)",
    accentColor: "#06d6a0"
  },
  {
    title: "Hotels & Hospitality",
    slug: "hotels-hospitality",
    icon: "ri-hotel-line",
    shortDesc: "Warm, decorative facades, smart dimming lobbies, and tailored ambient guest suite lighting that delivers memorable brand experiences.",
    bgGradient: "linear-gradient(135deg, #ffb703 0%, #fb8500 100%)",
    accentColor: "#fb8500"
  },
  {
    title: "Manufacturing Facilities",
    slug: "manufacturing-facilities",
    icon: "ri-factory-line",
    shortDesc: "Heavy-duty industrial high bays, safety lighting, and dust/moisture-resistant vapor tights built to handle 24/7 demanding operations.",
    bgGradient: "linear-gradient(135deg, #e63946 0%, #d62246 100%)",
    accentColor: "#e63946"
  },
  {
    title: "Municipal & Infrastructure",
    slug: "municipal-infrastructure",
    icon: "ri-government-line",
    shortDesc: "Maintenance-free streetlights, public parks, and administrative buildings optimized to slash energy bills and secure public safety.",
    bgGradient: "linear-gradient(135deg, #1d3557 0%, #457b9d 100%)",
    accentColor: "#1d3557"
  },
  {
    title: "Offices & Corporate",
    slug: "offices-corporate",
    icon: "ri-building-line",
    shortDesc: "Modern architectural linear LEDs, panel troffers, and smart occupant sensors to boost day-to-day focus and visual comfort.",
    bgGradient: "linear-gradient(135deg, #4a4e69 0%, #22223b 100%)",
    accentColor: "#4a4e69"
  },
  {
    title: "Parking Lots & Garages",
    slug: "parking-lots-garages",
    icon: "ri-roadster-line",
    shortDesc: "Vandal-proof vapor tights and high-lumen pole fixtures with integrated motion sensors that eliminate dark security hazards.",
    bgGradient: "linear-gradient(135deg, #2b2d42 0%, #8d99ae 100%)",
    accentColor: "#2b2d42"
  },
  {
    title: "Retail Stores",
    slug: "retail-stores",
    icon: "ri-shopping-bag-line",
    shortDesc: "Vibrant, high-rendering spot track lights and display case LEDs that render product colors perfectly and direct buyer flow.",
    bgGradient: "linear-gradient(135deg, #ff007f 0%, #ea5501 100%)",
    accentColor: "#ea5501"
  },
  {
    title: "Sports Venues",
    slug: "sports-venues",
    icon: "ri-football-line",
    shortDesc: "Precision-engineered floodlights with zero-flicker optics and high output for HD broadcast requirements and maximum spectator comfort.",
    bgGradient: "linear-gradient(135deg, #38b000 0%, #007200 100%)",
    accentColor: "#38b000"
  },
  {
    title: "Warehouses",
    slug: "warehouses",
    icon: "ri-stack-line",
    shortDesc: "High-bay aisle illumination with smart sensor technology, shatterproof housings, and instant-on capabilities to maximize pick speed.",
    bgGradient: "linear-gradient(135deg, #293241 0%, #3d5a80 100%)",
    accentColor: "#293241"
  }
];

export default function ApplicationsPage() {
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
                <h1 className="breadcumb-title">Our Applications</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">APPLICATIONS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Grid Section */}
      <section className="space-top space-bottom">
        <div className="container">
          <div className="title-area text-center mb-50">
            <span className="sub-title">
              <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" />
              INDUSTRIES WE SERVE
            </span>
            <h2 className="sec-title">
              Lighting Solutions Built For Performance
            </h2>
            <p className="sec-text mx-auto" style={{ maxWidth: "680px" }}>
              Every industry has distinct operational challenges, safety guidelines, and light level requirements. 
              We engineer sector-specific LED upgrades tailored to your exact industry standards.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {applications.map((app) => (
              <div className="col-xl-4 col-md-6 col-12" key={app.slug}>
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
                      style={{ background: app.bgGradient }}
                    >
                      <i className={app.icon}></i>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 font-title text-gray-900 transition-colors duration-200 hover:text-[var(--color-theme)]">
                      <Link href={`/applications/${app.slug}`}>
                        {app.title}
                      </Link>
                    </h3>

                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                      {app.shortDesc}
                    </p>
                  </div>

                  <div>
                    <Link 
                      href={`/applications/${app.slug}`}
                      className="inline-flex items-center text-sm font-bold tracking-wider uppercase transition-colors duration-200"
                      style={{ color: app.accentColor }}
                    >
                      EXPLORE SOLUTION 
                      <i className="ri-arrow-right-line ms-2 transition-transform duration-200"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit impact section */}
      <section className="bg-gray-50 space-top space-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-12">
              <div className="mb-40 mb-xl-0">
                <span className="sub-title">
                  <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" />
                  THE UPGRADE PROCESS
                </span>
                <h2 className="sec-title mb-3">
                  Upgrading Industry Lighting in 4 Steps
                </h2>
                <p className="sec-text mb-4">
                  No matter the sector, we apply a methodical, highly certified upgrade process 
                  to guarantee code compliance, maximize utility savings, and ensure zero operations disruption.
                </p>

                <div className="row g-3">
                  <div className="col-md-6 col-12">
                    <div className="p-4 bg-white rounded-2xl border border-gray-100" style={{ borderRadius: "16px" }}>
                      <span className="text-orange-600 font-bold text-sm tracking-widest block mb-1">STEP 01</span>
                      <h4 className="text-lg font-bold font-title text-gray-900 mb-2">Detailed Site Audit</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">Our crews perform on-site walkthroughs, counts, and fixture assessments.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="p-4 bg-white rounded-2xl border border-gray-100" style={{ borderRadius: "16px" }}>
                      <span className="text-orange-600 font-bold text-sm tracking-widest block mb-1">STEP 02</span>
                      <h4 className="text-lg font-bold font-title text-gray-900 mb-2">Photometric Design</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">We build 3D virtual maps of your space to test spacing, glare, and shadows.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="p-4 bg-white rounded-2xl border border-gray-100" style={{ borderRadius: "16px" }}>
                      <span className="text-orange-600 font-bold text-sm tracking-widest block mb-1">STEP 03</span>
                      <h4 className="text-lg font-bold font-title text-gray-900 mb-2">Rebate Administrative</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">We coordinate directly with local utilities to secure complete maximum rebate funds.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="p-4 bg-white rounded-2xl border border-gray-100" style={{ borderRadius: "16px" }}>
                      <span className="text-orange-600 font-bold text-sm tracking-widest block mb-1">STEP 04</span>
                      <h4 className="text-lg font-bold font-title text-gray-900 mb-2">Expert Installation</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">Our certified crews perform safety-first installations and old fixture recycling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-12">
              <div className="p-8 rounded-3xl bg-white shadow-xl" style={{ borderRadius: "24px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 className="text-2xl font-bold font-title text-gray-900 mb-6">Schedule Your Facility Audit</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6 col-12">
                      <input 
                        type="text" 
                        placeholder="Company Name" 
                        className="w-100 p-3 bg-gray-50 rounded-lg text-sm focus:outline-none border border-transparent focus:border-orange-500" 
                        style={{ border: "1px solid #f0f0f0" }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <input 
                        type="text" 
                        placeholder="Contact Person" 
                        className="w-100 p-3 bg-gray-50 rounded-lg text-sm focus:outline-none border border-transparent focus:border-orange-500" 
                        style={{ border: "1px solid #f0f0f0" }}
                      />
                    </div>
                    <div className="col-12">
                      <select 
                        className="w-100 p-3 bg-gray-50 rounded-lg text-sm text-gray-500 focus:outline-none border border-transparent focus:border-orange-500"
                        style={{ border: "1px solid #f0f0f0", WebkitAppearance: "none", appearance: "none" }}
                      >
                        <option value="">Select Your Industry</option>
                        {applications.map(app => (
                          <option key={app.slug} value={app.slug}>{app.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea 
                        placeholder="Please describe your current lighting fixtures and primary upgrade objectives (e.g. energy bills decrease, glare reduction, brightness improvement)." 
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
                        REQUEST AUDIT SCHEDULE <i className="ri-arrow-right-up-line"></i>
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
