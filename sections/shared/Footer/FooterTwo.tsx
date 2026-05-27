import Link from "next/link";

const FooterTwo = () => {
    return (
        <div>
            <footer
                className="footer-wrapper footer-layout1 background-image"
                style={{ backgroundImage: "url('/main-assets/img/bg/footer-bg1-1.png')" }}
            >
                <div className="container">
                    <div className="footer-top-1">
                        <div className="footer-logo">
                            <Link href="/">
                                <img src="/logo.png" alt="RAM General" width={180} height={70} style={{ filter: 'brightness(0) invert(1)' }} />
                            </Link>
                        </div>
                        <div className="subscribe-box">
                            <p className="subscribe-box_text">
                                Subscribe for the latest news. Stay updated on the latest trends.
                            </p>
                            <form className="newsletter-form">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Enter your email..."
                                    required
                                />
                                <button type="submit" className="btn style2">
                                    SUBSCRIBE<i className="ri-arrow-right-up-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget widget-about footer-widget">
                                    <h3 className="widget_title">About Company</h3>
                                    <p className="about-text">
                                        Lighting the way to a brighter, more sustainable future for businesses everywhere through expert LED installation and rebate management.
                                    </p>
                                    <h4 className="about-year">Since 2012</h4>
                                    <h5 className="about-subtitle">WE ARE AVAILABLE</h5>
                                    <p className="about-text">
                                        <span className="text-theme">Mon-Sat:</span> 10:00am to
                                        07:30pm
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Useful Links</h3>
                                    <div className="menu-all-pages-container grid-style">
                                        <ul className="menu">
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/shop">Our Products</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget widget-contact">
                                    <h3 className="widget_title">Office Address</h3>
                                    <p className="contact-text">
                                        245 East 17th Street, Paterson, NJ 07524
                                    </p>
                                    <h3 className="widget_title">Email Address</h3>
                                    <p className="text-white footer-text">Get in Touch!</p>
                                    <p className="footer-text">
                                        <Link href="mailto:info@ramgeneralsupply.com">info@ramgeneralsupply.com</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Phone Number</h3>
                                    <p className="footer-text">
                                        <Link href="tel:+18443245726">+1 844-324-5726</Link>
                                    </p>
                                    <h3 className="widget_title">Follow Us</h3>
                                    <div className="social-btn style2">
                                        <Link href="https://www.twitter.com/">
                                            <i className="ri-twitter-x-line"></i>
                                        </Link>
                                        <Link href="https://instagram.com/">
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                        <Link href="https://facebook.com/">
                                            <i className="ri-facebook-fill"></i>
                                        </Link>
                                        <Link href="https://linkedin.com/">
                                            <i className="ri-linkedin-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-md-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">
                                    © 2026 <Link href="/">Ram General Supply</Link> | All rights reserved
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <Link href="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterTwo; 
