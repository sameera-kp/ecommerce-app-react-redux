import React from 'react';

const About = () => {
  return (
    <div className="container my-5 p-5 bg-light rounded shadow-sm">
      <h2 className="fw-bold mb-4 text-primary">About Our E-Shop</h2>
      <p className="lead">
        Welcome to E-Shop React, a modern e-commerce platform built using React, Redux for state management, and Bootstrap for styling.
      </p>
      
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <h4 className="text-secondary">Our Mission</h4>
          <p>
            To provide a seamless, high-performance, and visually appealing shopping experience for all users, demonstrating modern web development best practices.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h4 className="text-secondary">Technology Stack</h4>
          <ul>
            <li>Frontend: React (Functional Components & Hooks)</li>
            <li>State Management: Redux Toolkit (Actions & Reducers)</li>
            <li>Routing: React Router DOM</li>
            <li>Styling: Bootstrap 5</li>
            <li>Data Source: FakeStoreAPI (for product data)</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-muted">Thank you for exploring our project!</p>
      </div>
    </div>
  );
};

export default About;