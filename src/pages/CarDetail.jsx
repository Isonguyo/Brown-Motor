// src/pages/CarDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import carsData from "../data/CarsData";
import "../styles/pages/CarDetails.css";

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  // States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [viewerImage, setViewerImage] = useState(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  if (!car) return <p>Car not found</p>;

  // Build media array: video first → rest of images
  const images = [car.mainImg, ...(car.gallery || [])];

  const mediaItems = car.video
    ? [{ type: "video", src: car.video }, ...images.map((img) => ({ type: "image", src: img }))]
    : images.map((img) => ({ type: "image", src: img }));

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const openImageViewer = (img) => {
    setViewerImage(img);
    setShowImageViewer(true);
  };

  const closeImageViewer = () => setShowImageViewer(false);

  // ==== ZOOM & PAN ====
const imgContainerRef = useRef(null);
const imgRef = useRef(null);
const [scale, setScale] = useState(1);
const [isDragging, setIsDragging] = useState(false);
const [start, setStart] = useState({ x: 0, y: 0 });
const [translate, setTranslate] = useState({ x: 0, y: 0 });

const handleWheel = (e) => {
  e.preventDefault();
  let newScale = scale + e.deltaY * -0.001; // smooth zoom
  newScale = Math.min(Math.max(1, newScale), 3); // limit zoom (1x–3x)
  setScale(newScale);
};

const handleMouseDown = (e) => {
  if (scale === 1) return; // only pan when zoomed
  setIsDragging(true);
  setStart({ x: e.clientX - translate.x, y: e.clientY - translate.y });
};

const handleMouseMove = (e) => {
  if (!isDragging) return;
  setTranslate({
    x: e.clientX - start.x,
    y: e.clientY - start.y,
  });
};

const handleMouseUp = () => setIsDragging(false);

  return (
    <section id="car-details" className="car-detail">
      <HashLink to="/cars#inventoryMain" className="back-btn">
        ← Back to Inventory
      </HashLink>

      <h1>{car.name}</h1>

      {/* ================================
          MAIN MEDIA DISPLAY (Video / Image)
      ================================= */}
      <div id="mainCar" className="carousel-container">
        <button className="carousel-btn left" onClick={prevMedia}>‹</button>

        {mediaItems[currentIndex].type === "Video" || mediaItems[currentIndex].type === "video" ? (
          <video
            className="main-image"
            src={mediaItems[currentIndex].src}
            onClick={() => setShowVideoPopup(true)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img
            src={mediaItems[currentIndex].src}
            alt={car.name}
            className="main-image"
            onClick={() => openImageViewer(mediaItems[currentIndex].src)}
            style={{ cursor: "zoom-in" }}
          />
        )}

        <button className="carousel-btn right" onClick={nextMedia}>›</button>
      </div>

      {/* ================================
              THUMBNAILS
      ================================= */}
      <div className="carousel-thumbs">
        {mediaItems.map((m, index) => (
          <div
            key={index}
            className="thumb-wrapper"
            style={{ position: "relative" }}
            onClick={() => {
              setCurrentIndex(index);
              if (m.type === "video") setShowVideoPopup(true);
            }}
          >
            {m.type === "video" ? (
              <div className="thumb-video-wrapper">
                <video src={m.src} muted />
                <div className="thumb-overlay">
                  <span className="play-icon">▶</span>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={m.src}
                  alt="car media"
                  className={index === currentIndex ? "active" : ""}
                />
                <div className="thumb-overlay">
                  <span className="zoom-icon">🔍</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* ================================
         IMAGE FULLSCREEN VIEWER
      ================================= */}
      {showImageViewer && (
        <div className="image-viewer" onClick={closeImageViewer}>
          <span className="close-viewer">✕</span>
          <img src={viewerImage} alt="zoomed-car" />
        </div>
      )}

      {/* ================================
         VIDEO POPUP PLAYER
      ================================= */}
      {showVideoPopup && (
        <div className="video-popup">
          <span className="video-close-btn" onClick={() => setShowVideoPopup(false)}>✕</span>
          <video controls autoPlay>
            <source src={car.video} type="video/mp4" />
          </video>
        </div>
      )}

      {/* ================================
            CAR DETAILS
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
