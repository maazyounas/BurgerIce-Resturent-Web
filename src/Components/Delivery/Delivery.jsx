import React from 'react'
import './Delivery.css'
import { useState } from 'react';


const Delivery = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="container">
      {!orderPlaced ? (
        <div>
          <h1 className='dileveryh1'>Place The Order</h1>
          <button className="button" onClick={handleOrder}>Order Now</button>
        </div>
      ) : (
        <div className="successMessage">
          <h2>Order Successful!</h2>
          <p>Our rider will drop your order at your address shortly.</p>
        </div>
      )}
    </div>
  );
}


export default Delivery
