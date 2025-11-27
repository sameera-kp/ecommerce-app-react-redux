import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="fw-bold mb-4 text-center text-primary">Get In Touch</h2>
        <p className="text-center text-muted mb-4">We'd love to hear from you! Please fill out the form below or use our contact details.</p>
        
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control"id="name" placeholder="Your Full Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="What is your inquiry about?" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Send Message</button>
        </form>

        <div className="mt-5 text-center border-top pt-4">
            <p className="mb-1 fw-bold">Contact Details</p>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i> 123 React Avenue, Codeville, USA</p>
            <p className="mb-1"><i className="bi bi-phone-fill me-2"></i> +1 (555) 123-4567</p>
            <p><i className="bi bi-envelope-fill me-2"></i> support@eshop.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;