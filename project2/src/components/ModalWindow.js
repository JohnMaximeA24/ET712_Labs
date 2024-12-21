import React, { useState } from 'react';
import './ModalWindow.css';

function ModalWindow({ isOpen, onClose }) {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Name entered: ${name}`);
    setName(''); // Reset the input field
  };

  if (!isOpen) {
    return null;
  }

  // Ensure the modal is only rendered on the Home page
  if (window.location.pathname !== '/') {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Sign in to GeoHub!</h2>
        <form onSubmit={handleFormSubmit} className="modal-form">
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={name}
            onChange={handleInputChange}
            placeholder="Your name here"
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWindow;
