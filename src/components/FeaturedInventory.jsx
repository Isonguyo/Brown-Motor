// src/components/FeaturedInventory.jsx
import React from "react";
import { Link } from "react-router-dom";
import carsData from "../data/CarsData"; // ✅ Import the shared car data
import "../styles/components/FeaturedInventory.css";

const FeaturedInventory = () => {
  // You can limit to first few cars if you want only some to be featured
  const featuredCars = carsData.slice(0, 3); // show first 3 for example

  return (
    <section id="inventory" className="featured-inventory">
      <div className="featured-inner">
        <h2>Featured Inventory</h2>

        <div className="inventory-grid">
          {featuredCars.map((car) => (
            <article key={car.id} className="car-card">
              <img
                className="car-image"
                src={car. mainImg}
                alt={car.name}
              />
              <div className="car-body">
                <h3 className="car-name">{car.name}</h3>
                <p className="car-price">
                  ₦{car.price.toLocaleString()}
                </p>

                {/* ✅ Button links to detail page dynamically */}
                <Link to={`/cars/${car.id}`} className="btn primary-btn">
                  View Details
                </Link>
              </div>
            </article>
          ))}
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
