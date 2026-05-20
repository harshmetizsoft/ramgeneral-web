"use client";

import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    initialSlide: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, dots: true } },
      { breakpoint: 768, settings: { slidesToShow: 1, dots: false } },
    ],
  };

  return (
    <div className="testimonial-area-3 overflow-hidden">
      <div className="container">
        {/* header testimonial */}
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <div className="title-area blog-area-content-text-extra-style">
              <span className="sub-title text-theme">
                Testimonials <i className="ri-arrow-right-down-line"></i>
              </span>
              <h2 className="sec-title">What client saying about us</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn btn-wrap">
              <div className="client-group-thumb">
                <img src="/main-assets/img/normal/client_group_1-2.png" alt="img" />
              </div>
              <div className="testi-counter-wrap">
                <h3 className="testi-counter-number">
                  <span className="counter-number">2</span>m+
                </h3>
                <p className="testi-counter-text">Success Peoples</p>
              </div>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          className="row global-carousel testi-slider3 slider-shadow"
        >
          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3">
              <div className="testi-card-thumb">
                <img src="/main-assets/img/testimonial/testi_2_2.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Exceptional Savings!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  The LED upgrade has significantly reduced our energy bills. The rebate management was seamless and saved us thousands upfront.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Sarah Jenkins</h4>
                  <span className="testi-profile-desig">/ Facility Manager</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/main-assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3">
              <div className="testi-card-thumb">
                <img src="/main-assets/img/testimonial/testi_2_3.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Professional Team!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  Ram General Supply handled our warehouse lighting project with zero downtime. Highly professional and efficient installation.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Michael Ross</h4>
                  <span className="testi-profile-desig">/ Operations Director</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/main-assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3">
              <div className="testi-card-thumb">
                <img src="/main-assets/img/testimonial/testi_2_1.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Brighter Workspace!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  The custom lighting design has transformed our office environment. Our team loves the new atmosphere and improved efficiency.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Elena Gilbert</h4>
                  <span className="testi-profile-desig">/ HR Manager</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/main-assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3">
              <div className="testi-card-thumb">
                <img src="/main-assets/img/testimonial/testi_2_2.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Best Construction!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  We craft unique digital experiences. With more than 7 years of
                  expertise we design and code clean.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Joshua Pul</h4>
                  <span className="testi-profile-desig">/ CEO Industry</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/main-assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3">
              <div className="testi-card-thumb">
                <img src="/main-assets/img/testimonial/testi_2_3.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Professional Team!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  Ram General Supply handled our warehouse lighting project with zero downtime. Highly professional and efficient installation.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Michael Ross</h4>
                  <span className="testi-profile-desig">/ Operations Director</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/main-assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3">
              <div className="testi-card-thumb">
                <img src="/main-assets/img/testimonial/testi_2_1.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Brighter Workspace!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  The custom lighting design has transformed our office environment. Our team loves the new atmosphere and improved efficiency.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Elena Gilbert</h4>
                  <span className="testi-profile-desig">/ HR Manager</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/main-assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

