import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'


function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='nav-sub'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>

      <div className='menu'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
    </div>

    </>
  )
}

export default Navbar