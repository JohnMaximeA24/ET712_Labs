import React from "react";

function CartPage({ cart }) {
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.0816; // New York sales tax (8.16%)
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="totals">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (8.16%): ${tax.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default CartPage;
