import Link from "next/link";

const contactItems = [
  {
    label: "Office Address",
    value: "245 East 17th Street, Paterson, NJ 07524",
    icon: "ri-map-pin-line",
    href: null as string | null,
  },
  {
    label: "Mobile Number",
    value: "+1 844-324-5726",
    icon: "ri-phone-line",
    href: "tel:+18443245726",
  },
  {
    label: "Email",
    value: "info@ramgeneralsupply.com",
    icon: "ri-mail-line",
    href: "mailto:info@ramgeneralsupply.com",
  },
];

const ContactArea = () => {
  return (
    <section className="contact-page-area space">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {contactItems.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.label}>
              <div className="contact-info-box">
                <span className="contact-info-box__icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </span>
                <h4 className="contact-info-box__label">{item.label}</h4>
                {item.href ? (
                  <Link href={item.href} className="contact-info-box__value">
                    {item.value}
                  </Link>
                ) : (
                  <p className="contact-info-box__value">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
