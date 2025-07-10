import React, { useState } from "react";
import Swal from "sweetalert2";
import { IoFastFoodSharp, IoLocationSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "017fe9cd-673a-4fd6-8327-d441ccb61351");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "We'll get back to you soon. Thanks for contacting Burger-Ice!",
          icon: "success",
          confirmButtonColor: "#ff3a00",
          background: "#1a1a1a",
          color: "#fff"
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#ff3a00",
          background: "#1a1a1a",
          color: "#fff"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to send message. Please check your connection.",
        icon: "error",
        confirmButtonColor: "#ff3a00",
        background: "#1a1a1a",
        color: "#fff"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="logo-section">
              <IoFastFoodSharp className="logo-icon" />
              <h2>Burger-Ice</h2>
            </div>
            <p className="tagline">Where gourmet burgers meet artisanal ice cream</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <IoLocationSharp />
                </div>
                <div>
                  <h3>Our Location</h3>
                  <p>123 Food Street, Karachi, Pakistan</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <IoCallSharp />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>(92) 21-5326953</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <IoMailSharp />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>info@burger-ice.com</p>
                </div>
              </div>
            </div>
            
            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.twitter.com/" aria-label="Twitter"><FaTwitter /></a>
              </div>
            </div>
            
            <div className="hours-section">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={onSubmit} className="contact-form">
          <h2>Send us a message</h2>
          <p>Have a question or special request? Fill out the form below</p>
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
      
      <div className="map-section">
        <iframe 
          title="Burger-Ice Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.498757301233!2d67.02813631500002!3d24.84919658405883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6ae0d48905%3A0x4b7d1c0b6c8f8f0!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;