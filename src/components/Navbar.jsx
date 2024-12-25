import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-sub">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="menu">
            <ul>
              <li>
                <Link to={"/"} className="navLink">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navLink">About</Link>
              </li>
              <li>
                <Link className="navLink">Services</Link>
              </li>
              <li>
                <Link to={"/contact"} className="navLink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar