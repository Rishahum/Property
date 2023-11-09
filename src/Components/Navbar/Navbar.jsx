import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-list" >
        <ul style={{ listStyleType: "none" }}>
          <li>
          <Link className='nav-link' style={{textDecoration:"none"}} to="/">Home</Link>
          </li>
          <li  >
          <Link className='nav-link' style={{textDecoration:"none"}} to="/map">Maps</Link>
          </li>
          <li>
          <Link className='nav-link' style={{textDecoration:"none"}} to="/properties">Properties</Link>
          </li>
          

        </ul>
      </div>



    </div>
  )
}

export default Navbar