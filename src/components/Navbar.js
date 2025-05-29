import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between">
    <div className="text-lg font-bold">PharmaCo</div>
    <div>
      <Link to="/home" className="mr-4 text-blue-500">Home</Link>
      <Link to="/products" className="text-blue-500">Products</Link>
    </div>
  </nav>
);

export default Navbar;
