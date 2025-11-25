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
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  if (!car) return <p>Car not found</p>;

  // Add video as FIRST slide
  const slides = [
    { type: "video", src: car.video },
    ...[car.mainImg, ...(car.gallery || [])].map((img) => ({
      type: "image",
      src: img,
    })),
  ];

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="car-details" className="car-detail">

      <HashLink to="/cars#inventoryMain" className="back-btn">
        ← Back to Inventory
      </HashLink>

      <h1>{car.name}</h1>

      {/* ================= CAROUSEL ================= */}
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prev}>‹</button>

        {/* Slide Content */}
        {slides[currentIndex].type === "video" ? (
          <div
            className="video-slide"
            onClick={() => setShowVideoModal(true)}
          >
            <video src={slides[currentIndex].src} muted />
            <div className="video-play-overlay">▶</div>
          </div>
        ) : (
          <div className="image-slide">
            <img src={slides[currentIndex].src} alt={car.name} />
            <div
              className="img-zoom-overlay"
              onClick={() => {
                setZoomImage(slides[currentIndex].src);
                setZoomScale(1);
              }}
            >
              🔍
            </div>
          </div>
        )}

        <button className="carousel-btn right" onClick={next}>›</button>
      </div>

      {/* ================= THUMBNAILS ================= */}
      <div className="carousel-thumbs">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`thumb ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            {s.type === "video" ? (
              <div className="thumb-video">▶</div>
            ) : (
              <img src={s.src} alt="thumb" />
            )}
          </div>
        ))}
      </div>

      {/* ================= BASIC DETAILS ================= */}
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

      {/* ================= DESCRIPTION ================= */}
      {car.description && (
        <>
          <h3>Description</h3>
          <p>{car.description}</p>
        </>
      )}

      {/* ================= FEATURES ================= */}
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

      {/* ================= VIDEO POPUP MODAL ================= */}
      {showVideoModal && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-btn" onClick={() => setShowVideoModal(false)}>✖</button>
            <video src={car.video} controls autoPlay />
          </div>
        </div>
      )}

      {/* ================= ZOOM IMAGE VIEWER ================= */}
      {zoomImage && (
        <div className="zoom-modal">
          <button className="zoom-close" onClick={() => setZoomImage(null)}>✖</button>

          <div className="zoom-controls">
            <button onClick={() => setZoomScale((s) => Math.min(s + 0.2, 3))}>＋</button>
            <button onClick={() => setZoomScale((s) => Math.max(s - 0.2, 1))}>－</button>
          </div>

          <img
            src={zoomImage}
            alt="zoomed"
            className="zoom-img"
            style={{ transform: `scale(${zoomScale})` }}
            draggable="false"
          />
        </div>
      )}
    </section>
  );
};

export default CarDetail;
