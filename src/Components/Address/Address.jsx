import { useState, useEffect } from 'react'
import React from 'react'
import './Address.css'
const Address = (props) => {
  const [isclicked, setisclicked]= useState(false)

  function handleShow(){
    setisclicked(true);
  }
  function handleHide(){
    setisclicked(false)
  }
  return (
    <div style={{marginBottom: '4rem'}}>
    <div className='address-container'>
      <div className='address-img'>
      <img src={props.img} alt="Description of the image" />
      <button  className='button' onClick={handleShow}>know more</button>
      </div>
      <div className="address-details">
        <div className="address-title">
          5BHK House for sale
        </div>
        <div className="address-info">
          <div className="area">Super Area
          <span>{props.area}</span>
            </div>
          <div className="status">Status
          <span>{props.status}</span>
          </div>
          <div className="floor">Floor
          <span>{props.floor}</span>
          </div>
          <div className="transaction"> 
          Transaction
          <span>{props.transaction}</span>
          </div>
          <div className="furnishing">Furnishing
          <span>{props.furnish}</span>
          
          </div>
          <div className="bathroom">Bedroom
          <span>{props.bathroom}</span>
          </div>
        </div>
      </div>
      
    </div>
    {
      isclicked==true? 
      <div className="know-more-container">
        <h1 style={{color: 'brown'}}>More Details</h1>
        <div className='know-more'>
        <div className="more-left">
          <span>Price Breakup</span>
          <span>Booking Amount</span>
          <span>Address</span>
          <span>Contact</span>
        </div>
        <div className="more-right">
        <span>{props.pricebreakup}</span>
        <span>{props.bookingamount}</span>
        <span>{props.address}</span>
        <span>{props.contact}</span>
        </div>
        </div>
        <button onClick={handleHide}>Hide Details</button>
      </div>
      :''
    }
  
    </div>
    
  )
}

export default Address
