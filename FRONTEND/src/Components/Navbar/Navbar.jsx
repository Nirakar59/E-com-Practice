import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [menu, setMenu] =  useState("home") ;

    // document.getElementById(menu).appendChild("<hr>")

  return (
    <div className='navbar'>
         <Link to ='/'><div className="nav-logo">
          <img src={logo} alt=""/>
            <p>E-Com</p>
        </div></Link> 
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("home")}}> <Link to='/'>Home</Link> {menu === "home"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("men")}}> <Link to='/men'>Men</Link> {menu === "men"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("women")}}> <Link to='/women'>Women</Link> {menu === "women"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("kids")}}> <Link to='/kids'>Kids</Link> {menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-cart-menu">
            <Link to='/loginSignup'><button className="loginBtn">Log In</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
