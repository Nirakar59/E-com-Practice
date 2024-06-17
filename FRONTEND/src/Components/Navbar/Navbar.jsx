import React from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [menu, setMenu] =  useState("home") ;


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Name</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("home")}} >Home<hr/></li>
            <li onClick={()=> {setMenu("men")}} >Men</li>
            <li onClick={()=> {setMenu("women")}} >Women</li>
            <li onClick={()=> {setMenu("kids")}} >Kids</li>
        </ul>
        <div className="nav-cart-menu">
            <button className="loginBtn">Log In</button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar
