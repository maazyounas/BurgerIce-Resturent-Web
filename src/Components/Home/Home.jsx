// Home.js
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaTimes } from "react-icons/fa";
import { MdDeliveryDining, MdIcecream } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  const features = [
    { icon: <GiHamburger size={40} />, title: "Gourmet Burgers", desc: "Handcrafted with premium beef and fresh ingredients" },
    { icon: <MdIcecream size={40} />, title: "Artisanal Ice Cream", desc: "Made daily with local dairy and natural flavors" },
    { icon: <MdDeliveryDining size={40} />, title: "Fast Delivery", desc: "Hot and fresh to your door in under 30 minutes" }
  ];

  const handleOrderNow = () => {
    navigate("/Menu");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsHidden(scrollPosition > 100);
    setScrolled(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Navigation */}
      <header className={`home-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="home-logo">
          <IoFastFoodSharp /> Burger-Ice
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <GiHamburger size={24} />}
        </button>

        <nav className={`home-navbar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/Menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
            <li><Link to="/ContactUs" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/Feedback" onClick={() => setMenuOpen(false)}>Feedback</Link></li>
            <li><Link to="/Signin" className="signin" onClick={() => setMenuOpen(false)}>Sign in</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main ref={heroRef} className={`home-container ${isHidden ? "hidden" : "visible"}`}>
        <div className="hero-content">
          <h1>Savor fresh Burgers</h1>
          <p>and creamy Ice cream!</p>
          <button className="home-button" onClick={handleOrderNow}>Order Now</button>
        </div>
      </main>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose Burger-Ice?</h2>
          <p>Quality ingredients, exceptional taste, unforgettable experience</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Items */}
      <section className="popular-section">
        <div className="section-header">
          <h2>Customer Favorites</h2>
          <p>Our most loved creations</p>
        </div>
        
        <div className="popular-grid">
          <div className="popular-item">
            <div className="popular-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80')" }}></div>
            <div className="popular-info">
              <h3>Classic Cheeseburger</h3>
              <p>Beef patty, cheddar, lettuce, tomato, special sauce</p>
              <span className="price">$9.99</span>
            </div>
          </div>
          
          <div className="popular-item">
            <div className="popular-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80')" }}></div>
            <div className="popular-info">
              <h3>Chocolate Dream</h3>
              <p>Belgian chocolate ice cream with brownie chunks</p>
              <span className="price">$6.99</span>
            </div>
          </div>
          
          <div className="popular-item">
            <div className="popular-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606755962773-d324e7a7a7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80')" }}></div>
            <div className="popular-info">
              <h3>Burger & Shake Combo</h3>
              <p>Any burger + milkshake of your choice</p>
              <span className="price">$14.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-content">
          <div className="footer-col">
            <div className="home-logo-footer">
              <IoFastFoodSharp />
              Burger-Ice
            </div>
            <p className="footer-tagline">Where burgers meet ice cream in perfect harmony</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/Menu">Menu</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/ContactUs">Contact</Link></li>
              <li><Link to="/Feedback">Feedback</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="home-contact">
              <p>Phone: (92) 21-5326953</p>
              <p>Email: info@burger-ice.com</p>
              <p>Address: 123 Food Street, Karachi</p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="home-social">
              <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.twitter.com/" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div className="home-footer-bottom">
          <p>&copy; 2024 Burger-Ice. All rights reserved.</p>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <div className="payment-icon">Visa</div>
              <div className="payment-icon">MC</div>
              <div className="payment-icon">PP</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;