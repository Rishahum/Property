
import React, { useState, useEffect } from 'react';
import './Properties.css';
import Address from '../Address/Address.jsx';
import house from '../images/1.jpg';

const Properties = () => {
  const [addressTagProps, setAddressTagProps] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:2000') 
      .then((response) => response.json())
      .then((data) => {
        setAddressTagProps(data); 
      })
      .catch((error) => {
        console.error('Error fetching address tag properties:', error);
      });
  }, []);

  return (
    <div className='properties-container'>
      <div className='properties-heading'>
        House For Sale!
      </div>
      <div className='properties-list'>
        {addressTagProps.map((props, index) => (
          <Address
            key={index}
            img={house}
            area={props.superarea}
            status={props.status}
            floor={props.floor}
            transaction={props.transaction}
            furnish={props.furnishing}
            bathroom={props.Bedroom}
            address={props.Address}
            contact={props.Contact}
            bookingamount={props.BookingAmount}
            pricebreakup={props.PriceBreakup}
          />
        ))}
      </div>
    </div>
  );
};

export default Properties;
