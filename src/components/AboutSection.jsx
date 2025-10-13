// src/components/AboutSection.jsx
import React from "react";
import "../styles/components/AboutSection.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Text content */}
        <div className="about-content">
          <h2>About Brown Motors</h2>
          <p className="intro-text">
            At <strong>Brown Motors</strong>, we’re dedicated to helping you find
            your perfect ride with confidence. From sleek sedans to rugged SUVs,
            our inventory is curated for quality, reliability, and value.
          </p>

          <p className="mission-text">
            Our mission is simple — provide every customer with a smooth,
            transparent, and enjoyable car-buying experience. Whether you're a
            first-time buyer or upgrading your vehicle, we treat you like family.
          </p>

          {/* Core values */}
         <div className="about-values">
  <div className="value-card value1">
    <i className="fa-solid fa-car"></i>
    <h3>Wide Selection</h3>
    <p>Vehicles to fit every budget and style.</p>
  </div>
  <div className="value-card value2">
    <i className="fa-solid fa-wrench"></i>
    <h3>Quality Assurance</h3>
    <p>Every car undergoes thorough inspection.</p>
  </div>
  <div className="value-card value3">
    <i className="fa-solid fa-handshake"></i>
    <h3>Customer First</h3>
    <p>Your satisfaction drives everything we do.</p>
  </div>
  <div className="value-card value4">
    <i className="fa-solid fa-file-invoice-dollar"></i>
    <h3>Transparent Deals</h3>
    <p>Honest pricing, no hidden surprises.</p>
  </div>
</div>


         <HashLink className="about-btn" smooth to="/#inventory">Explore Our Cars</HashLink>
        </div>

        {/* Image side */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60"
            alt="Brown Motors showroom"
          />
        </div>
      </div>

      {/* Owner/Founder Section */}
      <div className="owner-section">
        <div className="owner-image">
          <img
            src="/assets/images/ghbc9.jpg"
            alt="Founder of Brown Motors"
          />
        </div>
        <div className="owner-details">
          <h3>Meet the Founder</h3>
          <h2>Mr. Andrew Brown</h2>
          <p>
            With over a decade in the automobile industry, Mr. Brown built
            <strong> Brown Motors</strong> on integrity, trust, and passion for
            cars. His commitment to transparency and customer satisfaction has
            made the dealership a trusted name for hundreds of drivers.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <h2>Why Choose Brown Motors?</h2>
        <p className="why-intro">
          We don’t just sell cars — we deliver confidence, convenience, and care.
        </p>

        <div className="why-grid">
          <div className="why-card why1">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <h3>Flexible Financing</h3>
            <p>Enjoy easy payment plans tailored to your budget.</p>
          </div>
          <div className="why-card why2">
            <i className="fa-solid fa-certificate"></i>
            <h3>Certified Vehicles</h3>
            <p>All our vehicles are inspected and certified for quality.</p>
          </div>
          <div className="why-card why3">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Warranty & Support</h3>
            <p>Drive worry-free with our trusted warranty options.</p>
          </div>
          <div className="why-card why4">
            <i className="fa-solid fa-face-smile"></i>
            <h3>Customer Satisfaction</h3>
            <p>Your happiness is our greatest reward.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
