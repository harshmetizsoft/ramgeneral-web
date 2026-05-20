"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen, menuData = [] }: { isMenuOpen: boolean, setIsMenuOpen: (val: boolean) => void, menuData?: any[] }) => {
    const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
    const [isMultiPageMenuOpen, setIsMultiPageMenuOpen] = useState(false);
    const [isOnePageMenuOpen, setIsOnePageMenuOpen] = useState(false);
    const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const [isApplicationsMenuOpen, setIsApplicationsMenuOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState<string[]>([]);

    const handleMobileMenuClose = () => {
        setIsMenuOpen(false);
    }

    const [menuStyles, setMenuStyles] = useState({
        isHomeMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isMultiPageMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isOnePageMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isProductsMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isServicesMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isApplicationsMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
    });

    // Home
    useEffect(() => {
        if (isHomeMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isHomeMenu: {
                    ...prevStyles.isHomeMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isHomeMenu: {
                        ...prevStyles.isHomeMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isHomeMenu: {
                    ...prevStyles.isHomeMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isHomeMenu: {
                        ...prevStyles.isHomeMenu,
                        display: 'none',
                    },
                }));
            }, 500);
        }
    }, [isHomeMenuOpen]);

    // MultiPage
    useEffect(() => {
        if (isMultiPageMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isMultiPageMenu: {
                    ...prevStyles.isMultiPageMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isMultiPageMenu: {
                        ...prevStyles.isMultiPageMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isMultiPageMenu: {
                    ...prevStyles.isMultiPageMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isMultiPageMenu: {
                        ...prevStyles.isMultiPageMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isMultiPageMenuOpen]);

    // OnePage
    useEffect(() => {
        if (isOnePageMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isOnePageMenu: {
                    ...prevStyles.isOnePageMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isOnePageMenu: {
                        ...prevStyles.isOnePageMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isOnePageMenu: {
                    ...prevStyles.isOnePageMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isOnePageMenu: {
                        ...prevStyles.isOnePageMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isOnePageMenuOpen]);

    // Products
    useEffect(() => {
        if (isProductsMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isProductsMenu: {
                    ...prevStyles.isProductsMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isProductsMenu: {
                        ...prevStyles.isProductsMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isProductsMenu: {
                    ...prevStyles.isProductsMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isProductsMenu: {
                        ...prevStyles.isProductsMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isProductsMenuOpen]);

    // Services
    useEffect(() => {
        if (isServicesMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isServicesMenu: {
                    ...prevStyles.isServicesMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isServicesMenu: {
                        ...prevStyles.isServicesMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isServicesMenu: {
                    ...prevStyles.isServicesMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isServicesMenu: {
                        ...prevStyles.isServicesMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isServicesMenuOpen]);

    // Applications
    useEffect(() => {
        if (isApplicationsMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isApplicationsMenu: {
                    ...prevStyles.isApplicationsMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isApplicationsMenu: {
                        ...prevStyles.isApplicationsMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isApplicationsMenu: {
                    ...prevStyles.isApplicationsMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isApplicationsMenu: {
                        ...prevStyles.isApplicationsMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isApplicationsMenuOpen]);

    const toggleCategory = (id: string) => {
        setOpenCategories(prev =>
            prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
        );
    };

    return (
        <div className={`mobile-menu-wrapper ${isMenuOpen ? 'body-visible' : ''}`}>
            <div className="mobile-menu-area">
                <div className="mobile-logo">
                    <Link href="/">
                        <img src="/logo.png" alt="RamGeneral" width={120} height={40} />
                    </Link>
                    <button onClick={handleMobileMenuClose} className="menu-toggle">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isServicesMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={(e) => { e.preventDefault(); setIsServicesMenuOpen(!isServicesMenuOpen); }} href="#">SERVICES <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isServicesMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isServicesMenu}>
                                <li><Link onClick={handleMobileMenuClose} href="/services/audit-services">Audit Services</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/services/layout-planning">Layout Planning</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/services/project-management">Project Management</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/services/installation-services">Installation Services</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/services/investment-return-analysis">Investment Return Analysis</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/services/as-a-service">As A Service</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isApplicationsMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={(e) => { e.preventDefault(); setIsApplicationsMenuOpen(!isApplicationsMenuOpen); }} href="#">APPLICATIONS <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isApplicationsMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isApplicationsMenu}>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/airports-transport-hubs">Airports & Transport Hubs</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/convenience-stores">Convenience Stores</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/educational-institutions">Educational Institutions</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/healthcare-facilities">Healthcare Facilities</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/hotels-hospitality">Hotels & Hospitality</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/manufacturing-facilities">Manufacturing Facilities</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/municipal-infrastructure">Municipal & Infrastructure</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/offices-corporate">Offices & Corporate</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/parking-lots-garages">Parking Lots & Garages</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/retail-stores">Retail Stores</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/sports-venues">Sports Venues</Link></li>
                                <li><Link onClick={handleMobileMenuClose} href="/applications/warehouses">Warehouses</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isProductsMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={(e) => { e.preventDefault(); setIsProductsMenuOpen(!isProductsMenuOpen); }} href="#">PRODUCTS <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isProductsMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isProductsMenu}>
                                {menuData.map((category) => (
                                    <li key={category.id} className={`menu-item-has-children submenu-item-has-children ${openCategories.includes(category.id) ? 'active-class' : ''}`}>
                                        <Link onClick={(e) => { e.preventDefault(); toggleCategory(category.id); }} href="#">{category.data.title || "Category"} <span className="mean-expand-class"></span></Link>
                                        <ul className={`sub-menu submenu-class ${openCategories.includes(category.id) ? 'menu-open' : ''}`} style={{ display: openCategories.includes(category.id) ? 'block' : 'none', opacity: openCategories.includes(category.id) ? 1 : 0 }}>
                                            {category.subcategories.map((subcategory: any) => (
                                                <li key={subcategory.id}>
                                                    <Link href={`/${category.uid}/${subcategory.uid}`}>{subcategory.data.title || "Subcategory"}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MultiPageMobileMenu;
