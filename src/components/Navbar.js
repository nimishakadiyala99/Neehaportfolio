// src/components/Navbar.js
import React from 'react';

const Navbar = () => (
  <nav className="flex items-center justify-between p-6 bg-white shadow-md">
    <div className="text-2xl font-bold text-gray-800">PharmaCo</div>
    <ul className="flex space-x-6 text-gray-600">
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
