// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: 'categories', label: 'Categories', icon: '📂' },
    { path: 'products', label: 'Products', icon: '📦' },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-200 hover:bg-indigo-700 hover:text-white transition-colors ${
              location.pathname === item.path ? 'bg-indigo-700 text-white' : ''
            }`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;