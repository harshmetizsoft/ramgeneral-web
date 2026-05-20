"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const portfolioItems = [
    {
        imgSrc: "/main-assets/img/project/project1_1.png",
        altText: "Warehouse Lighting",
        href: "/main-assets/img/project/project1_1.png",
        subtitle: "Industrial",
        title: "Large Warehouse LED Upgrade",
        date: "Completed Jan 2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/main-assets/img/project/project1_2.png",
        altText: "Office Lighting",
        href: "/main-assets/img/project/project1_2.png",
        subtitle: "Corporate",
        title: "Modern Office Smart Lighting",
        date: "Completed Feb 2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/main-assets/img/project/project1_3.png",
        altText: "Retail Lighting",
        href: "/main-assets/img/project/project1_3.png",
        subtitle: "Commercial",
        title: "High-End Retail Store Illumination",
        date: "Completed March 2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/main-assets/img/project/project1_1.png",
        altText: "Industrial Lighting",
        href: "/main-assets/img/project/project1_1.png",
        subtitle: "Industrial",
        title: "Manufacturing Facility LED Overhaul",
        date: "Completed April 2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/main-assets/img/project/project1_2.png",
        altText: "Outdoor Lighting",
        href: "/main-assets/img/project/project1_2.png",
        subtitle: "Infrastructure",
        title: "Parking Lot High-Mast LED",
        date: "Completed May 2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/main-assets/img/project/project1_3.png",
        altText: "Institutional Lighting",
        href: "/main-assets/img/project/project1_3.png",
        subtitle: "Institutional",
        title: "University Campus Energy Audit",
        date: "Completed June 2024",
        detailsHref: "/project-details"
    }
];

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleOpen = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div className="portfolio-area-3 space-bottom" id="project-sec">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7">
                        <div className="title-area blog-area-content-text-extra-style">
                            <span className="sub-title text-theme">Complete Works <i className="ri-arrow-right-down-line"></i></span>
                            <h2 className="sec-title">Explore recent projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="sec-btn">
                            <Link href="/project" className="btn">View All Projects <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-slider3 overflow-hidden">
                    <Slider {...settings} className="row gy-30 gx-30 global-carousel custom-carousel">
                        {portfolioItems.map((item, index) => (
                            <div className="col-lg-6 custom-slide" key={index}>
                                <div className="portfolio-card">
                                    <div className="portfolio-card-thumb">
                                        <img src={item.imgSrc} alt={item.altText} />
                                        <a className="icon-btn popup-image" onClick={() => handleOpen(index)}>
                                            <i className="ri-eye-line"></i>
                                        </a>
                                    </div>
                                    <div className="portfolio-card-details">
                                        <div className="media-left">
                                            <span className="portfolio-card-subtitle">{item.subtitle}</span>
                                            <h4 className="portfolio-card-title">
                                                <Link href={item.detailsHref}>{item.title}</Link>
                                            </h4>
                                            <p className="portofolio-card-text">{item.date}</p>
                                        </div>
                                    </div>
                                    <Link href={item.detailsHref} className="btn">
                                        Explore Service <i className="ri-arrow-right-up-line"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div id="large-slider">
                {isOpen && (
                    <Lightbox
                        mainSrc={portfolioItems[photoIndex].imgSrc}
                        nextSrc={portfolioItems[(photoIndex + 1) % portfolioItems.length].imgSrc}
                        prevSrc={portfolioItems[(photoIndex + portfolioItems.length - 1) % portfolioItems.length].imgSrc}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + portfolioItems.length - 1) % portfolioItems.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % portfolioItems.length)}
                        enableZoom={false}
                    />
                )}
            </div>
        </div>
    );
};

export default Portfolio;

