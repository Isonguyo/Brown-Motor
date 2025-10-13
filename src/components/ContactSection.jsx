import React from "react";
import "../styles/components/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-intro">
          We'd love to hear from you! Reach out for inquiries, bookings, or
          partnership opportunities.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p><strong>Address:</strong> 33 Ndidem Usang Iso Road, Calabar</p>
            <p><strong>Phone:</strong> 08034080299, 09099933444</p>
            <p><strong>Email:</strong> Iwuanyanwu2767@gmail.com</p>

            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.043491543141!2d8.3376!3d4.9712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106787f05e2fd28b%3A0xb55a240b0de9e64b!2s33%20Ndidem%20Usang%20Iso%20Rd%2C%20Calabar!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
