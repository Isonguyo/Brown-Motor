// src/pages/CarDetail.jsx
import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import carsData from "../data/CarsData";
import "../styles/pages/CarDetails.css";

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));
  const sliderRef = useRef(null);

  if (!car) return <p>Car not found</p>;

  return (
    <section className="car-detail">
      <Link to="/cars" className="back-btn">← Back to Inventory</Link>

      <h1>{car.name}</h1>

      <img 
        src={car.mainImg} 
        alt={car.name} 
        className="main-image" 
        onError={(e) => (e.target.style.display = "none")}
      />

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

      {/* Updated Gallery Carousel */}
      {car.gallery?.length > 0 && (
        <>
          <h3>Gallery</h3>

          <div className="gallery-slider">

            <button
              className="slide-btn left"
              onClick={() => sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })}
            >
              ‹
            </button>

            <div className="slides" ref={sliderRef}>
              {car.gallery.map((img, i) => (
                <img key={i} src={img} alt={`${car.name} view ${i + 1}`} className="slide-img" />
              ))}
            </div>

            <button
              className="slide-btn right"
              onClick={() => sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })}
            >
              ›
            </button>
          </div>
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
