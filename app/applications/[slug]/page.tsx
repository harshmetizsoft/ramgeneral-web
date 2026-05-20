import Link from "next/link";
import { notFound } from "next/navigation";

// Comprehensive applications dataset
const applicationsData: Record<string, {
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  bgGradient: string;
  accentColor: string;
  statNumber: string;
  statLabel: string;
  industryFact: string;
}> = {
  "airports-transport-hubs": {
    title: "Airports & Transport Hubs",
    slug: "airports-transport-hubs",
    icon: "ri-plane-line",
    shortDesc: "High-efficacy, low-glare LED solutions for runways, terminals, security areas, and baggage claims. Ensuring constant, robust illumination and complete FAA/local compliance.",
    challenges: [
      "High ceilings and hard-to-access fixtures in massive terminal buildings make maintenance expensive.",
      "Strict FAA and local transportation safety standards require high lighting uniformity and zero blind spots.",
      "Continuous 24/7 operations translate into massive electricity consumption and constant thermal strain on lamps."
    ],
    solutions: [
      "Extremely long-life LED high-bays that reduce bulb replacement maintenance cycles from 2 years to 10+ years.",
      "Advanced photometrical layouts that ensure even, low-glare distribution in checkpoints, check-ins, and security desks.",
      "Smart zoning controls and automated dimming profiles to scale back light output during low-passenger off-peak hours."
    ],
    features: [
      "High-lumen terminal high-bays (up to 150 lm/W)",
      "Vibration-resistant and dustproof structural gaskets",
      "Sleek low-glare diffuse linear fixtures for check-ins",
      "Circadian terminal lighting to reduce passenger travel stress",
      "Full integrations with emergency backup battery systems"
    ],
    bgGradient: "linear-gradient(135deg, #023e8a 0%, #0077b6 100%)",
    accentColor: "#0077b6",
    statNumber: "60%",
    statLabel: "Electricity Savings Over Old HID / Fluorescents",
    industryFact: "Runways, hangars, and terminals require strict glare control (UGR < 22) to support pilot sightlines and checkpoint security cameras."
  },
  "convenience-stores": {
    title: "Convenience Stores",
    slug: "convenience-stores",
    icon: "ri-store-2-line",
    shortDesc: "Bright, vibrant merchandising lighting that attracts customers, highlights product displays, and secures the exterior.",
    challenges: [
      "Fierce roadside competition requires a bright, secure, and visually appealing storefront to attract late-night drivers.",
      "Poorly lit cooler cases and shelving units make food items and beverages look unappealing.",
      "High cooling loads on refrigeration units are worsened by standard halogen or old fluorescent heat dissipation."
    ],
    solutions: [
      "Ultra-bright, modern LED canopy fixtures that create a safe, welcoming fuel court and exterior ambiance.",
      "High-CRI LED strip inserts inside glass coolers to highlight true product colors and boost impulse purchases.",
      "Low-profile architectural LEDs that direct foot traffic to points of sale while emitting virtually zero infrared heat."
    ],
    features: [
      "High-pressure waterproof gas canopy fixtures",
      "Ultra-slim 90+ CRI grocery shelf and display LEDs",
      "Integrated dusk-to-dawn exterior photocell sensors",
      "Direct retrofits for glass-door beverage cooler tracks",
      "Flicker-free visual comfort layouts"
    ],
    bgGradient: "linear-gradient(135deg, #ee6c4d 0%, #f25c54 100%)",
    accentColor: "#ee6c4d",
    statNumber: "15%",
    statLabel: "Average Sales Increase In Highlighted Merchandising Areas",
    industryFact: "Vibrant and well-lit canopies increase a passing driver's perceived safety and willingness to pull over by up to 40%."
  },
  "educational-institutions": {
    title: "Educational Institutions",
    slug: "educational-institutions",
    icon: "ri-book-open-line",
    shortDesc: "Low-glare panel lighting designed to support concentration, enhance learning environments, and lower operating costs for universities and schools.",
    challenges: [
      "Flickering fluorescents and glare trigger severe eye strain, headaches, and lower classroom concentration.",
      "Educational institutions operate under tight, municipal capital budgets with high maintenance overheads.",
      "Varying spaces (lecture halls, science labs, gyms, libraries) need completely different lux levels and configurations."
    ],
    solutions: [
      "Flicker-free, UGR < 19 flat LED troffers that reduce optical fatigue and foster classroom focus.",
      "Intelligent daylight harvesting sensors that dim perimeter lights when natural sunlight is sufficient.",
      "Long-lasting solid-state designs that completely eliminate mid-semester classroom maintenance disruptions."
    ],
    features: [
      "UGR < 19 ultra-low glare troffers and panels",
      "Tuning range from 3000K (warm library) to 5000K (active lab)",
      "Automatic ambient daylit sensor integrations",
      "Durable, impact-resistant gym high bays",
      "Lead-free, mercury-free eco-responsible builds"
    ],
    bgGradient: "linear-gradient(135deg, #7209b7 0%, #480ca8 100%)",
    accentColor: "#7209b7",
    statNumber: "50%",
    statLabel: "Total Institutional Maintenance & Energy Costs Reduction",
    industryFact: "Studies show that adjustable, natural-tuned lighting in classrooms boosts reading speeds and test performances by up to 18%."
  },
  "healthcare-facilities": {
    title: "Healthcare Facilities",
    slug: "healthcare-facilities",
    icon: "ri-heart-pulse-line",
    shortDesc: "Hygienic, high-CRI clean room LEDs and human-centric circadian cycle solutions designed to support rapid recovery and nurse performance.",
    challenges: [
      "Continuous 24-hour operations demand absolute reliability; a dark ward or surgical unit is an immediate hazard.",
      "Patients require calm, warm lighting for recovery, while clinical staff need bright, high-precision task illumination.",
      "Strict sanitization and dust protection protocols require completely sealed, easy-to-clean luminaires."
    ],
    solutions: [
      "Human-centric lighting systems that mimic daylight cycles to stabilize patient circadian rhythms and nurse sleep cycles.",
      "IP65-rated clean room troffers with anti-microbial coatings that resist harsh medical chemicals.",
      "Dual-mode surgical troffers that seamlessly toggle between diagnostic blue/green light and ultra-bright white light."
    ],
    features: [
      "IP65 sealed dust-tight medical troffers",
      "circadian-control integration",
      "High color rendering index (CRI > 95) for diagnostics",
      "Chemical-resistant acrylic lenses",
      "Instant restrike high-reliability configurations"
    ],
    bgGradient: "linear-gradient(135deg, #06d6a0 0%, #00b4d8 100%)",
    accentColor: "#06d6a0",
    statNumber: "95+",
    statLabel: "High Color Rendering Index (CRI) for Precise Diagnostics",
    industryFact: "High CRI lighting is critical in medical wards to ensure exact skin tone and blood oxygen assessments during visual checkups."
  },
  "hotels-hospitality": {
    title: "Hotels & Hospitality",
    slug: "hotels-hospitality",
    icon: "ri-hotel-line",
    shortDesc: "Warm, decorative facades, smart dimming lobbies, and tailored ambient guest suite lighting that delivers memorable brand experiences.",
    challenges: [
      "Hospitality relies on warmth and aesthetic luxury; harsh, clinical, or cold light immediately ruins the guest experience.",
      "Lobbies, restaurants, corridors, and facades operate 24/7, leading to high utility expenditures.",
      "Legacy incandescent bulbs in historic structures require constant maintenance and run extremely hot."
    ],
    solutions: [
      "Dim-to-warm LED systems that mimic the comforting glow of classic incandescent filaments on a highly efficient budget.",
      "Elegant facade wall-washers and spotlighting that emphasize local architecture and boost roadside prestige.",
      "Integrated control systems that automatically dim common area fixtures late at night to conserve power."
    ],
    features: [
      "Dim-to-warm architectural downlights (3000K down to 1800K)",
      "High-end CRI 90+ accent spotlights and tracks",
      "Waterproof facade wash lights with precise optical beams",
      "Smart network panels for common-area automation",
      "Custom retrofits for historic guest suite chandeliers"
    ],
    bgGradient: "linear-gradient(135deg, #ffb703 0%, #fb8500 100%)",
    accentColor: "#fb8500",
    statNumber: "75%",
    statLabel: "Common Area Power Savings with Warm, Automated LEDs",
    industryFact: "Warm ambient lighting (2700K - 3000K) increases guest comfort, relaxation scores, and lobby lounge dwell times by up to 25%."
  },
  "manufacturing-facilities": {
    title: "Manufacturing Facilities",
    slug: "manufacturing-facilities",
    icon: "ri-factory-line",
    shortDesc: "Heavy-duty industrial high bays, safety lighting, and dust/moisture-resistant vapor tights built to handle 24/7 demanding operations.",
    challenges: [
      "Harsh environments containing airborne dust, oils, vibrations, and high ambient temperatures quickly destroy standard fixtures.",
      "Poor lighting on picking lines, processing stations, and around heavy machinery increases workplace injuries.",
      "Continuous industrial production makes fixture maintenance extremely disruptive to output timelines."
    ],
    solutions: [
      "IP66 and IK08 rated industrial high-bays that resist extreme physical shocks, high temperatures, and moisture.",
      "High-uniformity photometric configurations that banish harsh shadows and illuminate dangerous picking machinery.",
      "Intelligent occupancy sensors that dim inactive zones, reducing overall warehouse thermal output."
    ],
    features: [
      "IP66 dustproof & waterproof ratings",
      "IK08 impact-resistant cast aluminum housings",
      "High ambient operating ratings (up to 130°F)",
      "High-lumen optical lenses (up to 30,000 lumens)",
      "Anti-glare reflectors to protect heavy machine operators"
    ],
    bgGradient: "linear-gradient(135deg, #e63946 0%, #d62246 100%)",
    accentColor: "#e63946",
    statNumber: "30%",
    statLabel: "Workplace Safety & Picking Accuracy Improvements",
    industryFact: "Manufacturing areas require high illuminance levels (500 to 750 lux) to support quality control and eliminate industrial fatigue."
  },
  "municipal-infrastructure": {
    title: "Municipal & Infrastructure",
    slug: "municipal-infrastructure",
    icon: "ri-government-line",
    shortDesc: "Maintenance-free streetlights, public parks, and administrative buildings optimized to slash energy bills and secure public safety.",
    challenges: [
      "Public streets, pedestrian pathways, and administrative facilities require extensive, high-cost lighting grids.",
      "Local councils face severe pressure to reduce environmental footprints and trim taxpayer-funded budgets.",
      "Vandalism, lightning strikes, and harsh outdoor weather require exceptionally tough, durable streetlights."
    ],
    solutions: [
      "Super-durable LED streetlights with built-in 10kV surge protection and cast-iron/aluminum housings.",
      "High-efficiency pedestrian lights that reduce crime rates in parks and alleys on a highly economical budget.",
      "Integrated photocells and smart grid controllers that notify operators of bulb failures automatically."
    ],
    features: [
      "10kV high-voltage lightning surge protection",
      "Cast-aluminum exterior housings with IK10 impact ratings",
      "Photocell auto-dusk/dawn photocontrols",
      "Precision optics that prevent dark-sky light pollution",
      "High-efficacy highway pole lights"
    ],
    bgGradient: "linear-gradient(135deg, #1d3557 0%, #457b9d 100%)",
    accentColor: "#1d3557",
    statNumber: "100k",
    statLabel: "Hours Maintenance-Free Lifespan on Streetlight Grids",
    industryFact: "Converting public streetlighting to high-performance LED streetlights reduces local public power expenditures by up to 65% on day one."
  },
  "offices-corporate": {
    title: "Offices & Corporate",
    slug: "offices-corporate",
    icon: "ri-building-line",
    shortDesc: "Modern architectural linear LEDs, panel troffers, and smart occupant sensors to boost day-to-day focus and visual comfort.",
    challenges: [
      "Old troffers with yellowed plastic diffuser panels produce uneven, dark lighting that causes screen glare.",
      "Corporate facilities consume huge amounts of power due to lights being left on in empty conference rooms and offices.",
      "Modern businesses require elegant, architectural designs to appeal to top talent and match corporate branding."
    ],
    solutions: [
      "Ultra-modern architectural linear LEDs that deliver clean indirect lighting, completely eliminating computer screen glare.",
      "Smart occupancy and daylight sensors that dim or turn off lights automatically when spaces are vacant.",
      "Full integration with building management networks for central power control and scheduling."
    ],
    features: [
      "Sleek modular linear LED strip systems",
      "Integrated micro-prism anti-glare diffusers",
      "PIR motion/occupancy sensor modules",
      "DALI and 0-10V seamless dimming protocols",
      "Daylight harvesting photocell integrations"
    ],
    bgGradient: "linear-gradient(135deg, #4a4e69 0%, #22223b 100%)",
    accentColor: "#4a4e69",
    statNumber: "LEED",
    statLabel: "Credits & Green Building Compliance Simplified",
    industryFact: "Offices designed with high-quality indirect lighting report a 12% drop in corporate employee eye strain and computer fatigue."
  },
  "parking-lots-garages": {
    title: "Parking Lots & Garages",
    slug: "parking-lots-garages",
    icon: "ri-roadster-line",
    shortDesc: "Vandal-proof vapor tights and high-lumen pole fixtures with integrated motion sensors that eliminate dark security hazards.",
    challenges: [
      "Dark zones, shadows, and low visibility create severe safety issues and security liabilities for properties.",
      "Garages must run parking deck lights 24/7, resulting in high utility overheads and constant wear on fixtures.",
      "Outdoor parking poles are exposed to high winds, moisture, bird nesting, and physical vandalism."
    ],
    solutions: [
      "Shatter-proof IP65 vapor-tight fixtures that provide continuous, uniform, and bright coverage across parking lanes.",
      "Intelligent parking pole LEDs with motion sensors that drop to 20% power when vacant and light up when cars approach.",
      "High-power outdoor shoe-box lights that cast wide paths to eliminate vehicle break-in dark zones."
    ],
    features: [
      "Vandal-proof polycarbonate shatterproof enclosures",
      "Wide-distribution Type III & Type V optical lenses",
      "IP65 waterproof and marine-grade protective finishes",
      "Step-dimming smart occupancy sensor modules",
      "Durable slip-fitter pole mounting systems"
    ],
    bgGradient: "linear-gradient(135deg, #2b2d42 0%, #8d99ae 100%)",
    accentColor: "#2b2d42",
    statNumber: "75%",
    statLabel: "Power Savings Achieved via Smart Step-Dimming Sensors",
    industryFact: "Property owners report that brightening parking complexes with white, high-CRI LEDs reduces parking lot break-ins by up to 50%."
  },
  "retail-stores": {
    title: "Retail Stores",
    slug: "retail-stores",
    icon: "ri-shopping-bag-line",
    shortDesc: "Vibrant, high-rendering spot track lights and display case LEDs that render product colors perfectly and direct buyer flow.",
    challenges: [
      "Faded or dim displays make products look unappealing, leading to reduced sales velocity.",
      "Poor color rendering (CRI) in apparel and cosmetic stores leads to customer returns due to mismatched colors in natural daylight.",
      "Continuous heat output from old metal-halide track spots raises store air-conditioning costs."
    ],
    solutions: [
      "State-of-the-art 90+ CRI LED track lights that render product colors with stunning, true-to-life accuracy.",
      "High-contrast directional spots that draw attention to window displays, shelf features, and sale banners.",
      "Cool-operating LEDs that eliminate thermal damage to sensitive apparel, cosmetics, or food items."
    ],
    features: [
      "Ultra-high Color Rendering index (CRI > 90, R9 > 50)",
      "Highly adjustable track light spots with zoom optics",
      "Cool-running LEDs that lower showroom thermal loads",
      "Directional canopy and entrance focus lights",
      "Sleek architectural profiles that match modern design themes"
    ],
    bgGradient: "linear-gradient(135deg, #ff007f 0%, #ea5501 100%)",
    accentColor: "#ea5501",
    statNumber: "90+",
    statLabel: "CRI Rating for Perfect Product Color Presentation",
    industryFact: "Retail studies prove that high-CRI accent lighting on store features drives customer product touch and purchase rates up by 22%."
  },
  "sports-venues": {
    title: "Sports Venues",
    slug: "sports-venues",
    icon: "ri-football-line",
    shortDesc: "Precision-engineered floodlights with zero-flicker optics and high output for HD broadcast requirements and maximum spectator comfort.",
    challenges: [
      "Slow-motion sports broadcasts require absolute zero-flicker illumination to prevent screen flashing.",
      "High-power stadium lights consume huge amounts of power and take up to 20 minutes to restrike/start up after power outages.",
      "Glare can blind players and spectators, causing crucial errors and ruined event experiences."
    ],
    solutions: [
      "High-power stadium LEDs with specialized drivers that guarantee flicker-free slow-motion replays at up to 1000fps.",
      "Instant-restrike LED floodlights that turn back on instantly at full brightness after power interruptions.",
      "Asymmetric glare-control optics that direct light strictly to the field, protecting players' eyes."
    ],
    features: [
      "Zero-flicker specialized high-speed broadcast drivers",
      "Asymmetric beam optics that eliminate upward light spill",
      "Instant-on, instant-restrike safety engineering",
      "IP66 rated rugged outdoor thermal sink structures",
      "Integrated laser-pointing aiming mechanisms"
    ],
    bgGradient: "linear-gradient(135deg, #38b000 0%, #007200 100%)",
    accentColor: "#38b000",
    statNumber: "0fps",
    statLabel: "Zero-Flicker Performance for High-Speed HD Broadcasts",
    industryFact: "Legacy stadium metal-halides require a 15-minute warm-up, whereas LED floodlights operate instantly, ensuring venue safety."
  },
  "warehouses": {
    title: "Warehouses",
    slug: "warehouses",
    icon: "ri-stack-line",
    shortDesc: "High-bay aisle illumination with smart sensor technology, shatterproof housings, and instant-on capabilities to maximize pick speed.",
    challenges: [
      "Tall racks block light, casting deep shadows across packaging and making inventory picking slow and error-prone.",
      "Leaving lights burning in vast, mostly empty aisles consumes substantial unnecessary energy.",
      "Cold-storage warehouses run extremely cold, causing old fluorescent fixtures to lose brightness and fail early."
    ],
    solutions: [
      "Linear high bays with highly directional optical lenses that focus light directly into storage aisles, eliminating dark rack shadows.",
      "Smart occupancy sensors that switch on lights instantly when a forklift enters an aisle, and dim them when empty.",
      "Cold-start LEDs that function perfectly and maintain full brightness in freezing refrigeration warehouses down to -40°F."
    ],
    features: [
      "Intelligent narrow aisle linear optical lenses",
      "Step-dimming microwave occupancy sensor attachments",
      "Instant-start drivers rated down to -40°F",
      "Shatterproof polycarbonate linear profiles",
      "Durable wire-guard cages to protect against forklift impacts"
    ],
    bgGradient: "linear-gradient(135deg, #293241 0%, #3d5a80 100%)",
    accentColor: "#293241",
    statNumber: "65%",
    statLabel: "Overall Energy Reduction with Intelligent Aisle Sensors",
    industryFact: "Intelligent warehousing layouts with localized motion dimming reduce corporate storage facility energy bills by up to 70%."
  }
};

// Statically compile all 12 paths at build-time in Next.js
export async function generateStaticParams() {
  return Object.keys(applicationsData).map((slug) => ({
    slug: slug,
  }));
}

// Statically compile page meta description and titles
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = applicationsData[slug];
  if (!app) return {};
  return {
    title: `${app.title} | Commercial & Industrial LED Solutions`,
    description: app.shortDesc,
  };
}

export default async function ApplicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = applicationsData[slug];

  if (!app) {
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
                <h1 className="breadcumb-title">{app.title}</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li>
                    <Link href="/applications">
                      APPLICATIONS
                    </Link>
                  </li>
                  <li className="active">{app.title.toUpperCase()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="space-top space-bottom">
        <div className="container">
          <div className="row gx-40">
            {/* Left Column: Challenges & Solutions */}
            <div className="col-xl-8 col-12">
              <div className="mb-40">
                {/* Industry icon with tailored gradient */}
                <div 
                  className="w-20 h-20 flex items-center justify-center rounded-3xl mb-6 text-white text-4xl shadow-lg"
                  style={{ background: app.bgGradient }}
                >
                  <i className={app.icon}></i>
                </div>

                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Lighting Challenges in {app.title}
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  {app.shortDesc}
                </p>

                {/* Challenges Section */}
                <div className="mb-40">
                  <h3 className="font-title text-2xl font-bold text-red-600 mb-20 flex items-center gap-2">
                    <i className="ri-error-warning-line"></i> Industry Challenges
                  </h3>
                  <div className="space-y-4">
                    {app.challenges.map((challenge, idx) => (
                      <div className="p-4 bg-red-50/40 border border-red-100 rounded-2xl flex gap-3" style={{ borderRadius: "16px" }} key={idx}>
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                          !
                        </div>
                        <p className="text-gray-600 font-body text-sm leading-relaxed m-0">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions Section */}
                <div className="mb-40">
                  <h3 className="font-title text-2xl font-bold text-emerald-600 mb-20 flex items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Our Custom LED Solutions
                  </h3>
                  <div className="space-y-4">
                    {app.solutions.map((solution, idx) => (
                      <div className="p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl flex gap-3" style={{ borderRadius: "16px" }} key={idx}>
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shrink-0 mt-0.5">
                          <i className="ri-check-line font-bold"></i>
                        </div>
                        <p className="text-gray-600 font-body text-sm leading-relaxed m-0 font-semibold">
                          {solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar, Checklist, Stats */}
            <div className="col-xl-4 col-12">
              <div className="space-y-6">
                {/* Stat Display Box */}
                <div 
                  className="p-6 rounded-3xl text-white shadow-xl text-center flex flex-col justify-center items-center"
                  style={{ background: app.bgGradient, borderRadius: "24px" }}
                >
                  <span className="text-5xl font-extrabold font-title tracking-tight mb-2">
                    {app.statNumber}
                  </span>
                  <p className="text-sm font-medium opacity-90 m-0">
                    {app.statLabel}
                  </p>
                </div>

                {/* Industry Fact Card */}
                <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-3xl" style={{ borderRadius: "24px" }}>
                  <h4 className="font-title text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-orange-500 text-xl"></i> Engineering Fact
                  </h4>
                  <p className="text-gray-600 font-body text-xs leading-relaxed m-0">
                    {app.industryFact}
                  </p>
                </div>

                {/* Key Features checklist */}
                <div className="p-6 bg-gray-50 border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i className="ri-equalizer-line text-orange-600"></i> Tech Specifications
                  </h4>
                  <ul className="space-y-3 pl-0 list-none m-0">
                    {app.features.map((feature, idx) => (
                      <li className="flex items-start gap-2" key={idx}>
                        <i className="ri-check-line text-emerald-500 text-lg shrink-0 mt-0.5"></i>
                        <span className="text-gray-600 font-body text-xs leading-relaxed font-semibold">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar Navigation */}
                <div className="p-6 bg-white border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4">
                    Other Sectors
                  </h4>
                  <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto pr-1">
                    {Object.values(applicationsData).map((a) => (
                      <Link 
                        key={a.slug} 
                        href={`/applications/${a.slug}`}
                        className={`p-3 rounded-xl flex items-center justify-between border transition-all duration-200 ${
                          a.slug === app.slug 
                            ? "bg-orange-50 border-orange-500 text-orange-600 font-bold" 
                            : "bg-white hover:bg-gray-50 border-gray-100 text-gray-700"
                        }`}
                        style={{ borderRadius: "12px" }}
                      >
                        <span className="flex items-center gap-3 text-xs">
                          <i className={`${a.icon} ${a.slug === app.slug ? "text-orange-600" : "text-gray-400"}`}></i>
                          {a.title}
                        </span>
                        <i className="ri-arrow-right-s-line text-lg"></i>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct CTA card */}
                <div className="p-6 bg-gray-900 text-white rounded-3xl text-center relative overflow-hidden" style={{ borderRadius: "24px" }}>
                  <div className="relative z-10">
                    <h4 className="font-title text-2xl font-bold mb-3">Custom Mapping</h4>
                    <p className="text-gray-300 text-xs mb-4">
                      Request custom photometric layout planning or structural mapping for your facilities today.
                    </p>
                    <Link 
                      href="/contact" 
                      className="btn w-100 style3 text-center py-3 block text-white font-bold"
                      style={{ background: "var(--color-theme)", border: "none" }}
                    >
                      GET FREE QUOTE <i className="ri-arrow-right-up-line"></i>
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
