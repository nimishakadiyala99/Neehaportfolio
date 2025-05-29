// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, name, price }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">${price}</p>
    </div>
  </div>
);

export default ProductCard;
