import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Page1 from "./pages/Page1.js";
import Page2 from "./pages/Page2.js";
import Page3 from "./pages/Page3.js";
import CartPage from "./components/CartPage.js";
import Signup from "./components/Signup.js";

function App() {
  const [cart, setCart] = useState([]);
  const [showSignup, setShowSignup] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <Router>
      <Navbar onSignupClick={toggleSignup} />
      <Routes>
        <Route path="/" element={<Page1 onAddToCart={addToCart} />} />
        <Route path="/page2" element={<Page2 onAddToCart={addToCart} />} />
        <Route path="/page3" element={<Page3 onAddToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
      {showSignup && <Signup onClose={toggleSignup} />}
    </Router>
  );
}

export default App;
