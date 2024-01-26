import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-info text-dark py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Expression Engine is a powerful web-based tool designed for creating and managing complex rulesets with ease.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <p>Email: hello@crego.tech</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p>Stay connected with us on social media:</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Facebook</a></li>
              <li className="list-inline-item"><a href="#">Twitter</a></li>
              <li className="list-inline-item"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center mt-3">
        <p>&copy; 2024 Crego. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
