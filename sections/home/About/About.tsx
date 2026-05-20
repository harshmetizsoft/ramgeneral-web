'use client';
import Link from "next/link";
import { useState } from "react";
import PopupVideo from "~/sections/shared/PopupVideo/PopupVideo";

const About = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const openPopup = () => {
        setPopup(true);
        const iframe = document.getElementById("youtube-video") as HTMLIFrameElement | null;
        if (iframe) {
            iframe.src = "https://www.youtube.com/embed/Mp8IXI1kzvQ?si=UQVMsmBriHPfD6Vf";
        }
        setIsActive(true);
        document.body.style.overflow = 'hidden';
    };

    return (
        <div>
            <div className="about-area-3 space overflow-hidden" id="about-sec">
                <div className="container">
                    <div className="row gy-80 gx-100 align-items-end">
                        <div className="col-xl-7">
                            <div className="about-wrap3">
                                <div className="title-area mb-25">
                                    <span className="sub-title text-theme">ABOUT US <i className="ri-arrow-right-down-line"></i></span>
                                    <h2 className="sec-title">Reliable LED Solutions for Every Industry</h2>
                                    <p className="sec-text">With us, you don’t have to think about lighting. We handle everything—from installation to maintenance—delivering seamless, energy-efficient solutions that work effortlessly for your business.</p>

                                </div>
                                <div className="checklist mb-35">
                                    <ul>
                                        <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Lighting Audit & Layout Planning</li>
                                        <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Expert Installation & Rebate Management</li>
                                    </ul>
                                </div>
                                <div className="btn-wrap">
                                    <div className="cta-grid-wrap">
                                        <div className="icon-btn">
                                            <i className="ri-phone-fill"></i>
                                        </div>
                                        <div className="media-body">
                                            <Link className="link" href="tel:+18443245726">+1 844-324-5726</Link>
                                            <h6 className="title">Need Help?</h6>
                                        </div>
                                    </div>
                                    <div className="about-author-wrap">
                                        <div className="author-thumb">
                                            <img src="/main-assets/img/normal/about_3-4.png" alt="img" />
                                        </div>
                                        <div className="media-body">
                                            <div className="author-sign">
                                                <img src="/main-assets/img/normal/about_3-3.png" alt="img" />
                                            </div>
                                            <div className="author-text">Ram General Supply</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* video */}
                            <div className="about-thumb3 mt-70">
                                <div className="video-wrap about-img-1">
                                    <img src="/main-assets/img/normal/about_3-1.png" alt="img" />
                                    <a onClick={openPopup} className="play-btn style6"><i className="ri-play-fill"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-8">
                            <div className="about-thumb3 mb-30">
                                <div className="about-img-2" style={{ maskImage: "url('/main-assets/img/normal/about_mask3-2.png')" }}>
                                    <img src="/main-assets/img/normal/about_3-2.png" alt="img" />
                                </div>
                            </div>
                            <p>We are revolutionizing industries with intelligent lighting solutions that maximize efficiency, drive savings, and deliver sustainable value for the future.</p>
                            <div className="btn-group mt-35">
                                <Link href="/about" className="btn">Now more Company <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
        </div>
    );
};

export default About;
