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

const Client = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        dots: false,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="client-area-2 text-center space overflow-hidden">
            <div className="container">
                <Slider
                    {...settings}
                    className="row global-carousel client-slider2"
                >
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

export default Client;

