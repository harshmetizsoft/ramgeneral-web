import Link from "next/link";
import Scroll from "~/sections/shared/Scroll";

const services = [
  {
    number: "01",
    category: "AUDITS & ASSESSMENTS",
    title: "Lighting Audit Services",
    slug: "audit-services",
    icon: "/main-assets/img/about-page/service_card_1.svg",
    description:
      "Discover energy-saving opportunities with our expert audits and in-depth analysis, designed to optimize your lighting system for cost reduction and enhanced efficiency.",
  },
  {
    number: "02",
    category: "DESIGN & PLANNING",
    title: "Lighting Layout Planning",
    slug: "layout-planning",
    icon: "/main-assets/img/about-page/service_card_2.svg",
    description:
      "Create the perfect lighting ambiance with custom design and layout planning, tailored to enhance functionality and aesthetics for your space.",
  },
  {
    number: "03",
    category: "MANAGEMENT & EXECUTION",
    title: "Lighting Project Management",
    slug: "project-management",
    icon: "/main-assets/img/about-page/service_card_3.svg",
    description:
      "From start to finish, we expertly manage your lighting projects, ensuring seamless execution, timely delivery, and optimal results every time.",
  },
  {
    number: "04",
    category: "INSTALLATIONS & SETUP",
    title: "Lighting Installation Services",
    slug: "installation-services",
    icon: "/main-assets/img/about-page/service_card_4.svg",
    description:
      "Seamlessly upgrade your lighting with our professional installation services, ensuring optimal performance and enhanced efficiency for your space.",
  },
  {
    number: "05",
    category: "ROI & ANALYSIS",
    title: "Lighting Investment Return Analysis",
    slug: "investment-return-analysis",
    icon: "/main-assets/img/about-page/service_card_5.svg",
    description:
      "Evaluate the financial benefits of your lighting upgrades with our ROI analysis, ensuring you maximize savings and long-term value.",
  },
  {
    number: "06",
    category: "SUBSCRIPTION & SUPPORT",
    title: "Lighting as a Service",
    slug: "as-a-service",
    icon: "/main-assets/img/about-page/service_card_6.svg",
    description:
      "Experience hassle-free, cutting-edge lighting with our subscription-based service, offering maintenance, upgrades, and energy-efficient solutions without upfront costs.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Book Online",
    text: "Schedule your lighting consultation online. We go the extra mile to understand your facility, goals, and timeline from day one.",
  },
  {
    number: "02",
    title: "Detailed Estimate",
    text: "Receive a clear, itemized proposal covering audit findings, product recommendations, rebates, installation scope, and projected savings.",
  },
  {
    number: "03",
    title: "Work Planning",
    text: "Our team coordinates logistics, permits, materials, and scheduling so your upgrade runs smoothly with minimal operational disruption.",
  },
  {
    number: "04",
    title: "Get Delivery",
    text: "Professional installation, commissioning, and handoff—your new LED system is ready to perform with ongoing support when you need it.",
  },
];

export default function ServicesPage() {
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
                <h1 className="breadcumb-title">Our Services</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> Home
                    </Link>
                  </li>
                  <li className="active">Our Services</li>
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
              Our Services
            </span>
            <h2 className="sec-title">What Services We Offer</h2>
            <p className="sec-text mx-auto" style={{ maxWidth: "720px" }}>
              At RAM General Supply, we deliver end-to-end commercial LED lighting solutions—from
              audits and layout planning to installation, rebate management, ROI analysis, and
              Lighting as a Service. We help businesses cut energy costs, improve illumination, and
              simplify every step of the upgrade process.
            </p>
          </div>
          <div className="row gy-30">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.slug}>
                <div className="about-service-card h-100">
                  <div className="about-service-card__head">
                    <span className="about-service-card__number">{service.number}</span>
                    <img src={service.icon} alt="" className="about-service-card__icon" />
                  </div>
                  <span className="about-service-card__category">{service.category}</span>
                  <h3 className="about-service-card__title">{service.title}</h3>
                  <p className="about-service-card__text">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="about-service-card__link">
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
                <h2 className="sec-title">From Consultation to Completion</h2>
                <p className="sec-text">
                  Our proven process keeps your lighting project on track—transparent estimates,
                  expert planning, and professional delivery you can count on.
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
                            id="business_name"
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
                            id="email_address"
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
                            id="phone_number"
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
                            id="zipcode"
                            placeholder="Zipcode"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            name="address"
                            id="address"
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
