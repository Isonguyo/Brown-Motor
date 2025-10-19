// src/components/CarCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/CarCard.css";

const CarCard = ({ car }) => {
  // Replace this with your real WhatsApp number (without +)
  const whatsappNumber = "2348034080299"; // example: Nigeria number

  const whatsappMessage = `Hello! I'm interested in the ${car.name} (${car.year}) listed for ₦${car.price.toLocaleString()}. Is it still available?`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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

        {/* 🟢 WhatsApp contact button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Contact Dealer
        </a>
      </div>
    </div>
  );
};

export default CarCard;


