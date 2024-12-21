import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, image, price, availability }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price}</p>
      <p className={`product-availability ${availability === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
        {availability}
      </p>
    </div>
  );
};

export default ProductCard;
