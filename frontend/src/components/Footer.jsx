import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Phone: +91 7381367984</p>
          <p>Location: India</p>
          <p>Email: techtrans427@gmail.com</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ayushman-acharya-b88314290/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/Ayushma34093142" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/dr_debug/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Bot Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 