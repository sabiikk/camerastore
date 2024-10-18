import React from 'react'
import '../components/header.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
 <nav className="navbar">
      <div className="logo ms-2">
        <Link to="/" style={{textDecoration:'none',color:'white'}}>CAM <span style={{ color: 'red' }}>STORE</span></Link>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/product">All Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      <div className="icons">
        <button className="login-btn">
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
        </button>
        <button className="signup-btn">Profile</button>
      </div>
    </nav>
    </div>
  )
}

export default Header