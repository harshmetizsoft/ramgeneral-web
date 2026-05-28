import Link from "next/link";

export function ServiceContactSidebar() {
  return (
    <div
      className="p-6 bg-gray-900 text-white rounded-3xl relative overflow-hidden"
      style={{ borderRadius: "24px" }}
    >
      <div className="relative z-10">
        <h4 className="font-title text-2xl font-bold mb-4">Contact With Us</h4>
        <ul className="space-y-4 pl-0 list-none m-0 mb-5 text-start">
          <li>
            <h5 className="text-sm font-bold text-white mb-1">Our Address</h5>
            <p className="text-gray-300 text-xs m-0 leading-relaxed">
              245 East 17th Street, Paterson, NJ 07524
            </p>
          </li>
          <li>
            <h5 className="text-sm font-bold text-white mb-1">Phone Number</h5>
            <Link href="tel:+18443245726" className="text-gray-300 text-xs hover:text-white">
              +1 844-324-5726
            </Link>
          </li>
          <li>
            <h5 className="text-sm font-bold text-white mb-1">Email Address</h5>
            <Link
              href="mailto:info@ramgeneralsupply.com"
              className="text-gray-300 text-xs hover:text-white"
            >
              info@ramgeneralsupply.com
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className="btn w-100 style3 text-center py-3 block text-white font-bold"
          style={{ background: "var(--color-theme)", border: "none" }}
        >
          GET FREE QUOTE <i className="ri-arrow-right-up-line"></i>
        </Link>
      </div>
    </div>
  );
}
