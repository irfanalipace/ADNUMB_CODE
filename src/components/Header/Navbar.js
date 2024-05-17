import React from 'react';
import { a } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import homeimag from "./../../assets/homelogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the desired icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          {/* Left side image */}
          <img src={homeimag} alt="Logo" className="logo-imagedata" />
          
         
          <ul className="menu">
          <li><Link to="/" className="menu-link plats-colorData">Number Plate Maker</Link></li>
          <li><Link to="/products" className="menu-link">Show Plates</Link></li>
          <li><Link to="/categories" className="menu-link">Motorcycle Plates</Link></li>
          <li><Link to="/about" className="menu-link">4D Number Plates</Link></li>
          <li><Link to="/contact" className="menu-link">3D Gel Plates</Link></li>
        </ul>
        
        </div>
        
        <div className="header-right">
        <Link to="/profile" className="header-icon menu-link" style={{marginRight:'23px'}}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/cart" className="header-icon menu-link">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
      </div>
      <hr className="header-divider" />
    </nav>
  );
}

export default Navbar;
