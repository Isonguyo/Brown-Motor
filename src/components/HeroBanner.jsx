// src/components/HeroBanner.jsx
import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import "../styles/components/HeroBanner.css";

const HeroBanner = () => {
  return (
    <section id="hero" className="hero-banner">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="fade-up">...the need of the hour</h1>
          <p className="fade-up delay-1">
            Explore our wide range of certified cars with unbeatable deals.
          </p>
          <div className="hero-buttons fade-up delay-2">
        <HashLink smooth to="/cars#inventoryMain" className="btn primary-btn">
  Browse Inventory
</HashLink>

<HashLink smooth to="/#about" className="btn secondary-btn">
  Learn More
</HashLink>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
