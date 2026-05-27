import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Lighting Audit & Insights",
    text: "Discover smarter lighting solutions with a detailed analysis that highlights energy savings and efficiency opportunities tailored to your needs.",
  },
  {
    number: "02",
    title: "Design & Plan",
    text: "Transform your space with bespoke lighting designs that combine innovation, style, and functionality for exceptional results.",
  },
  {
    number: "03",
    title: "Hassle-Free Installation",
    text: "Experience seamless installation by experts who prioritize precision, professionalism, and your ultimate satisfaction.",
  },
];

const AboutThree = () => {
  return (
    <div className="about-area-2 space-top overflow-hidden">
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="title-area mb-25">
              <span className="sub-title">
                <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
                About Us
              </span>
              <h2 className="sec-title">Proudly Delivering Premium Lighting Services</h2>
              <p className="sec-text">
                Trusted by companies for exceptional lighting services, we offer expert installations,
                seamless rebate management, and superior energy-saving solutions. We ensure your
                space shines with the latest in LED technology.
              </p>
            </div>
            <div className="checklist mb-35">
              <ul>
                <li>
                  <img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="" />
                  End-to-End Lighting Services
                </li>
                <li>
                  <img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="" />
                  Affordable Pricing Plans
                </li>
                <li>
                  <img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="" />
                  100% Customer Satisfaction
                </li>
              </ul>
            </div>
            <div className="btn-group mb-40">
              <Link href="/contact" className="btn style3 me-3 mb-2">
                Discover More <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
            <div className="cta-grid-wrap">
              <div className="icon-btn">
                <i className="ri-phone-fill"></i>
              </div>
              <div className="media-body">
                <span className="link-subtitle d-block text-sm text-gray-500 mb-1">Call Us 24/7</span>
                <Link className="link" href="tel:+18443245726">
                  +1 844-324-5726
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-thumb3 mb-60 mb-xl-0">
              <img
                src="/main-assets/img/about-page/about_3.jpg"
                alt="About RAM General Supply"
                className="w-100 rounded"
              />
            </div>
          </div>
        </div>

        <div className="row gy-30 mt-20">
          {processSteps.map((step) => (
            <div className="col-lg-4 col-md-6" key={step.number}>
              <div className="about-process-step h-100">
                <span className="about-process-step__number">{step.number}</span>
                <h3 className="about-process-step__title">{step.title}</h3>
                <p className="about-process-step__text mb-0">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
