import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onSignupClick }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
        <li><Link to="/page3">Page 3</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><button onClick={onSignupClick} className="signup-btn">Signup</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
