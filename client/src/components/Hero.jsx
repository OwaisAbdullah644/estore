// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 data-aos="fade-down" className="text-5xl font-bold mb-6">Welcome to Your Dream Store</h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl mb-8 max-w-2xl mx-auto">Discover amazing products at unbeatable prices. Shop now and elevate your lifestyle!</p>
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/products"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
          <Link
            to="categories"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;