import React, { useState } from "react";

function Signup({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    onClose();
  };

  return (
    <div className="signup-modal">
      <div className="signup-content">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>Name: <input type="text" name="name" onChange={handleChange} required /></label>
          <label>Email: <input type="email" name="email" onChange={handleChange} required /></label>
          <label>Password: <input type="password" name="password" onChange={handleChange} required /></label>
          <button type="submit">Signup</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Signup;
