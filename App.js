import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Paracetamol', price: 5.99 },
  { id: 2, name: 'Vitamin C', price: 7.49 },
  { id: 3, name: 'Ibuprofen', price: 6.99 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h1>Online Pharmacy</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
