import Link from "next/link";

const aboutServices = [
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

const AboutServices = () => {
  return (
    <section className="space-top space-bottom bg-smoke">
      <div className="container">
        <div className="title-area text-center mb-50">
          <span className="sub-title">
            <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
            Our Services
          </span>
          <h2 className="sec-title">Services That Go Above and Beyond</h2>
          <p className="sec-text mx-auto" style={{ maxWidth: "720px" }}>
            With us, you don&apos;t have to think about lighting. We handle everything—from
            installation to maintenance—delivering seamless, energy-efficient solutions that work
            effortlessly for your business.
          </p>
        </div>
        <div className="row gy-30">
          {aboutServices.map((service) => (
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
  );
};

export default AboutServices;
