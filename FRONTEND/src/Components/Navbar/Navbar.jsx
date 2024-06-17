import React from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [menu, setMenu] =  useState("home") ;

    // document.getElementById(menu).appendChild("<hr>")

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Name</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("home")}} >Home {menu === "home"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("men")}} >Men {menu === "men"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("women")}} >Women {menu === "women"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("kids")}} >Kids {menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-cart-menu">
            <button className="loginBtn">Log In</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
