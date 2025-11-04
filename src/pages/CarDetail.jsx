import React, { useState } from "react";
import { useParams } from "react-router-dom";
import carsData from "../data/CarsData";
import "../styles/pages/CarDetails.css";

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  if (!car) return <h2>Car not found</h2>;

  // --- Carousel Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [car.mainImg, ...(car.gallery || [])];

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="car-details-container">
      <h1 className="car-title">
        {car.year} {car.name}
      </h1>

      {/* ✅ Image Carousel */}
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevImage}>❮</button>

        <img
          src={images[currentIndex]}
          alt={car.name}
          className="main-image"
        />

        <button className="carousel-btn right" onClick={nextImage}>❯</button>
      </div>

      {/* ✅ Thumbnails */}
      <div className="carousel-thumbs">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setCurrentIndex(i)}
            className={i === currentIndex ? "active" : ""}
            alt="thumbnail"
          />
        ))}
      </div>

      <div className="car-info">
        <p><strong>Price:</strong> ₦{car.price.toLocaleString()}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Fuel:</strong> {car.fuel}</p>
        <p><strong>Description:</strong> {car.description}</p>
      </div>
    </div>
  );
};

export default CarDetail;
