"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";

const HeaderTwo = ({ menuData = [] }: { menuData?: any[] }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/' ? 'active' : '';
        if (path === '/shop') {
            // Highlight Products if on shop, shop details, product details, or any category/subcategory page
            // (Assuming category pages are handled by [category] which might be at root)
            return (pathname.startsWith('/shop') || pathname.startsWith('/product')) ? 'active' : '';
        }
        return pathname === path || pathname.startsWith(path + '/') ? 'active' : '';
    };



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMobileMenuOpen = () => {
        setIsMenuOpen(true);
    }

    return (
        <div>
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} menuData={menuData}></MultiPageMobileMenu>
            <header className="nav-header header-layout3">
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    <div className="menu-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-start justify-content-between">
                                <div className="col-auto me-lg-5">
                                    <div className="header-logo">
                                        <Link href="/"><img src="/logo.png" alt="logo" width={130} height={50} /></Link>
                                    </div>
                                </div>
                                <div className="col-auto menu-bar ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li className={isActive('/')}>
                                                <Link href="/">HOME</Link>
                                            </li>
                                            <li className={isActive('/about')}>
                                                <Link href="/about">ABOUT US</Link>
                                            </li>
                                            <li className={`menu-item-has-children ${isActive('/services')}`}>
                                                <Link href="/services">SERVICES</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/services/audit-services">Lighting Audit Services</Link></li>
                                                    <li><Link href="/services/layout-planning">Lighting Layout Planning</Link></li>
                                                    <li><Link href="/services/project-management">Lighting Project Management</Link></li>
                                                    <li><Link href="/services/installation-services">Lighting Installation Services</Link></li>
                                                    <li><Link href="/services/investment-return-analysis">Lighting Investment Return Analysis</Link></li>
                                                    <li><Link href="/services/as-a-service">Lighting As A Service</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`menu-item-has-children ${isActive('/applications')}`}>
                                                <Link href="/applications">APPLICATIONS</Link>
                                                <ul className="sub-menu apps-menu">
                                                    <li><Link href="/applications/airports-transport-hubs">Airports & Transport Hubs</Link></li>
                                                    <li><Link href="/applications/convenience-stores">Convenience Stores</Link></li>
                                                    <li><Link href="/applications/educational-institutions">Educational Institutions</Link></li>
                                                    <li><Link href="/applications/healthcare-facilities">Healthcare Facilities</Link></li>
                                                    <li><Link href="/applications/hotels-hospitality">Hotels & Hospitality</Link></li>
                                                    <li><Link href="/applications/manufacturing-facilities">Manufacturing Facilities</Link></li>
                                                    <li><Link href="/applications/municipal-infrastructure">Municipal & Infrastructure</Link></li>
                                                    <li><Link href="/applications/offices-corporate">Offices & Corporate</Link></li>
                                                    <li><Link href="/applications/parking-lots-garages">Parking Lots & Garages</Link></li>
                                                    <li><Link href="/applications/retail-stores">Retail Stores</Link></li>
                                                    <li><Link href="/applications/sports-venues">Sports Venues</Link></li>
                                                    <li><Link href="/applications/warehouses">Warehouses</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`menu-item-has-children mega-menu-item ${isActive('/shop')}`}>
                                                <Link href="/shop">PRODUCTS</Link>
                                                <ul className="mega-menu">
                                                    <div className="mega-menu-container">
                                                        {menuData.map((category) => (
                                                            <li key={category.id} className="mega-menu-column">
                                                                <Link href={`/${category.uid}`} className="mega-menu-title">{category.data.title || "Category"}</Link>
                                                                <ul>
                                                                    {category.subcategories.map((subcategory: any) => (
                                                                        <li key={subcategory.id}>
                                                                            <Link href={`/${category.uid}/${subcategory.uid}`}>{subcategory.data.title || "Subcategory"}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </li>
                                                        ))}
                                                    </div>
                                                </ul>
                                            </li>
                                            <li className={isActive('/rebates-incentives')}>
                                                <Link href="/rebates-incentives">REBATES & INCENTIVES</Link>
                                            </li>
                                            <li className={isActive('/contact')}>
                                                <Link href="/contact">CONTACT US</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={handleMobileMenuOpen} type="button" className="menu-toggle icon-btn"><i className="ri-menu-line"></i></button>
                                    </div>
                                </div>
                                <div className="col-auto d-xl-block d-none space-left">
                                    <div className="header-button">
                                        <div className="navbar-right-desc">
                                            <div className="icon-btn">
                                                <i className="ri-phone-fill"></i>
                                            </div>
                                            <div className="navbar-right-desc-details">
                                                <h6 className="title">Call us any time</h6>
                                                <Link className="link" href="tel:+2590256215">+123 556 8824</Link>
                                            </div>
                                        </div>
                                        <Link href="/about" className="btn d-xxl-flex d-none">GET IN TOUCH <i className="ri-arrow-right-up-line"></i></Link>
                                        <button onClick={() => { }} type="button" className="sidebar-btn sideMenuToggler simple-icon" style={{ display: 'none' }}>
                                            <i className="ri-grid-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div >
    );
};

export default HeaderTwo; 




