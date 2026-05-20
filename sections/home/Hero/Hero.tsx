import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero-wrapper hero-3" id="hero">
            <div className="hero-bg-3-1 background-image bg-mask"
                style={{
                    backgroundImage: "url('/main-assets/img/hero/hero_bg_3_1.png')",
                    backgroundPosition: "center",
                    maskImage: "url('/main-assets/img/hero/hero_bg_mask_3_1.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
            </div>
            <div className="hero-shadow-text">RamGeneral</div>
            <div className="hero-bg-shape3-1 shape-mockup jump" style={{ bottom: '3%', left: '3%', position: 'absolute' }}>
                <img src="/main-assets/img/shape/sec-bg-shape2.png" alt="img" />
            </div>

            <div className="container">
                <div className="hero-style3">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="hero-subtitle">Leading LED Solutions <img src="/main-assets/img/icon/long-arrow-right2.svg" alt="img" /></span>
                            <h1 className="hero-title">Tough Lights for</h1>
                            <h1 className="hero-title style2">Tough Jobs</h1>
                            <p className="hero-text">Our all-in-one service provides expert installation, top rebates, and reliable ongoing maintenance, so your lighting system excels from day one.</p>
                            <Link href="/contact" className="btn style2">UPGRADE LIGHTING TODAY <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
