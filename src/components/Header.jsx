import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <div className="logo fade-slide">
          <img src="/assets/images/car-logo.png" alt="Brown Motors Logo" />
          <span className="logo-text">Brown Motors</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav fade-slide">
          <ul>
            <li><HashLink smooth to="/#hero">Home</HashLink></li>
            <li><Link to="/cars">Inventory</Link></li>
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <ul>
          <li onClick={() => setOpen(false)}><HashLink smooth to="/#hero">Home</HashLink></li>
          <li onClick={() => setOpen(false)}><Link to="/cars">Inventory</Link></li>
          <li onClick={() => setOpen(false)}><HashLink smooth to="/#about">About Us</HashLink></li>
          <li onClick={() => setOpen(false)}><HashLink smooth to="/#contact">Contact</HashLink></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
