import React from 'react';

const HeroSection = () => (
  <section className="flex items-center justify-center h-screen bg-gradient-to-r from-green-100 to-blue-100">
    <div className="text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Your Health, Our Priority</h1>
      <p className="text-lg text-gray-600 mb-6">Discover a wide range of pharmaceutical products tailored for you.</p>
      <a href="/products" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Shop Now</a>
    </div>
  </section>
);

export default HeroSection;
