import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Newsletter and Socials Column */}
        <div className="footer-section brand-col">
          <p className="subscribe-text">Subscribe to get special offers and updates</p>
          <div className="input-container">
            <input type="email" placeholder="Enter Your Email Address" />
          </div>
          <div className="social-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="X" className="x-logo" />
          </div>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          </div>
        </div>

        {/* Links Columns */}
        <div className="footer-links-grid">
          <div className="footer-section">
            <h4 className="column-title">shop</h4>
            <ul>
              <li>All Products</li>
              <li>New Arrivals</li>
              <li>Shop By Categories</li>
              <li>Trending items</li>
              <li>New arrival</li>
              <li>All products</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="column-title">Customer Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Order Tracking</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>



          <div className="footer-section">
            <h4 className="column-title">Account</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="column-title">Contact Information</h4>
            <ul>
              <li>+92 XXX XXXXXXX</li>
              <li>support@yourstore.com</li>
              <li>Your City, Your Country</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;