// src/pages/CarDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import carsData from "../data/CarsData";
import "../styles/pages/CarDetails.css";

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!car) return <p>Car not found</p>;

  const images = [car.mainImg, ...(car.gallery || [])];

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="car-detail">
<Link to="/cars" className="back-btn">← Back to Inventory</Link>



      <h1>{car.name}</h1>

      {/* Carousel Main Image */}
      <div id="mainCar" className="carousel-container">
        <button className="carousel-btn left" onClick={prevImage}>‹</button>

        <img
          src={images[currentIndex]}
          alt={car.name}
          className="main-image"
        />

        <button className="carousel-btn right" onClick={nextImage}>›</button>
      </div>

      {/* Thumbnails */}
      <div className="carousel-thumbs">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={car.name}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Basic Car Details */}
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

      {car.video && (
        <div className="car-video">
          <h3>Video</h3>
          <video controls width="100%">
            <source src={car.video} type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
};

export default CarDetail;
