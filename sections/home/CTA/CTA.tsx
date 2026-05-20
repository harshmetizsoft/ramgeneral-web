import Link from "next/link";

const CTA = () => {
    return (
        <section className="cta-area-1 space" style={{ backgroundImage: "url('/main-assets/img/bg/cta-bg3-1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-8 col-lg-7">
                        <div className="title-area mb-0">
                            <h2 className="sec-title text-white">Ready to Upgrade Your Lighting?</h2>
                            <p className="sec-text text-white">Expert installation, top rebates, and reliable maintenance – let's get started today.</p>
                        </div>
                    </div>
                    <div className="col-lg-auto text-lg-end">
                        <Link href="/contact" className="btn style2">Contact Us <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
