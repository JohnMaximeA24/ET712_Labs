import React from "react";

function ModalWindow({ product, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ModalWindow;
