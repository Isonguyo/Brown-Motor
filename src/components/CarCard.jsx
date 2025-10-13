// src/components/CarCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/CarCard.css";

const CarCard = ({ car }) => {
  return (
    <div className="car-cards">
      <img src={car.mainImg} alt={car.name} className="car-cards-image" />

      <div className="car-cards-body">
        <h3>{car.name}</h3>
        <p className="price">₦{car.price.toLocaleString()}</p>
        <p className="muted">
          {car.year} • {car.transmission} • {car.fuel}
        </p>

        <Link to={`/cars/${car.id}`} className="view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;

