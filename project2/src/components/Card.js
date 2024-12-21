// Card.js
import React from 'react';
import './Card.css';

function Card({ title, image, description, onCardClick }) {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;