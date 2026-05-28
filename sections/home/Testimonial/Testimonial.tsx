"use client";

import Slider from "react-slick";

interface TestimonialItem {
  image: string;
  headline: string;
  text: string;
  name: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    image: "/main-assets/img/testimonial/testi_2_2.png",
    headline: "Exceptional Savings!",
    text: "The LED upgrade has significantly reduced our energy bills. The rebate management was seamless and saved us thousands upfront.",
    name: "Sarah Jenkins",
    role: "/ Facility Manager",
  },
  {
    image: "/main-assets/img/testimonial/testi_2_3.png",
    headline: "Professional Team!",
    text: "Ram General Supply handled our warehouse lighting project with zero downtime. Highly professional and efficient installation.",
    name: "Michael Ross",
    role: "/ Operations Director",
  },
  {
    image: "/main-assets/img/testimonial/testi_2_1.png",
    headline: "Brighter Workspace!",
    text: "The custom lighting design has transformed our office environment. Our team loves the new atmosphere and improved efficiency.",
    name: "Elena Gilbert",
    role: "/ HR Manager",
  },
  {
    image: "/main-assets/img/testimonial/testi_2_2.png",
    headline: "Outstanding Results!",
    text: "From audit to installation, the process was smooth. Our facility is brighter, safer, and our energy costs dropped noticeably.",
    name: "David Chen",
    role: "/ Plant Manager",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        dots: true,
        autoplay: true,
      },
    },
  ],
};

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="testi-card style3">
      <div className="testi-card-thumb">
        <img src={item.image} alt={item.name} />
        <div className="media-body">
          <h4 className="testi-card_title">{item.headline}</h4>
          <div className="testi-card_review">
            <i className="ri-star-fill" aria-hidden />
            <i className="ri-star-fill" aria-hidden />
            <i className="ri-star-fill" aria-hidden />
            <i className="ri-star-fill" aria-hidden />
            <i className="ri-star-fill" aria-hidden />
          </div>
        </div>
      </div>
      <div className="testi-card_content">
        <p className="testi-card_text">{item.text}</p>
        <div className="testi-card-profile">
          <h4 className="testi-profile-title">{item.name}</h4>
          <span className="testi-profile-desig">{item.role}</span>
        </div>
      </div>
      <div className="quote-icon">
        <img src="/main-assets/img/icon/quote3.svg" alt="" />
      </div>
    </div>
  );
}

const Testimonial = () => {
  return (
    <section className="testimonial-area-3 overflow-hidden home-testimonial">
      <div className="container">
        <div className="title-area blog-area-content-text-extra-style mb-40">
          <span className="sub-title text-theme">
            Testimonials <i className="ri-arrow-right-down-line" aria-hidden />
          </span>
          <h2 className="sec-title">What client saying about us</h2>
        </div>

        <Slider {...sliderSettings} className="testi-slider3 home-testi-slider">
          {testimonials.map((item) => (
            <div key={`${item.name}-${item.headline}`} className="home-testi-slide">
              <TestimonialCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
