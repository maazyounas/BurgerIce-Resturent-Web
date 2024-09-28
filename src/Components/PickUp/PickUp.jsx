import React from 'react'
import './PickUp.css'
import { useState } from 'react'
const PickUp = () => {

  const [orderPlaced, setOrderPlaced] =useState(false);

  const handleOrder=()=>{
      setOrderPlaced(true);
  }

  return (
    <div className='pickupcontainer'>
      {!orderPlaced ?(
        <div>
        <h1 className='pickuph1'>Place The Order</h1>
        <button className='pickupbtn' onClick={handleOrder}>Order Now</button>
        </div>
      ): (
        <div className='successMessage'>
          <h2>Order Successful!</h2>
          <p>Your order would be done shortly, Pick it up after 15 mins.</p>
          </div>
      )
      }
         
    </div>
  )
}

export default PickUp
