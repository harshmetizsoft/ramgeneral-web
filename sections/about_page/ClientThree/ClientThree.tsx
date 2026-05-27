"use client";

import Link from "next/link";
import Slider from "react-slick";

const clientLogos = [
  "/main-assets/img/about-page/brand_2_1.svg",
  "/main-assets/img/about-page/brand_2_2.svg",
  "/main-assets/img/about-page/brand_2_3.svg",
  "/main-assets/img/about-page/brand_2_4.svg",
  "/main-assets/img/about-page/brand_2_5.svg",
  "/main-assets/img/about-page/brand_2_6.svg",
];

const ClientThree = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div
      className="client-area-1 text-center space overflow-hidden shape-mockup-wrap background-image"
      style={{ backgroundImage: "url('/main-assets/img/bg/client-bg1-1.png')" }}
      data-overlay="title"
      data-opacity="9"
    >
      <div
        className="client_shape_1-1 shape-mockup jump-reverse"
        style={{ bottom: "0%", right: "-6%" }}
      >
        <img src="/main-assets/img/shape/client-bg-shape1.png" alt="" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-white">
            <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
            Happy Clients
          </span>
          <h2 className="sec-title text-white">Our Trusted Clients</h2>
        </div>
        <Slider {...settings} className="row global-carousel client-slider1">
          {clientLogos.map((logo, idx) => (
            <div className="col-lg-auto" key={idx}>
              <div className="client-logo">
                <Link href="/">
                  <img src={logo} alt={`Trusted client ${idx + 1}`} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientThree;
