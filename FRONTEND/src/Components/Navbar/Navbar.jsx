import React from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logg">
            <img src={logo} alt="" />
            <p>Name</p>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-cart-menu">
            <button className="loginBtn">Log In</button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar
