import React from "react";
import ProductCard from "../components/ProductCard";
import { skincarePage1 } from "../products";

function Page1({ onAddToCart }) {
  return (
    <div className="products">
      {skincarePage1.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default Page1;
