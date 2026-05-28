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

const sliderSettings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1200,
  autoplaySpeed: 3000,
  arrows: false,
  centerMode: false,
  dots: false,
  responsive: [
    { breakpoint: 1199, settings: { slidesToShow: 4 } },
    { breakpoint: 991, settings: { slidesToShow: 3 } },
    { breakpoint: 767, settings: { slidesToShow: 2 } },
    { breakpoint: 479, settings: { slidesToShow: 2 } },
  ],
};

const Client = () => {
  return (
    <section className="client-area-2 home-client-logos text-center overflow-hidden">
      <div className="container">
        <Slider {...sliderSettings} className="client-slider2 home-client-slider">
          {clientLogos.map((logo, idx) => (
            <div key={logo} className="home-client-slide">
              <div className="client-logo">
                <Link href="/">
                  <img src={logo} alt={`Trusted client ${idx + 1}`} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Client;
