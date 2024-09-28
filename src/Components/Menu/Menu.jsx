import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Menu.css";
import PickUp from "../PickUp/PickUp";
import Delivery from "../Delivery/Delivery";

const Menu = () => {
  const [isPromptVisible, setPromptVisible] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrderNow = () => {
    setPromptVisible(true);
  };

  const handlePlaceOrderMethod = (method) => {
    console.log(`Selected method: ${method}`); // Check what method is being passed
    setPromptVisible(false);
    if (method === "PickUp") {
      navigate("/pickup");
    } else if (method === "Delivery") {
      navigate("/delivery");
    }
  };

  const [bucket, setBucket] = useState([]);
  const totalPrice = bucket.reduce((total, item) => total + item.price, 0);

  const menuItems = [
    {
      id: 1,
      name: "BlackBun with Fries",
      description:
        "Chiken fillet, spicy mayo, lettuce, sandwiched between a sesame seed Blackbun",
      price: 590,
      image: "/Blackbun.jpg",
    },
    {
      id: 2,
      name: "Fries With Tomato Sause",
      description:
        "Tomato fries ,Signature tomato sause",
      price: 290,
      image: "/fries.jpg",
    },
    {
      id: 3,
      name: "Two Beef Burgers",
      description:
        "beef fillet, spicy mayo, lettuce, sandwiched between a sesame seed Blackbun",
      price: 790,
      image: "/twobeefburgers.jpg",
    },
    {
      id: 4,
      name: "Grilled Piza",
      description:
        "Grilled Spiced and butter 6 pcs of Hot Shots signature Vietnamese sauce",
      price: 1990,
      image: "/grizzlybear.jpg",
    },
    {
      id: 5,
      name: "Spicy Chilli Pizza",
      description:
        "Spiced and butter 6 pcs of Hot Shots signature Vietnamese sauce",
      price: 990,
      image: "/pizza.jpg",
    },
    {
      id: 6,
      name: "Signature Cold Cream",
      description:
        "Chocolate Cream inside topping with Signature cream and Straberry ",
      price: 500,
      image: "/creamlava.jpg",
    },
    {
      id: 7,
      name: "Choco Cold Cream",
      description:
        "Chocolate flavour Cream with Chocolate topping",
      price: 450,
      image: "/chocolava.jpg",
    },
    {
      id: 8,
      name: "BerryCream Bowl",
      description:
        "Strabarries with cold cream",
      price: 390,
      image: "/pinkstraberry.jpg",
    },
  ];

  const addToBucket = (item) => {
    setBucket([...bucket, item]);
  };

  return (
    <div className="menu-container">
      <h1>
        Our <span className="menuspan">Menu</span>
      </h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className="menu-footer">
              <span className="pricespan">Rs {item.price}</span>
              <button onClick={() => addToBucket(item)}>Add to bucket</button>
            </div>
          </div>
        ))}
      </div>
      <div className="bucket">
        <h2>Your Bucket</h2>
        {bucket.length > 0 ? (
          <ul>
            {bucket.map((item, index) => (
              <li key={index}>
                {item.name} - Rs {item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your bucket is empty</p>
        )}

        {bucket.length > 0 && (
          <div className="total-price">
            <h3>Total: Rs {totalPrice}</h3>
            <button className="menu-button" onClick={handlePlaceOrderNow}>
              Place the Order
            </button>
          </div>
        )}

        {isPromptVisible && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>How would you like to order?</h3>
              <button
                className="modal-button"
                onClick={() => handlePlaceOrderMethod("PickUp")}
              >
                PickUp
              </button>
              <button
                className="modal-button"
                onClick={() => handlePlaceOrderMethod("Delivery")}
              >
                Delivery
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
