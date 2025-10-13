// src/components/HeroBanner.jsx
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
        <Link smooth to="/cars" className="btn primary-btn">
  Browse Inventory
</Link>

<Link smooth to="/#about" className="btn secondary-btn">
  Learn More
</Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
