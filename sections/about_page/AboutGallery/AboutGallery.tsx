"use client";

import Slider from "react-slick";

const galleryImages = [
  "/main-assets/img/about-page/gallery_3_1.jpg",
  "/main-assets/img/about-page/gallery_3_2.jpg",
  "/main-assets/img/about-page/gallery_3_3.jpg",
  "/main-assets/img/about-page/gallery_3_4.jpg",
  "/main-assets/img/about-page/gallery_3_5.jpg",
  "/main-assets/img/about-page/gallery_3_6.jpg",
];

const AboutGallery = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="about-gallery-section space-bottom overflow-hidden">
      <div className="container-fluid px-0">
        <Slider {...settings} className="about-gallery-slider">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="about-gallery-slide">
              <img src={src} alt={`RAM General Supply project ${idx + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AboutGallery;
