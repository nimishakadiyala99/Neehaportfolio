import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Paracetamol', price: 5.99 },
  { id: 2, name: 'Vitamin C', price: 7.49 },
  { id: 3, name: 'Ibuprofen', price: 6.99 },
];

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-8">Cart</h2>
      <ul className="mt-2">
        {cart.map((item, i) => (
          <li key={i}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
