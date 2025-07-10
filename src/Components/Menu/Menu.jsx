import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoFastFoodSharp, IoClose } from "react-icons/io5";
import { FaShoppingBasket, FaTrash } from "react-icons/fa";
import "./Menu.css";

const Menu = () => {
  const [isPromptVisible, setPromptVisible] = useState(false);
  const navigate = useNavigate();
  const [bucket, setBucket] = useState([]);
  const totalPrice = bucket.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrderNow = () => {
    setPromptVisible(true);
  };

  const handlePlaceOrderMethod = (method) => {
    setPromptVisible(false);
    if (method === "PickUp") {
      navigate("/pickup");
    } else if (method === "Delivery") {
      navigate("/delivery");
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "BlackBun Burger",
      description: "Chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed black bun",
      price: 590,
      image: "/Blackbun.jpg",
      category: "burgers"
    },
    {
      id: 2,
      name: "Fries with Signature Sauce",
      description: "Crispy fries with our signature tomato sauce",
      price: 290,
      image: "/fries.jpg",
      category: "sides"
    },
    {
      id: 3,
      name: "Double Beef Burgers",
      description: "Two beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun",
      price: 790,
      image: "/twobeefburgers.jpg",
      category: "burgers"
    },
    {
      id: 4,
      name: "Grilled Gourmet Pizza",
      description: "Grilled pizza with spiced toppings and butter, served with Vietnamese sauce",
      price: 1990,
      image: "/grizzlybear.jpg",
      category: "pizza"
    },
    {
      id: 5,
      name: "Spicy Chilli Pizza",
      description: "Spiced pizza with chili flakes and our signature Vietnamese sauce",
      price: 990,
      image: "/pizza.jpg",
      category: "pizza"
    },
    {
      id: 6,
      name: "Signature Cold Cream",
      description: "Chocolate cream inside with signature topping and strawberries",
      price: 500,
      image: "/creamlava.jpg",
      category: "desserts"
    },
    {
      id: 7,
      name: "Choco Cold Cream",
      description: "Rich chocolate flavor cream with chocolate topping",
      price: 450,
      image: "/chocolava.jpg",
      category: "desserts"
    },
    {
      id: 8,
      name: "Berry Cream Bowl",
      description: "Fresh strawberries with cold cream",
      price: 390,
      image: "/pinkstraberry.jpg",
      category: "desserts"
    },
  ];

  const addToBucket = (item) => {
    const existingItem = bucket.find(i => i.id === item.id);
    if (existingItem) {
      setBucket(bucket.map(i => 
        i.id === item.id ? {...i, quantity: i.quantity + 1} : i
      ));
    } else {
      setBucket([...bucket, {...item, quantity: 1}]);
    }
  };

  const removeFromBucket = (id) => {
    setBucket(bucket.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromBucket(id);
      return;
    }
    setBucket(bucket.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const categories = ["all", "burgers", "sides", "pizza", "desserts"];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <div className="menu-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <IoFastFoodSharp className="hero-icon" />
            <h1>Burger-Ice Menu</h1>
            <p>Delicious burgers and ice cream creations made with passion</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Content */}
      <div className="menu-container">
        {/* Menu Items */}
        <div className="menu-items">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="item-footer">
                  <span className="item-price">Rs {item.price}</span>
                  <button className="add-btn" onClick={() => addToBucket(item)}>
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bucket Sidebar */}
        <div className="bucket-sidebar">
          <div className="bucket-header">
            <FaShoppingBasket className="basket-icon" />
            <h2>Your Order</h2>
            <span className="item-count">{bucket.length} items</span>
          </div>
          
          <div className="bucket-items">
            {bucket.length === 0 ? (
              <div className="empty-bucket">
                <p>Your order is empty</p>
                <p>Add delicious items from our menu!</p>
              </div>
            ) : (
              <>
                {bucket.map((item) => (
                  <div key={item.id} className="bucket-item">
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <span className="item-total">Rs {item.price * item.quantity}</span>
                    </div>
                    <div className="item-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="remove-btn" onClick={() => removeFromBucket(item.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          
          {bucket.length > 0 && (
            <div className="bucket-footer">
              <div className="total-section">
                <span>Subtotal:</span>
                <span className="total-price">Rs {totalPrice}</span>
              </div>
              <button className="checkout-btn" onClick={handlePlaceOrderNow}>
                Continue to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Method Modal */}
      {isPromptVisible && (
        <div className="modal-overlay">
          <div className="order-modal">
            <button className="close-modal" onClick={() => setPromptVisible(false)}>
              <IoClose />
            </button>
            <h3>How would you like to receive your order?</h3>
            <div className="modal-options">
              <div className="option-card" onClick={() => handlePlaceOrderMethod("PickUp")}>
                <div className="option-icon pickup-icon"></div>
                <h4>Pick Up</h4>
                <p>Order online and pick up at our restaurant</p>
              </div>
              <div className="option-card" onClick={() => handlePlaceOrderMethod("Delivery")}>
                <div className="option-icon delivery-icon"></div>
                <h4>Delivery</h4>
                <p>Get your order delivered to your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;