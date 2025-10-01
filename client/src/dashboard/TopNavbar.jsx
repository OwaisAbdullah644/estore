// src/components/TopNavbar.jsx
import React from 'react';

const TopNavbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-800">Welcome back!</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
            U
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;