<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Japan from './pages/Japan';
import NYC from './pages/NYC';
import Dubai from './pages/Dubai';
import ModalWindow from './components/ModalWindow';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="app-container">
        
        <header className="website-header">
          <h1>GeoHub</h1>
        </header>

        <nav className="navbar">
          <ul className="navbar-links">
            <li><Link to="/" className="hover-button">Home</Link></li>
            <li><Link to="/japan" className="hover-button">Japan</Link></li>
            <li><Link to="/nyc" className="hover-button">New York City</Link></li>
            <li><Link to="/dubai" className="hover-button">Dubai</Link></li>
          </ul>
        </nav>

        {/* Render the ModalWindow only on the Home page */}
        {window.location.pathname === '/' && (
          <button className="open-modal-button" onClick={openModal}>Sign in!</button>
        )}

        <ModalWindow isOpen={isModalOpen} onClose={closeModal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/japan" element={<Japan />} />
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tokyo">Tokyo</Link></li>
            <li><Link to="/nyc">NYC</Link></li>
            <li><Link to="/dubai">Dubai</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokyo" element={<Tokyo />} />
>>>>>>> c4a8b53340961b6fe87961a775bcdbead7cd901e
          <Route path="/nyc" element={<NYC />} />
          <Route path="/dubai" element={<Dubai />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> c4a8b53340961b6fe87961a775bcdbead7cd901e
