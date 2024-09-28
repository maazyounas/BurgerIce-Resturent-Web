import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);

  const handleOrderNow = () => {
    navigate("/Menu");
  };

  
  const handleScroll = () => {
    const scrollPosition = window.scrollY; 
    if (scrollPosition > 100) { 
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="home-nav">
        <div className="home-logo">
          <IoFastFoodSharp />
          Burger-Ice
        </div>
        <nav className="home-navbar">
          <ul>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
            <li><a href="/Signin">Sign in</a></li>
          </ul>
        </nav>
      </div>

      {/* Apply 'hidden' class when isHidden is true */}
      <div className={`home-container ${isHidden ? "hidden" : "visible"}`}>
        <h1>Savor fresh Burgers</h1>
        <p>and creamy Ice cream!</p>
        <button className="home-button" onClick={handleOrderNow}>Order Now</button>
      </div>

      <div className="home-footer">
        <div className="home-footer-content">
          <div className="home-logo-footer">
            <IoFastFoodSharp />
            Burger-Ice
          </div>
          <div className="home-footer-section">
            <div className="home-contact">
              <h4>Contact Us</h4>
              <p>Phone: (92) 21-5326953</p>
              <p>Email: info@burger-ice.com</p>
            </div>

            <div className="home-social">
              <h4>Follow Us</h4>
              <a href="https://www.facebook.com/"><FaFacebook /></a>
              <a href="https://www.instagram.com/"><FaInstagram /></a>
              <a href="https://www.twitter.com/"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div className="home-footer-bottom">
          <div className="home-copyright">
            <p>Burger-Ice. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
