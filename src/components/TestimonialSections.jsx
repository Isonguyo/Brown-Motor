import React, { useState, useEffect } from "react";
import "../styles/components/TestimonialSection.css";

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  // Load reviews from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

  // Save new reviews to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newReview = {
      id: Date.now(),
      ...formData,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    setFormData({ name: "", rating: 5, comment: "" });
  };

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-container">
        <h2>Customer Reviews</h2>
        <p className="section-intro">
          Hear from our happy customers and share your own experience!
        </p>

        <div className="testimonials-grid">
          {/* Review Form */}
          <div className="review-form">
            <h3>Leave a Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <select
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: parseInt(e.target.value) })
                }
              >
                <option value={5}>★★★★★ (5)</option>
                <option value={4}>★★★★☆ (4)</option>
                <option value={3}>★★★☆☆ (3)</option>
                <option value={2}>★★☆☆☆ (2)</option>
                <option value={1}>★☆☆☆☆ (1)</option>
              </select>

              <textarea
                placeholder="Write your review..."
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                required
              ></textarea>

              <button type="submit">Submit Review</button>
            </form>
          </div>

          {/* Reviews List */}
          <div className="reviews-list">
            {reviews.length === 0 ? (
              <p className="no-reviews">No reviews yet. Be the first!</p>
            ) : (
              reviews.map((rev) => (
                <div className="review-card" key={rev.id}>
                  <img src={rev.avatar} alt={rev.name} className="review-avatar" />
                  <div className="review-details">
                    <h4>{rev.name}</h4>
                    <div className="review-stars">{renderStars(rev.rating)}</div>
                    <p>{rev.comment}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
