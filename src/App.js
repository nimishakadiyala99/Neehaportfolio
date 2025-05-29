import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
<<<<<<< HEAD
      <Route path="/products" element={<Products />} />
=======
>>>>>>> 17b7b41 (Initial commit of neehaportfolio2)
    </Routes>
  </Router>
);

export default App;
