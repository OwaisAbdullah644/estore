// src/components/ProductsSection.jsx
import React from 'react';

const ProductsSection = () => {
  const products = [
    { id: 1, name: 'iPhone 15', price: 999, image: 'https://via.placeholder.com/300x200?text=iPhone+15', rating: 4.8 },
    { id: 2, name: 'T-Shirt', price: 25, image: 'https://via.placeholder.com/300x200?text=T-Shirt', rating: 4.5 },
    { id: 3, name: 'Python Book', price: 40, image: 'https://via.placeholder.com/300x200?text=Python+Book', rating: 4.9 },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-indigo-600 mb-2">${product.price}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;