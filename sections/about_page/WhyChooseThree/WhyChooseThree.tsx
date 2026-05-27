import Link from "next/link";

const features = [
  {
    icon: "/main-assets/img/about-page/choose_feature_1.svg",
    title: "Certified LED Specialists",
  },
  {
    icon: "/main-assets/img/about-page/choose_feature_2.svg",
    title: "Sustainable Lighting Solutions",
  },
  {
    icon: "/main-assets/img/about-page/choose_feature_3.svg",
    title: "Expert Assistance",
  },
  {
    icon: "/main-assets/img/about-page/choose_feature_4.svg",
    title: "On-Time, Every Time",
  },
];

const WhyChooseThree = () => {
  return (
    <div className="space-top space-bottom overflow-hidden shape-mockup-wrap">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{
          backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')",
          bottom: "0px",
        }}
      ></div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-lg-6 mb-40 mb-lg-0">
            <div className="about-why-thumb">
              <img src="/main-assets/img/about-page/why_1.jpg" alt="Why choose RAM General Supply" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
                Why Choose Us
              </span>
              <h2 className="sec-title">Why You Choose Our Services</h2>
              <p className="sec-text">
                With a focus on precision and excellence, our lighting services are designed to meet
                your unique needs. From expert installations to seamless rebate management and ongoing
                support, we provide comprehensive solutions that drive efficiency, sustainability,
                and long-term value for your business.
              </p>
            </div>
            <div className="row gy-20">
              {features.map((feature) => (
                <div className="col-sm-6" key={feature.title}>
                  <div className="about-why-feature">
                    <div className="about-why-feature__icon">
                      <img src={feature.icon} alt="" />
                    </div>
                    <h4 className="about-why-feature__title mb-0">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-group mt-40">
              <Link href="/contact" className="btn style3">
                Get Started Today <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseThree;
