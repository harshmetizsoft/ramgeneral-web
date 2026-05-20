"use client";
import Link from "next/link";
import InquiryModal from "~/components/InquiryModal";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const DynamicProductGrid = ({ 
  products = [], 
  categoryName, 
  subcategoryName 
}: { 
  products: any[], 
  categoryName?: string, 
  subcategoryName?: string 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const handleOpenPopup = (product: any) => {
        setSelectedProduct(product);
        setIsOpen(true);
    }
    const handleClosePopup = () => {
        setIsOpen(false);
        setSelectedProduct(null);
    }

    const handleOpenEnquiry = () => {
        setIsOpen(false);
        setIsEnquiryOpen(true);
    }

    const handleCloseEnquiry = () => {
        setIsEnquiryOpen(false);
    }

    return (
        <>
            <section className="space-top space-extra-bottom shop-page-select-contain">
                <div className="container">
                    <div className="shop-sort-bar">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md">
                                <h2 className="h4 mb-0">{subcategoryName}</h2>
                                <p className="woocommerce-result-count mb-0">Showing all {products.length} results</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row gy-40">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img 
                                                src={product.data.image?.url || "/main-assets/img/product/product_1_1.jpg"} 
                                                alt={product.data.title || "Product Image"} 
                                                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                            />
                                            <div className="actions">
                                                <button onClick={() => handleOpenPopup(product)} className="icon-btn popup-content">
                                                    <i className="ri-eye-line"></i>
                                                </button>
                                                <Link href={`/product/${product.uid}`} className="icon-btn">
                                                    <i className="ri-information-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="product-category" style={{ fontSize: '12px', color: '#EA5501' }}>{subcategoryName}</span>
                                            <h3 className="product-title" style={{ fontSize: '18px', marginTop: '5px' }}>
                                                <Link href={`/product/${product.uid}`}>{product.data.title || "Product Title"}</Link>
                                            </h3>
                                            <span className="price">
                                                {product.data.price ? `₹${product.data.price}` : "Inquire for price"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <h3>No products found in this category.</h3>
                                <Link href="/" className="btn mt-3">Back to Home</Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Quick View Modal */}
            <Modal open={isOpen} onClose={handleClosePopup} center classNames={{ modal: 'customModal' }}>
                {selectedProduct && (
                    <div className="white-popup" style={{ padding: '20px', maxWidth: '900px' }}>
                        <div className="container">
                            <div className="row gx-60">
                                <div className="col-lg-6">
                                    <div className="product-big-img">
                                        <img src={selectedProduct.data.image?.url} alt={selectedProduct.data.title} style={{ width: '100%', borderRadius: '8px' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="product-about">
                                        <p className="price" style={{ color: '#EA5501', fontWeight: 'bold', fontSize: '28px' }}>
                                            {selectedProduct.data.price ? `₹${selectedProduct.data.price}` : "Inquire for Price"}
                                        </p>
                                        <h2 className="product-title" style={{ fontSize: '32px', marginBottom: '15px' }}>{selectedProduct.data.title}</h2>
                                        <p className="text" style={{ color: '#666', lineHeight: '1.6' }}>
                                            {Array.isArray(selectedProduct.data.description) 
                                                ? selectedProduct.data.description[0]?.text 
                                                : "No description available."}
                                        </p>
                                        
                                        <div className="product_meta mt-4" style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                                            <span className="sku_wrapper d-block mb-1"><strong>SKU:</strong> {selectedProduct.data.sku || "N/A"}</span>
                                            <span className="d-block mb-1"><strong>Category:</strong> {categoryName}</span>
                                            <span className="d-block mb-4"><strong>Subcategory:</strong> {subcategoryName}</span>
                                        </div>

                                        <div className="actions mt-4">
                                            <button onClick={handleOpenEnquiry} className="btn w-100" style={{ padding: '15px 30px', fontSize: '16px', fontWeight: 'bold' }}>
                                                ENQUIRE NOW <i className="ri-mail-send-line ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            <InquiryModal 
                isOpen={isEnquiryOpen} 
                onClose={handleCloseEnquiry} 
                productName={selectedProduct?.data.title} 
            />
        </>
    );
};

export default DynamicProductGrid;
