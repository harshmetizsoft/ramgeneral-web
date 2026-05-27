import Link from "next/link";
import Scroll from "~/sections/shared/Scroll";

const applications = [
  {
    number: "01",
    category: "TRANSPORTATION",
    title: "Airports & Transport Hubs",
    slug: "airports-transport-hubs",
    icon: "ri-plane-line",
    description:
      "High-quality LED lighting for terminals, parking lots, and walkways—precision illumination for safety, security, and a better passenger experience.",
  },
  {
    number: "02",
    category: "RETAIL",
    title: "Convenience Stores",
    slug: "convenience-stores",
    icon: "ri-store-2-line",
    description:
      "Tailored LED lighting for welcoming, efficient stores that highlight products, improve safety, and support stronger sales.",
  },
  {
    number: "03",
    category: "EDUCATION",
    title: "Educational Institutions",
    slug: "educational-institutions",
    icon: "ri-book-open-line",
    description:
      "LED solutions for classrooms, auditoriums, libraries, and campuses—improved focus, safety, and lower operating costs.",
  },
  {
    number: "04",
    category: "HEALTHCARE",
    title: "Healthcare Facilities",
    slug: "healthcare-facilities",
    icon: "ri-heart-pulse-line",
    description:
      "Lighting that balances clinical precision and patient comfort with consistent brightness, minimal glare, and energy efficiency.",
  },
  {
    number: "05",
    category: "HOSPITALITY",
    title: "Hotels & Hospitality",
    slug: "hotels-hospitality",
    icon: "ri-hotel-line",
    description:
      "Captivating ambiance for lobbies, guest rooms, and event spaces—energy-efficient performance with memorable guest experiences.",
  },
  {
    number: "06",
    category: "INDUSTRIAL",
    title: "Manufacturing Facilities",
    slug: "manufacturing-facilities",
    icon: "ri-factory-line",
    description:
      "Durable LED lighting for assembly lines, storage areas, and high-traffic zones—safety, precision, and productivity on the floor.",
  },
  {
    number: "07",
    category: "MUNICIPAL",
    title: "Municipal & Infrastructure",
    slug: "municipal-infrastructure",
    icon: "ri-government-line",
    description:
      "Efficient lighting for streets, parks, and public spaces—reliability, sustainability, and safer, smarter communities.",
  },
  {
    number: "08",
    category: "CORPORATE",
    title: "Offices & Corporate",
    slug: "offices-corporate",
    icon: "ri-building-line",
    description:
      "Bright, comfortable workspaces with consistent illumination, minimal glare, and energy-efficient LED upgrades.",
  },
  {
    number: "09",
    category: "PARKING & SECURITY",
    title: "Parking Lots & Garages",
    slug: "parking-lots-garages",
    icon: "ri-roadster-line",
    description:
      "Uniform LED illumination for outdoor lots and garages—enhanced visibility, security, and a welcoming atmosphere day or night.",
  },
  {
    number: "10",
    category: "RETAIL",
    title: "Retail Stores",
    slug: "retail-stores",
    icon: "ri-shopping-bag-line",
    description:
      "Vibrant, energy-efficient lighting for displays and shopping areas that improve visibility and drive customer engagement.",
  },
  {
    number: "11",
    category: "SPORTS & EVENTS",
    title: "Sports Venues",
    slug: "sports-venues",
    icon: "ri-football-line",
    description:
      "High-performance lighting for stadiums and complexes—exceptional brightness, uniform coverage, and reduced glare.",
  },
  {
    number: "12",
    category: "LOGISTICS",
    title: "Warehouses",
    slug: "warehouses",
    icon: "ri-stack-line",
    description:
      "Precise aisle and workspace illumination for safety, productivity, energy savings, and long-lasting performance.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Site Assessment",
    text: "We evaluate your facility’s current lighting, energy use, and operational needs to identify the best upgrade path for your industry.",
  },
  {
    number: "02",
    title: "Custom Design",
    text: "Photometric planning and product selection tailored to your space—code compliance, light levels, and efficiency targets included.",
  },
  {
    number: "03",
    title: "Rebate & Planning",
    text: "We secure available utility incentives and coordinate scheduling, materials, and logistics for a smooth rollout.",
  },
  {
    number: "04",
    title: "Expert Installation",
    text: "Certified crews install and commission your LED system with minimal disruption, then support you after project completion.",
  },
];

export default function ApplicationsPage() {
  return (
    <div style={{ overflow: "hidden" }}>
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
                <h1 className="breadcumb-title">Our Applications</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> Home
                    </Link>
                  </li>
                  <li className="active">Applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="space-top space-bottom bg-smoke">
        <div className="container">
          <div className="title-area text-center mb-50">
            <span className="sub-title">
              <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
              Applications
            </span>
            <h2 className="sec-title">Industries We Serve</h2>
            <p className="sec-text mx-auto" style={{ maxWidth: "720px" }}>
              Every industry has unique lighting requirements. RAM General Supply delivers
              sector-specific LED solutions for airports, retail, healthcare, hospitality,
              manufacturing, municipal projects, and more—engineered for safety, efficiency, and
              long-term savings.
            </p>
          </div>
          <div className="row gy-30">
            {applications.map((application) => (
              <div className="col-lg-4 col-md-6" key={application.slug}>
                <div className="about-service-card h-100">
                  <div className="about-service-card__head">
                    <span className="about-service-card__number">{application.number}</span>
                    <i
                      className={`${application.icon} about-service-card__icon-font`}
                      aria-hidden
                    />
                  </div>
                  <span className="about-service-card__category">{application.category}</span>
                  <h3 className="about-service-card__title">{application.title}</h3>
                  <p className="about-service-card__text">{application.description}</p>
                  <Link
                    href={`/applications/${application.slug}`}
                    className="about-service-card__link"
                  >
                    Read More <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-area-2 space overflow-hidden">
        <div className="container">
          <div className="row justify-content-between align-items-center gy-40">
            <div className="col-lg-5">
              <div className="title-area text-left">
                <span className="sub-title text-theme">
                  <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
                  How It Works
                </span>
                <h2 className="sec-title">Industry Lighting Upgrades in 4 Steps</h2>
                <p className="sec-text">
                  No matter your sector, we follow a proven process—assessment, design, rebates,
                  and installation—to deliver compliant, cost-effective LED upgrades with minimal
                  disruption to your operations.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/contact" className="btn style3">
                  Book An Appointment <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="process-grid-list style2">
                {processSteps.map((step) => (
                  <div className="process-grid" key={step.number}>
                    <div className="process-grid-number">{step.number}</div>
                    <div className="process-grid-details">
                      <h3 className="process-grid-title">{step.title}</h3>
                      <p className="process-grid-text">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area-2 space-bottom overflow-hidden">
        <div className="container">
          <div
            className="contact-wrap2 space overflow-hidden shape-mockup-wrap background-image"
            style={{ backgroundImage: "url('/main-assets/img/bg/contact-bg3-1.png')" }}
          >
            <div
              className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
              style={{
                backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')",
                top: "0px",
                left: "0px",
              }}
            ></div>
            <div className="row gy-60 justify-content-lg-end justify-content-center">
              <div className="col-xl-7">
                <div className="contact-form-wrap">
                  <div className="title-area">
                    <span className="sub-title text-theme">
                      <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
                      Get Free Quote
                    </span>
                    <h2 className="sec-title">Request A Quote</h2>
                  </div>
                  <form action="mail.php" method="POST" className="contact-form ajax-contact">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="business_name"
                            id="applications_business_name"
                            placeholder="Business Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email_address"
                            id="applications_email_address"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control"
                            name="phone_number"
                            id="applications_phone_number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="zipcode"
                            id="applications_zipcode"
                            placeholder="Zipcode"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            name="address"
                            id="applications_address"
                            cols={30}
                            rows={3}
                            className="form-control"
                            placeholder="Address"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-btn col-12">
                        <button type="submit" className="btn w-100">
                          Send Message Now <i className="ri-arrow-right-up-line"></i>
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scroll />
    </div>
  );
}
