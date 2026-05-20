"use client";
import React, { useState } from "react";
import Link from "next/link";
import InquiryModal from "~/components/InquiryModal";

const ProductDetailsContent = ({ product, categoryName, subcategoryName }: any) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const productName = product.data.title || "Product";

  return (
    <div className="row gx-60">
      <div className="col-lg-6">
        <div className="product-big-img">
          <img 
            src={product.data.image?.url || "/main-assets/img/product/product_details_1_1.jpg"} 
            alt={productName} 
            className="w-100"
            style={{ borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          />
        </div>
      </div>
      
      <div className="col-lg-6">
        <div className="product-about">
          <p className="price" style={{ fontSize: '32px', color: '#EA5501', fontWeight: 'bold' }}>
             {product.data.price ? `₹${product.data.price}` : "Inquire for Price"}
          </p>
          <h1 className="h2 product-title mb-3">{productName}</h1>
          
          <div className="description mb-4">
            <h4 className="h5">Description</h4>
            <p className="text">
              {Array.isArray(product.data.description) 
                ? product.data.description[0]?.text 
                : "No description available."}
            </p>
          </div>

          {product.data.features && product.data.features.length > 0 && (
            <div className="features mb-4">
              <h4 className="h5">Features</h4>
              <ul className="list-unstyled">
                {product.data.features.map((feature: any, index: number) => (
                  <li key={index} className="mb-2">
                    <i className="ri-checkbox-circle-line me-2 text-primary"></i>
                    <strong>{feature.name}:</strong> {feature.value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="product_meta mt-5 pt-4 border-top">
            <span className="sku_wrapper d-block mb-2">
              <strong>SKU:</strong> <span className="sku">{product.data.sku || "N/A"}</span>
            </span>
            <span className="posted_in d-block mb-2">
              <strong>Category:</strong> {categoryName}
            </span>
            <span className="subcategory d-block">
              <strong>Subcategory:</strong> {subcategoryName}
            </span>
          </div>

          <div className="mt-5">
             <button onClick={() => setIsEnquiryOpen(true)} className="btn btn-lg w-100">
               ENQUIRE NOW <i className="ri-mail-line ms-2"></i>
             </button>
          </div>
        </div>
      </div>

      <InquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        productName={productName} 
      />
    </div>
  );
};

export default ProductDetailsContent;
