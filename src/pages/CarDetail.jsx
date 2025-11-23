// src/pages/CarDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import carsData from "../data/CarsData";
import "../styles/pages/CarDetails.css";

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!car) return <p>Car not found</p>;

  // ================================
  // MERGE IMAGES + VIDEO INTO CAROUSEL
  // ================================
  const mediaItems = [
    { type: "image", src: car.mainImg },
    ...(car.gallery || []).map((img) => ({ type: "image", src: img })),
    car.video ? { type: "video", src: car.video } : null
  ].filter(Boolean);

  const prevItem = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const nextItem = () => {
    setCurrentIndex((prev) =>
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="car-details" className="car-detail">
      <HashLink to="/cars#inventoryMain" className="back-btn">
        ← Back to Inventory
      </HashLink>

      <h1>{car.name}</h1>

      {/* ================================
          MAIN CAROUSEL
      ================================= */}
      <div id="mainCar" className="carousel-container">
        <button className="carousel-btn left" onClick={prevItem}>‹</button>

        {mediaItems[currentIndex].type === "image" ? (
          <img
            src={mediaItems[currentIndex].src}
            alt={car.name}
            className="main-image"
          />
        ) : (
          <video controls className="main-image">
            <source src={mediaItems[currentIndex].src} type="video/mp4" />
          </video>
        )}

        <button className="carousel-btn right" onClick={nextItem}>›</button>
      </div>

      {/* ================================
          THUMBNAILS
      ================================= */}
      <div className="carousel-thumbs">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`thumb-item ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt="thumb" />
            ) : (
              <video muted>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* ================================
          BASIC CAR DETAILS
      ================================= */}
      <div className="details-grid">
        <p><strong>Brand:</strong> {car.brand}</p>
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Price:</strong> ₦{car.price.toLocaleString()}</p>
        <p><strong>Fuel Type:</strong> {car.fuel}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Engine:</strong> {car.engine}</p>
        <p><strong>Body Type:</strong> {car.bodyType}</p>
        <p><strong>Condition:</strong> {car.condition}</p>
        <p><strong>Location:</strong> {car.location}</p>
      </div>

      {car.description && (
        <>
          <h3>Description</h3>
          <p>{car.description}</p>
        </>
      )}

      {car.features?.length > 0 && (
        <>
          <h3>Features</h3>
          <ul className="features-list">
            {car.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default CarDetail;

