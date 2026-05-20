"use client";
import Link from "next/link";
import { useState } from "react";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("why-pill-1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="why-area-3 space-top overflow-hidden" id="service-sec">
      <div
        className="why-sec-bg3-1"
        style={{ backgroundImage: "url('/main-assets/img/bg/why-bg3-1.png')" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 why-three-extra">
            <div className="title-area text-center">
              <span className="sub-title text-theme">
                What we do <i className="ri-arrow-right-down-line"></i>
              </span>
              <h2 className="homeThree-custom-titleOne">
                We provide expert lighting <br /> solutions for your business
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-50">
          <div className="col-xl-4">
            <ul className="why-tab-wrap nav nav-pills" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "why-pill-1" ? "active" : ""}`}
                  id="why-pill-1-tab"
                  onClick={() => handleTabClick("why-pill-1")}
                  type="button" role="tab"
                >
                  Lighting Audit <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "why-pill-2" ? "active" : ""}`}
                  id="why-pill-2-tab"
                  onClick={() => handleTabClick("why-pill-2")}
                  type="button" role="tab"
                >
                  Layout Planning <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "why-pill-3" ? "active" : ""}`}
                  id="why-pill-3-tab"
                  onClick={() => handleTabClick("why-pill-3")}
                  type="button" role="tab"
                >
                  Project Management <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "why-pill-4" ? "active" : ""}`}
                  id="why-pill-4-tab"
                  onClick={() => handleTabClick("why-pill-4")}
                  type="button" role="tab"
                >
                  Installation <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "why-pill-5" ? "active" : ""}`}
                  id="why-pill-5-tab"
                  onClick={() => handleTabClick("why-pill-5")}
                  type="button" role="tab"
                >
                  ROI Analysis <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-xl-8">
            <div className="tab-content custom-animation">
              <div
                className={`tab-pane fade ${activeTab === "why-pill-1" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-1"
                role="tabpanel"
                aria-labelledby="why-pill-1-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/main-assets/img/why/AUDITS & ASSESSMENTS.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">01</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                       <h5 className="subtitle">Lighting Audit Services</h5>
                      <p className="text">
                        Uncover energy-saving potential with our expert audits, designed to enhance your lighting system for cost savings and efficiency.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link href="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-2" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-2"
                role="tabpanel"
                aria-labelledby="why-pill-2-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/main-assets/img/why/DESIGN & PLANNING.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">02</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                       <h5 className="subtitle">Lighting Layout Planning</h5>
                      <p className="text">
                        Craft the ideal lighting atmosphere with our tailored design and layout planning, enhancing both functionality and beauty for your space.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link href="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-3" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-3"
                role="tabpanel"
                aria-labelledby="why-pill-3-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/main-assets/img/why/MANAGEMENT & EXECUTION.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">03</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                       <h5 className="subtitle">Lighting Project Management</h5>
                      <p className="text">
                        From inception to completion, we expertly oversee your lighting projects, ensuring smooth execution, timely delivery, and excellent results.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link href="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-4" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-4"
                role="tabpanel"
                aria-labelledby="why-pill-4-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/main-assets/img/why/INSTALLATIONS & SETUP.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">04</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                       <h5 className="subtitle">Lighting Installation Services</h5>
                      <p className="text">
                        Effortlessly upgrade your lighting with our professional installation services, ensuring peak performance and improved efficiency for your area.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link href="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-5" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-5"
                role="tabpanel"
                aria-labelledby="why-pill-5-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/main-assets/img/why/ROI & ANALYSIS.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">05</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                       <h5 className="subtitle">Lighting ROI Analysis</h5>
                      <p className="text">
                        Assess the financial gains of your lighting upgrades with our ROI analysis, ensuring you optimize saving and achieve long-term benefits.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link href="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

