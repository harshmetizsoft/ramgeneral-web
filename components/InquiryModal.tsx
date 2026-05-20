"use client";
import React from 'react';
import { Modal } from "react-responsive-modal";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, productName }) => {
  return (
    <Modal open={isOpen} onClose={onClose} center classNames={{ modal: 'enquiry-modal' }}>
      <div style={{ width: '100%', maxWidth: '600px', padding: '0', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ background: '#212529', color: 'white', padding: '20px 30px', position: 'relative' }}>
          <h4 className="mb-0 text-white" style={{ fontSize: '18px' }}>
            Enquiry - {productName}
          </h4>
        </div>
        <form style={{ padding: '30px', background: 'white' }} onSubmit={(e) => { e.preventDefault(); alert('Enquiry Sent!'); onClose(); }}>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: '500' }}>Full Name *</label>
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" style={{ fontWeight: '500' }}>Email *</label>
              <input type="email" className="form-control" placeholder="email@example.com" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" style={{ fontWeight: '500' }}>Phone *</label>
              <input type="text" className="form-control" placeholder="+1..." required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label" style={{ fontWeight: '500' }}>Variant</label>
              <select className="form-select">
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" style={{ fontWeight: '500' }}>Qty</label>
              <input type="number" className="form-control" defaultValue={1} min="1" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" style={{ fontWeight: '500' }}>Voltage</label>
              <input type="text" className="form-control" placeholder="120-277V" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: '500' }}>Location *</label>
            <input type="text" className="form-control" placeholder="City/Country" required />
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontWeight: '500' }}>Message (Optional)</label>
            <textarea className="form-control" rows={3} placeholder="Tell us about your requirements..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{ background: '#007bff', border: 'none', padding: '15px', fontWeight: 'bold' }}>
            SEND ENQUIRY
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default InquiryModal;
