const ContactMap = () => {
  return (
    <div className="map-area overflow-hidden">
      <div className="map-sec">
        <iframe
          src="https://maps.google.com/maps?q=245+East+17th+Street,+Paterson,+NJ+07524&hl=en&z=15&output=embed"
          title="RAM General Supply — 245 East 17th Street, Paterson, NJ 07524"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;

