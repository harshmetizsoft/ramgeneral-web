const teamMembers = [
  {
    name: "John Simon",
    role: "Best Technician of Office Repair and Maintenance",
    image: "/main-assets/img/about-page/team_1_1.jpg",
  },
  {
    name: "Michel Jack",
    role: "Best Technician of Home Service and Maintenance",
    image: "/main-assets/img/about-page/team_1_2.jpg",
  },
  {
    name: "Mackolin Smith",
    role: "Best Technician of AC Installation and Maintenance",
    image: "/main-assets/img/about-page/team_1_3.jpg",
  },
  {
    name: "Ralph Edwards",
    role: "Best Technician of Home Service and Maintenance",
    image: "/main-assets/img/about-page/team_1_4.jpg",
  },
  {
    name: "Guy Hawkins",
    role: "Best Technician of AC Installation and Maintenance",
    image: "/main-assets/img/about-page/team_1_5.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Best Technician of Home Service and Maintenance",
    image: "/main-assets/img/about-page/team_1_6.jpg",
  },
];

const TeamThree = () => {
  return (
    <div className="team-area-1 space shape-mockup-wrap">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{
          backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')",
          bottom: "0px",
        }}
      ></div>
      <div className="container">
        <div className="title-area text-center mb-50">
          <span className="sub-title">
            <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
            Team Members
          </span>
          <h2 className="sec-title">Our Dedicated Team</h2>
        </div>

        <div className="row gy-30 justify-content-center">
          {teamMembers.map((member) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={member.name}>
              <div className="about-team-card text-center h-100">
                <div className="about-team-card__img">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="about-team-card__name">{member.name}</h3>
                <p className="about-team-card__role mb-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamThree;
