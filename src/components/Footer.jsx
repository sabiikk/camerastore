import React from 'react'
import '../components/Footer.css';
function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h5>About Us</h5>
          <p>We are a leading company providing the best services and products to our customers.</p>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Follow Us</h5>
          <ul className="social-links">
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer