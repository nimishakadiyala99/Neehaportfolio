// src/App.js
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';


const App = () => (
  <Router>
    <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Routes>

  </Router>
);

export default App;
