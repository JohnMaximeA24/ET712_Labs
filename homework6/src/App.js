import React from 'react';
import './App.css';
import ProductCard from './ProductCard';
import makeupImage from './images/makeup.jpg';
import lipstickImage from './images/lipstick.jpg';
import foundationImage from './images/foundation.jpg';

const App = () => {
  const products = [
    {
      name: 'Makeup Kit',
      image: makeupImage,
      price: '$25.99',
      availability: 'In Stock',
    },
    {
      name: 'Lipstick',
      image: lipstickImage,
      price: '$9.99',
      availability: 'Out of Stock',
    },
    {
      name: 'Foundation',
      image: foundationImage,
      price: '$19.99',
      availability: 'In Stock',
    },
  ];

  return (
    <div className="app">
      <h1>John Maxime's Make Up Online Shop</h1>
      <h2> Style Yourself up! With our Products! </h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            availability={product.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
