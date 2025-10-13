import React from "react";
import "../styles/components/CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-banner">
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>Ready to Find Your Dream Car?</h2>
          <p>
            Whether you’re upgrading or buying your first car, Brown Motors is
            here to help you make the best choice with confidence.
          </p>
          <div className="cta-buttons">
            <a href="/inventory" className="cta-btn cta-primary">
              Browse Inventory
            </a>
            <a href="/contact" className="cta-btn cta-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
