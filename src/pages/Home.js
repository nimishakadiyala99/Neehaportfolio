// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Vitamin C', price: 12.99, image: '/assets/images/vitamin-c.jpg' },
  { id: 2, name: 'Pain Reliever', price: 8.99, image: '/assets/images/pain-reliever.jpg' },
  // Add more products as needed
];

const Home = () => (
  <div>
    <HeroSection />
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  </div>
);

export default Home;
