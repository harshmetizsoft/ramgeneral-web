import Link from "next/link";
import { notFound } from "next/navigation";

// Define the comprehensive service data
const servicesData: Record<string, {
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  bgGradient: string;
  accentColor: string;
  statNumber: string;
  statLabel: string;
}> = {
  "audit-services": {
    title: "Audit Services",
    slug: "audit-services",
    icon: "ri-survey-line",
    shortDesc: "Comprehensive on-site energy audits and fixture counting to calculate exact energy savings and maximize utility rebate eligibility.",
    longDesc: "Our professional energy audit service provides a thorough, fixture-by-fixture assessment of your existing commercial space. We analyze operating hours, current energy draw, and light levels, matching them against state-of-the-art LED alternatives to calculate precise energy savings and return on investment. Our team directly coordinates with local utilities to secure the highest possible rebates for your project.",
    features: [
      "Thorough fixture-by-fixture physical counts",
      "Comprehensive energy bill analysis",
      "Accurate utility rebate calculations",
      "Detailed lighting level evaluations",
      "Actionable ROI audit report"
    ],
    benefits: [
      "Identify major energy-saving opportunities immediately",
      "Ensure compliance with local energy regulations",
      "Optimize utility rebate capture to minimize capital costs"
    ],
    process: [
      { step: "01", title: "Walkthrough", desc: "Our certified auditors perform a comprehensive survey of your facility." },
      { step: "02", title: "Data Analysis", desc: "We calculate current energy use and model high-performance LED equivalents." },
      { step: "03", title: "Rebate Filing", desc: "We coordinate with utilities to pre-approve maximum project rebates." }
    ],
    bgGradient: "linear-gradient(135deg, #FF6B35 0%, #EA5501 100%)",
    accentColor: "#EA5501",
    statNumber: "70%",
    statLabel: "Average Energy Cost Reduction Identified"
  },
  "layout-planning": {
    title: "Layout Planning",
    slug: "layout-planning",
    icon: "ri-layout-masonry-line",
    shortDesc: "Custom 3D photometric layout design ensuring perfect light levels, visual comfort, and strict code compliance for your specific facility layout.",
    longDesc: "Avoid the guesswork. Our Layout Planning services utilize industry-standard CAD and photometrical software to simulate the exact lighting levels in your facility before a single fixture is installed. We design optimal luminaire spacing to eliminate shadows, enhance worker safety, and ensure strict compliance with local building codes and IESNA recommendations.",
    features: [
      "3D Photometric calculations and simulations",
      "Energy code compliance (ASHRAE / IECC)",
      "Optimal light distribution mapping",
      "Luminaire layout drafting and CAD design",
      "Worker safety and glare analysis"
    ],
    benefits: [
      "Eliminate shadows and dark zones in critical work areas",
      "Verify light levels before purchasing products",
      "Ensure complete compliance with local building codes"
    ],
    process: [
      { step: "01", title: "Space Mapping", desc: "We acquire facility dimensions and task details for every area." },
      { step: "02", title: "3D Simulation", desc: "Our layout specialists simulate fixture photometrics in a virtual model." },
      { step: "03", title: "Final Blueprint", desc: "We deliver a detailed layout blueprint and compliance documents." }
    ],
    bgGradient: "linear-gradient(135deg, #4EA8DE 0%, #0077B6 100%)",
    accentColor: "#0077B6",
    statNumber: "100%",
    statLabel: "Photometric Precision & Code Compliance"
  },
  "project-management": {
    title: "Project Management",
    slug: "project-management",
    icon: "ri-bubble-chart-line",
    shortDesc: "End-to-end logistics, scheduling, material procurement, and supervision to guarantee smooth, on-time project completion with zero downtime.",
    longDesc: "Lighting upgrades involve many moving parts. Our experienced project managers oversee the entire scope of work—from purchasing, logistics, and delivery scheduling to coordination with local installers and inspection teams. We manage timelines, ensure strict quality standards are maintained, and minimize any disruption to your day-to-day operations.",
    features: [
      "End-to-end project scheduling and milestones",
      "Material coordination and logistics management",
      "Dedicated point-of-contact for all project phases",
      "On-site quality assurance inspections",
      "Comprehensive safety compliance monitoring"
    ],
    benefits: [
      "Minimize facility downtime and business disruption",
      "Keep the project strictly on schedule and within budget",
      "Ensure all building permits and utility rules are followed"
    ],
    process: [
      { step: "01", title: "Scheduling", desc: "We map out milestones, coordinate delivery, and establish timelines." },
      { step: "02", title: "Supervision", desc: "Our managers oversee every step of the installation on-site." },
      { step: "03", title: "Handover", desc: "We verify perfect operation and deliver final closeout documentation." }
    ],
    bgGradient: "linear-gradient(135deg, #7209B7 0%, #560BAD 100%)",
    accentColor: "#560BAD",
    statNumber: "0",
    statLabel: "Facility Operational Downtime During Installs"
  },
  "installation-services": {
    title: "Installation Services",
    slug: "installation-services",
    icon: "ri-tools-line",
    shortDesc: "Professional, safety-first LED installation and legacy system decommissioning handled by certified, licensed electrical technicians.",
    longDesc: "High-quality lighting products require expert installation to achieve their rated lifetime and efficiency. Our licensed, OSHA-certified technicians handle all aspects of installation—from simple retrofit kits to full high-bay industrial retrofits and control configurations. We follow strict safety standards and manage eco-friendly decommissioning and disposal of old mercury-containing bulbs.",
    features: [
      "Certified and licensed commercial electrical installation",
      "Legacy fixture decommissioning and eco-friendly disposal",
      "Advanced lighting control and sensor configuration",
      "Strict compliance with OSHA safety protocols",
      "Comprehensive post-installation testing"
    ],
    benefits: [
      "Professional-grade workmanship that secures product warranties",
      "Zero liability with fully insured, safety-certified field teams",
      "Eco-responsible recycling of old mercury-containing lamps"
    ],
    process: [
      { step: "01", title: "Decommissioning", desc: "We safely remove and package old lighting fixtures." },
      { step: "02", title: "Installation", desc: "Our licensed teams mount, wire, and configure new LED luminaires." },
      { step: "03", title: "Testing & Clean", desc: "We perform full electrical testing and leave the site spotless." }
    ],
    bgGradient: "linear-gradient(135deg, #FF9F1C 0%, #F15B2A 100%)",
    accentColor: "#F15B2A",
    statNumber: "10k+",
    statLabel: "LED Fixtures Safety Mounted & Commissioned"
  },
  "investment-return-analysis": {
    title: "Investment Return Analysis",
    slug: "investment-return-analysis",
    icon: "ri-line-chart-line",
    shortDesc: "Comprehensive financial modeling showcasing payback periods, IRR, monthly cash flow positive savings, and lifetime cost calculations.",
    longDesc: "Upgrade your lighting with complete financial confidence. Our Return on Investment (ROI) Analysis translates engineering metrics into clear financial metrics for business leaders and CFOs. We compile energy savings, maintenance cost reductions, heat load reductions, and tax deductions into a professional financial model showing payback periods, internal rate of return (IRR), and net cash flow benefits.",
    features: [
      "Detailed payback period and IRR calculations",
      "Monthly cash flow positive energy models",
      "HVAC heat-load reduction savings metrics",
      "Maintenance labor and material savings estimates",
      "Tax incentive eligibility (Section 179D, etc.)"
    ],
    benefits: [
      "Justify capital expenditures with bankable energy reports",
      "Visualize how soon the project pays for itself entirely",
      "Present concrete cash-flow positive numbers to the board"
    ],
    process: [
      { step: "01", title: "Financial Inputs", desc: "We gather current utility rates, maintenance costs, and capital quotes." },
      { step: "02", title: "Modeling", desc: "We run a complete lifetime cash-flow simulation including inflation." },
      { step: "03", title: "Executive Report", desc: "We deliver an executive-level presentation explaining the business case." }
    ],
    bgGradient: "linear-gradient(135deg, #2EC4B6 0%, #011627 100%)",
    accentColor: "#2EC4B6",
    statNumber: "18mo",
    statLabel: "Average Complete Payback Period Achieved"
  },
  "as-a-service": {
    title: "As A Service",
    slug: "as-a-service",
    icon: "ri-loop-left-line",
    shortDesc: "Innovative Energy-as-a-Service (EaaS) program delivering complete LED upgrades for $0 upfront, funded entirely by immediate energy savings.",
    longDesc: "Modernize your facility without touching your capital budget. Our Energy-as-a-Service (EaaS) model allows you to install state-of-the-art, high-efficiency LEDs and controls with zero upfront capital expenditure. Your monthly service payments are structured to be smaller than the money you save on your utility bill, creating immediate, positive cash flow and full turnkey maintenance.",
    features: [
      "$0 Upfront capital required (100% financed)",
      "Immediate positive cash flow on day one",
      "Off-balance sheet operating expense (OpEx) treatment",
      "Full ongoing system maintenance and repairs included",
      "Guaranteed light level and performance standards"
    ],
    benefits: [
      "Keep capital budgets focused on core business expansion",
      "Eliminate all maintenance worries with full coverage",
      "Upgrade outdated lights to boost productivity immediately"
    ],
    process: [
      { step: "01", title: "Proposal", desc: "We audit your facility and model a $0-down positive cash flow structure." },
      { step: "02", title: "Activation", desc: "We install the system and take complete responsibility for maintenance." },
      { step: "03", title: "Payment", desc: "You pay a set service fee that is offset entirely by your energy savings." }
    ],
    bgGradient: "linear-gradient(135deg, #EE6C4D 0%, #293241 100%)",
    accentColor: "#EE6C4D",
    statNumber: "$0",
    statLabel: "Upfront Capital Required for EaaS Clients"
  }
};

// Next.js static paths generator for full static compilation
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// Next.js dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Turnkey Commercial LED Upgrades`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

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
                <h1 className="breadcumb-title">{service.title}</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      SERVICES
                    </Link>
                  </li>
                  <li className="active">{service.title.toUpperCase()}</li>
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
            {/* Left Column: Descriptions and Process */}
            <div className="col-xl-8 col-12">
              <div className="mb-40">
                {/* Large Service Icon with Gradient */}
                <div 
                  className="w-20 h-20 flex items-center justify-center rounded-3xl mb-6 text-white text-4xl shadow-lg"
                  style={{ background: service.bgGradient }}
                >
                  <i className={service.icon}></i>
                </div>

                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Overview of {service.title}
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  {service.longDesc}
                </p>

                {/* Key Benefits Grid */}
                <h3 className="font-title text-2xl font-bold text-gray-900 mt-40 mb-20">Key Benefits</h3>
                <div className="row g-3">
                  {service.benefits.map((benefit, i) => (
                    <div className="col-md-6 col-12" key={i}>
                      <div className="p-4 bg-gray-50 rounded-2xl h-100 flex items-start gap-3 border border-gray-100" style={{ borderRadius: "16px" }}>
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0" 
                          style={{ backgroundColor: service.accentColor }}
                        >
                          <i className="ri-check-line"></i>
                        </div>
                        <p className="text-gray-700 font-body text-sm font-semibold leading-relaxed m-0 mt-1">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery / Process Timeline */}
              <div className="mt-50 mb-40">
                <h3 className="font-title text-2xl font-bold text-gray-900 mb-30">Our Operational Process</h3>
                <div className="row g-4">
                  {service.process.map((step) => (
                    <div className="col-md-4 col-12" key={step.step}>
                      <div className="p-4 bg-white border rounded-2xl relative h-100 flex flex-col justify-between" style={{ borderRadius: "16px", borderColor: "rgba(0,0,0,0.06)" }}>
                        <div className="flex justify-between items-center mb-4">
                          <span 
                            className="text-4xl font-bold font-title tracking-tight"
                            style={{ color: `${service.accentColor}20` }}
                          >
                            {step.step}
                          </span>
                          <span 
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg shadow-sm"
                            style={{ background: service.bgGradient }}
                          >
                            <i className={service.icon}></i>
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
            </div>

            {/* Right Column: Sidebar, Checklist, Stats */}
            <div className="col-xl-4 col-12">
              <div className="space-y-6">
                {/* Stats Card */}
                <div 
                  className="p-6 rounded-3xl text-white shadow-xl text-center flex flex-col justify-center items-center"
                  style={{ background: service.bgGradient, borderRadius: "24px" }}
                >
                  <span className="text-5xl font-extrabold font-title tracking-tight mb-2">
                    {service.statNumber}
                  </span>
                  <p className="text-sm font-medium opacity-90 m-0">
                    {service.statLabel}
                  </p>
                </div>

                {/* Core Features list card */}
                <div className="p-6 bg-gray-50 border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i className="ri-list-check-3 text-orange-600"></i> Core Features
                  </h4>
                  <ul className="space-y-3 pl-0 list-none m-0">
                    {service.features.map((feature, idx) => (
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
                    {Object.values(servicesData).map((s) => (
                      <Link 
                        key={s.slug} 
                        href={`/services/${s.slug}`}
                        className={`p-3 rounded-xl flex items-center justify-between border transition-all duration-200 ${
                          s.slug === service.slug 
                            ? "bg-orange-50 border-orange-500 text-orange-600 font-bold" 
                            : "bg-white hover:bg-gray-50 border-gray-100 text-gray-700"
                        }`}
                        style={{ borderRadius: "12px" }}
                      >
                        <span className="flex items-center gap-3 text-sm">
                          <i className={`${s.icon} ${s.slug === service.slug ? "text-orange-600" : "text-gray-400"}`}></i>
                          {s.title}
                        </span>
                        <i className="ri-arrow-right-s-line text-lg"></i>
                      </Link>
                    ))}
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
    </div>
  );
}
