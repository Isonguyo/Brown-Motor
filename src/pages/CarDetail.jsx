// src/pages/CarDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import carsData from "../data/CarsData";
import "../styles/pages/CarDetails.css";

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  if (!car) return <p>Car not found</p>;

  return (
    <section className="car-detail">
      <Link to="/cars" className="back-btn">← Back to Inventory</Link>

      <h1>{car.name}</h1>

      {/* Main Car Image */}
      <img 
        src={car.mainImg} 
        alt={car.name} 
        className="main-image" 
        onError={(e) => (e.target.style.display = "none")} // hides broken image
      />

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

      {/* Description */}
      {car.description && (
        <>
          <h3>Description</h3>
          <p>{car.description}</p>
        </>
      )}

      {/* Features */}
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

      {/* Gallery */}
      {car.gallery?.length > 0 && (
        <>
          <h3>Gallery</h3>
          <div className="gallery">
            {car.gallery.map((img, i) => (
              <img key={i} src={img} alt={`${car.name} view ${i + 1}`} />
            ))}
          </div>
        </>
      )}

      {/* Video */}
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
