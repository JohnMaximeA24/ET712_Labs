import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for button styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My React App</h1>
      <div className="button-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;