// src/components/FeaturedInventory.jsx
import React from "react";
import { Link } from "react-router-dom";
import carsData from "../data/CarsData";
import "../styles/components/FeaturedInventory.css";

const FeaturedInventory = () => {
  const featuredCars = carsData.slice(0, 3);

  const whatsappNumber = "2348034080299";

  return (
    <section id="inventory" className="featured-inventory">
      <div className="featured-inner">
        <h2>Featured Inventory</h2>

        <div className="inventory-grid">
          {featuredCars.map((car) => {
            const whatsappMessage = `Hello! I'm interested in the ${car.name} (${car.year}) listed for ₦${car.price.toLocaleString()}. Is it still available?`;

            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`;

            return (
              <article key={car.id} className="car-card">
                <img className="car-image" src={car.mainImg} alt={car.name} />

                <div className="car-body">
                  <h3 className="car-name">{car.name}</h3>

                  <p className="car-price">
                    ₦{car.price.toLocaleString()}
                  </p>

                  <p className="car-info">
                    {car.year} • {car.transmission} • {car.fuel}
                  </p>
                  
                   <div className="car-buttons">
                  <Link to={`/cars/${car.id}`} className="btn primary-btn">
                    View Details
                  </Link>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp-btn"
                  >
                    Contact Dealer
                  </a>
                </div>
                  </div> 
              </article>
            );
          })}
        </div>

        <div className="cta-wrapper">
          <Link to="/cars" className="btn view-all-btn">
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
