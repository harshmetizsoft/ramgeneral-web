import Link from "next/link";
import Scroll from "~/sections/shared/Scroll";

export const metadata = {
  title: "Rebates & Incentives | RAM General Supply",
  description:
    "Maximize your commercial LED lighting investment with utility rebates, state incentives, and federal programs. We handle assessment through submission.",
};

const rebateSteps = [
  {
    number: "01",
    step: "Step 1",
    icon: "ri-survey-line",
    title: "Comprehensive Energy Assessment",
    intro:
      "Our expert team conducts a detailed evaluation of your current lighting infrastructure, identifying precise opportunities for LED upgrades and rebate potential. We analyse:",
    bullets: [
      "Existing lighting systems",
      "Energy consumption patterns",
      "Facility-specific lighting requirements",
      "Potential efficiency improvements",
    ],
  },
  {
    number: "02",
    step: "Step 2",
    icon: "ri-coupon-3-line",
    title: "Targeted Rebate Identification",
    intro: "We meticulously map out all available rebate opportunities across:",
    bullets: [
      "Local utility company programs",
      "State-level energy efficiency initiatives",
      "Federal government incentive channels",
      "Manufacturer-specific rebate offerings",
    ],
  },
  {
    number: "03",
    step: "Step 3",
    icon: "ri-lightbulb-flash-line",
    title: "Customized Incentive Strategy",
    intro: "Our specialists develop a tailored rebate strategy that:",
    bullets: [
      "Maximizes your financial benefits",
      "Aligns with your specific business needs",
      "Identifies the most lucrative incentive options",
      "Provides a clear projection of potential savings",
    ],
  },
  {
    number: "04",
    step: "Step 4",
    icon: "ri-file-list-3-line",
    title: "Documentation and Preparation",
    intro: "We handle the complex paperwork, ensuring:",
    bullets: [
      "Precise documentation preparation",
      "Compliance with all rebate requirements",
      "Accurate technical specifications",
      "Comprehensive application packages",
    ],
  },
  {
    number: "05",
    step: "Step 5",
    icon: "ri-send-plane-fill",
    title: "Submission and Tracking",
    intro: "Our dedicated team manages:",
    bullets: [
      "Complete rebate application submission",
      "Follow-up with incentive providers",
      "Real-time tracking of rebate status",
      "Timely follow-through to secure your financial benefits",
    ],
  },
];

export default function RebatesIncentivesPage() {
  return (
    <div style={{ overflow: "hidden" }} className="bg-white">
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
                <h1 className="breadcumb-title">Rebates & Incentives</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li className="active">REBATES & INCENTIVES</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="space-top space-bottom">
        <div className="container">
          <div className="row gx-60 align-items-start">
            <div className="col-xl-7 col-12">
              <div className="title-area mb-30">
                <h2 className="sec-title font-title text-4xl font-bold text-gray-900 mb-4">
                  Save More with Every Light: Rebates & Incentives Guide
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  Maximize your commercial lighting investment through our industry-leading rebate
                  and incentive optimization program. We turn complex government and utility
                  incentives into clear, tangible financial advantages for businesses ready to
                  upgrade their lighting infrastructure.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
                  Our robust rebate ecosystem strategically connects businesses with multiple
                  financial channels, including utility company programs, state-level energy
                  efficiency initiatives, and federal government rebate opportunities. Each program
                  is meticulously analyzed to identify the most advantageous options for your
                  specific lighting requirements, ensuring you never miss a potential saving that
                  could significantly reduce your lighting upgrade costs.
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-0">
                  Every rebate is an opportunity—and we&apos;re your strategic partner in capturing
                  maximum value. We handle the entire rebate process from initial assessment to
                  final submission, turning your LED lighting upgrade into a financially smart
                  investment that delivers immediate and long-term economic benefits.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-12">
              <div
                className="overflow-hidden rounded-3xl shadow-lg"
                style={{ borderRadius: "16px" }}
              >
                <img
                  src="/main-assets/img/rebates-incentives/project_inner_1.jpg"
                  alt="Commercial LED lighting rebate program"
                  className="w-100"
                  style={{ objectFit: "cover", minHeight: "320px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-bottom bg-gray-50">
        <div className="container">
          <div className="title-area text-center mb-50">
            <span className="sub-title">
              <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="" />
              OUR PROCESS
            </span>
            <h2 className="sec-title font-title">
              Our Rebate Roadmap: From Assessment to Savings
            </h2>
            <p className="sec-text mx-auto" style={{ maxWidth: "780px" }}>
              Upgrading to energy-efficient LED lighting has never been easier—or more rewarding.
              Our streamlined rebate process ensures that your business capitalizes on every
              available incentive, from local utility programs to federal initiatives. Let our
              experts handle the details while you enjoy reduced costs, improved lighting quality,
              and a brighter, more sustainable future.
            </p>
          </div>

          <div className="rebate-roadmap">
            {rebateSteps.map((item, idx) => (
              <article className="rebate-roadmap__step" key={item.number}>
                <div className="rebate-roadmap__track" aria-hidden="true">
                  <span className="rebate-roadmap__dot">
                    <i className={item.icon}></i>
                  </span>
                  {idx < rebateSteps.length - 1 && <span className="rebate-roadmap__connector" />}
                </div>
                <div className="rebate-roadmap__card">
                  <div className="rebate-roadmap__card-head">
                    <span className="rebate-roadmap__number">{item.number}</span>
                    <span className="rebate-roadmap__badge">{item.step}</span>
                  </div>
                  <h3 className="rebate-roadmap__title">{item.title}</h3>
                  <p className="rebate-roadmap__intro">{item.intro}</p>
                  <ul className="rebate-roadmap__list">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>
                        <i className="ri-checkbox-circle-fill" aria-hidden="true"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-bottom">
        <div className="container">
          <div
            className="p-8 p-lg-10 rounded-3xl text-white relative overflow-hidden"
            style={{
              borderRadius: "24px",
              background: "linear-gradient(135deg, #293241 0%, #1d3557 100%)",
            }}
          >
            <div className="row">
              <div className="col-12">
                <h2 className="font-title text-3xl font-bold text-white mb-4">
                  Secure Your Savings Before Time Runs Out
                </h2>
                <p className="font-body text-gray-200 leading-relaxed mb-0">
                  Rebates and incentives for energy-efficient upgrades are time-sensitive, and the
                  opportunity to maximize your savings won&apos;t last forever. By switching to LED
                  lighting now, you&apos;ll not only reduce your energy costs and maintenance
                  expenses but also take advantage of generous rebate programs before they expire.
                  Our expert team is here to ensure a smooth transition, handling every detail from
                  paperwork to installation. Don&apos;t miss the chance to enhance your lighting,
                  lower your carbon footprint, and boost your bottom line—act now to secure your
                  savings and future-proof your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scroll />
    </div>
  );
}
