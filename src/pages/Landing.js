import React from 'react';

const Landing = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-200">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-orange-700 mb-4">🙏 Baagunnava Munnababu 🙏</h1>
        <p className="text-xl text-gray-700">Welcome to our Online Pharmacy</p>
        <a href="/home" className="mt-6 inline-block px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
  Enter Site
</a>

      </div>
    </section>
  );
};

export default Landing;