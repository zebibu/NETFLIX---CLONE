import React from "react";
import "./Footer.css"; 
import { Globe } from "lucide-react"; // using lucide-react for the globe icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Help Line */}
        <p className="footer-top">Questions? Call 1-844-505-2993</p>

        {/* Links */}
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Netflix Originals</a>
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
          <a href="#">Account</a>
          <a href="#">Redeem Gift Cards</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
          <a href="#">Media Center</a>
          <a href="#">Buy Gift Cards</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>

        {/* Language Selector */}
        <div className="footer-lang">
          <button className="language-btn">
            <Globe size={16} style={{ marginRight: "8px" }} />
            English
          </button>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
