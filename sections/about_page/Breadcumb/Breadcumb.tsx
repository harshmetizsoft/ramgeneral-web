import Link from "next/link";

const Breadcumb = () => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(234,85,1,0.55) 0%, rgba(21,22,28,0.75) 100%), url('/main-assets/img/bg/client-bg1-1.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">About Us</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">
                    <i className="ri-home-4-fill"></i> HOME
                  </Link>
                </li>
                <li className="active">ABOUT US</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;

