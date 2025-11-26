import React, { useState, useRef, useEffect } from "react";
import "../styles/pages/CarDetails.css";

const CarDetail = ({ car }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomActive, setZoomActive] = useState(false);
  const zoomRef = useRef(null);

  const media = [
    { type: "video", src: car.video }, // first carousel item
    ...car.gallery.map((img) => ({ type: "image", src: img }))
  ];

  const currentItem = media[currentIndex];

  useEffect(() => {
    if (currentItem.type === "video" && zoomRef.current) {
      zoomRef.current.play();
    }
  }, [currentIndex]);

  const handleZoom = (e) => {
    if (!zoomActive || currentItem.type !== "image") return;
    const { left, top, width, height } = zoomRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    zoomRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <div className="car-detail">
      {/* MAIN VIEWER */}
      <div
        className={`carousel-viewer ${zoomActive ? "zoomed" : ""}`}
        onMouseMove={handleZoom}
        onClick={() => setZoomActive(!zoomActive)}
      >
        {currentItem.type === "video" ? (
          <video
            ref={zoomRef}
            src={currentItem.src}
            controls
            className="carousel-video"
            muted
            autoPlay
          ></video>
        ) : (
          <img
            ref={zoomRef}
            src={currentItem.src}
            alt={car.name}
            className="carousel-img"
          />
        )}
      </div>

      {/* THUMBNAILS */}
      <div className="carousel-thumbs">

        {/* Video thumbnail */}
        <div
          className={`thumb-video-container ${currentIndex === 0 ? "active" : ""}`}
          onClick={() => setCurrentIndex(0)}
        >
          <video src={car.video} className="thumb-video"></video>
          <span className="video-badge">Video</span>
        </div>

        {/* Image thumbnails */}
        {car.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Car thumbnail"
            className={currentIndex === index + 1 ? "active" : ""}
            onClick={() => setCurrentIndex(index + 1)}
          />
        ))}
      </div>

      {/* Car Information */}
      <div className="car-info">
        <h2>{car.name}</h2>
        <p className="price">₦{car.price}</p>

        <div className="features">
          <h3>Features</h3>
          <ul>
            {car.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
