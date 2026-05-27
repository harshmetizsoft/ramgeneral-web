import Link from "next/link";
import Scroll from "~/sections/shared/Scroll";

export const metadata = {
  title: "Rebates & Incentives | RAM General Supply",
  description:
    "Maximize your commercial LED lighting investment with utility rebates, state incentives, and federal programs. We handle assessment through submission.",
};

const rebateSteps = [
  {
    step: "Step 1",
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
    step: "Step 2",
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
    step: "Step 3",
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
    step: "Step 4",
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
    step: "Step 5",
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
        style={{ backgroundImage: "url('/main-assets/img/bg/breadcrumb-bg.png')" }}
      >
        <div
          className="section-animation-shape1-1 shape-mockup animation-infinite"
          data-top="0"
          style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')" }}
        ></div>
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

          <div className="row g-4">
            {rebateSteps.map((item, idx) => (
              <div className="col-lg-6 col-12" key={idx}>
                <div
                  className="p-5 h-100 bg-white border rounded-3xl"
                  style={{ borderRadius: "20px", borderColor: "rgba(0,0,0,0.06)" }}
                >
                  <span
                    className="inline-block text-sm font-bold tracking-wider uppercase mb-3 px-3 py-1 rounded-full"
                    style={{ background: "rgba(234, 85, 1, 0.1)", color: "var(--color-theme)" }}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-title text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-3">
                    {item.intro}
                  </p>
                  <ul className="pl-0 list-none m-0 space-y-2">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li className="flex items-start gap-2" key={bulletIdx}>
                        <i className="ri-checkbox-circle-fill text-emerald-500 shrink-0 mt-0.5"></i>
                        <span className="text-gray-700 font-body text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
            <div className="row align-items-center gx-40">
              <div className="col-lg-8 col-12">
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
              <div className="col-lg-4 col-12 mt-4 mt-lg-0 text-lg-end">
                <Link
                  href="/contact"
                  className="btn style3 text-white font-bold py-3 px-5 inline-flex items-center gap-2"
                  style={{ background: "var(--color-theme)", border: "none" }}
                >
                  GET STARTED <i className="ri-arrow-right-up-line"></i>
                </Link>
                <p className="text-gray-300 text-sm mt-3 mb-0">
                  <Link href="tel:+18443245726" className="text-gray-200 hover:text-white">
                    +1 844-324-5726
                  </Link>
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
