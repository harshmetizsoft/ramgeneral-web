"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type OpenPanel = "services" | "applications" | "products" | null;

interface MultiPageMobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  menuData?: Array<{
    id: string;
    uid: string;
    data: { title?: string };
    subcategories: Array<{
      id: string;
      uid: string;
      data: { title?: string };
    }>;
  }>;
}

function MobileNavToggle({
  label,
  isOpen,
  onToggle,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="mobile-nav-toggle"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      {label}
      <span className="mean-expand-class" aria-hidden="true"></span>
    </button>
  );
}

const MultiPageMobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  menuData = [],
}: MultiPageMobileMenuProps) => {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!isMenuOpen) {
      setOpenPanel(null);
      setOpenCategories([]);
    }
  }, [isMenuOpen]);

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  const togglePanel = (panel: OpenPanel) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
    );
  };

  return (
    <div className={`mobile-menu-wrapper ${isMenuOpen ? "body-visible" : ""}`}>
      <div className="mobile-menu-area">
        <div className="mobile-logo">
          <Link href="/" onClick={handleMobileMenuClose}>
            <img src="/logo.png" alt="RamGeneral" width={120} height={40} />
          </Link>
          <button
            type="button"
            onClick={handleMobileMenuClose}
            className="menu-toggle"
            aria-label="Close menu"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="mobile-menu">
          <ul>
            <li>
              <Link href="/" onClick={handleMobileMenuClose}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleMobileMenuClose}>
                About Us
              </Link>
            </li>

            <li
              className={`menu-item-has-children submenu-item-has-children ${
                openPanel === "services" ? "active-class" : ""
              }`}
            >
              <MobileNavToggle
                label="Services"
                isOpen={openPanel === "services"}
                onToggle={() => togglePanel("services")}
              />
              <ul
                className={`sub-menu submenu-class ${openPanel === "services" ? "menu-open" : ""}`}
              >
                <li>
                  <Link onClick={handleMobileMenuClose} href="/services/audit-services">
                    Audit Services
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/services/layout-planning">
                    Layout Planning
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/services/project-management">
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/services/installation-services">
                    Installation Services
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleMobileMenuClose}
                    href="/services/investment-return-analysis"
                  >
                    Investment Return Analysis
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/services/as-a-service">
                    As A Service
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`menu-item-has-children submenu-item-has-children ${
                openPanel === "applications" ? "active-class" : ""
              }`}
            >
              <MobileNavToggle
                label="Applications"
                isOpen={openPanel === "applications"}
                onToggle={() => togglePanel("applications")}
              />
              <ul
                className={`sub-menu submenu-class ${
                  openPanel === "applications" ? "menu-open" : ""
                }`}
              >
                <li>
                  <Link
                    onClick={handleMobileMenuClose}
                    href="/applications/airports-transport-hubs"
                  >
                    Airports & Transport Hubs
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/convenience-stores">
                    Convenience Stores
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleMobileMenuClose}
                    href="/applications/educational-institutions"
                  >
                    Educational Institutions
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/healthcare-facilities">
                    Healthcare Facilities
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/hotels-hospitality">
                    Hotels & Hospitality
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleMobileMenuClose}
                    href="/applications/manufacturing-facilities"
                  >
                    Manufacturing Facilities
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleMobileMenuClose}
                    href="/applications/municipal-infrastructure"
                  >
                    Municipal & Infrastructure
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/offices-corporate">
                    Offices & Corporate
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/parking-lots-garages">
                    Parking Lots & Garages
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/retail-stores">
                    Retail Stores
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/sports-venues">
                    Sports Venues
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenuClose} href="/applications/warehouses">
                    Warehouses
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`menu-item-has-children submenu-item-has-children ${
                openPanel === "products" ? "active-class" : ""
              }`}
            >
              <MobileNavToggle
                label="Products"
                isOpen={openPanel === "products"}
                onToggle={() => togglePanel("products")}
              />
              <ul
                className={`sub-menu submenu-class ${openPanel === "products" ? "menu-open" : ""}`}
              >
                {menuData.length > 0 ? (
                  menuData.map((category) => (
                    <li
                      key={category.id}
                      className={`menu-item-has-children submenu-item-has-children ${
                        openCategories.includes(category.id) ? "active-class" : ""
                      }`}
                    >
                      <MobileNavToggle
                        label={category.data.title || "Category"}
                        isOpen={openCategories.includes(category.id)}
                        onToggle={() => toggleCategory(category.id)}
                      />
                      <ul
                        className={`sub-menu submenu-class ${
                          openCategories.includes(category.id) ? "menu-open" : ""
                        }`}
                      >
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory.id}>
                            <Link
                              onClick={handleMobileMenuClose}
                              href={`/${category.uid}/${subcategory.uid}`}
                            >
                              {subcategory.data.title || "Subcategory"}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link onClick={handleMobileMenuClose} href="/shop">
                      View All Products
                    </Link>
                  </li>
                )}
              </ul>
            </li>

            <li>
              <Link onClick={handleMobileMenuClose} href="/rebates-incentives">
                Rebates & Incentives
              </Link>
            </li>
            <li>
              <Link onClick={handleMobileMenuClose} href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiPageMobileMenu;
