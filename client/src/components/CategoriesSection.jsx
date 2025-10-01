// src/components/CategoriesSection.jsx
import React from 'react';

const CategoriesSection = () => {
  const categories = [
    { id: 1, name: 'Electronics', icon: '📱', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Clothing', icon: '👕', color: 'from-pink-500 to-pink-600' },
    { id: 3, name: 'Books', icon: '📚', color: 'from-green-500 to-green-600' },
    { id: 4, name: 'Home & Garden', icon: '🏠', color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-900 mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`p-6 text-center bg-gradient-to-br ${category.color}`}>
                <span className="text-4xl mb-2 block">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              <div className="p-6">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;