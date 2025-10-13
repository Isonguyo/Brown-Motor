import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- About Section --- */}
        <div className="footer-col about">
          <h3>Brown Motors</h3>
          <p>
            Your trusted destination for quality cars and exceptional service.
            Explore new arrivals, discover great deals, and drive home your dream car today!
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
           <li><HashLink smooth to="/#hero">Home</HashLink></li>
                     <li><Link to="/cars">Inventory</Link></li>
                     <li><HashLink smooth to="/#about">About Us</HashLink></li>
                     <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div className="footer-col contact">
          <h4>Contact</h4>
          <p><i className="ri-map-pin-line"></i> 33 Ndidem Usang Iso Road, Calabar</p>
          <p><i className="ri-phone-line"></i> 08034080299, 09099933444</p>
          <p><i className="ri-mail-line"></i> Iwuanyanwu2767@gmail.com</p>

          <div className="social-links-footer">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-twitter-x-line"></i></a>
          </div>
        </div>
      </div>

      {/* --- Bottom Copyright --- */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Brown Motors. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
