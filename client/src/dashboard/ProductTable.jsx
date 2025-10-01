// src/components/ProductTable.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <Link
          to="addproducts"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
        >
          Add Product
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                iPhone 15
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Electronics
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $999
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                50
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                T-Shirt
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Clothing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $25
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Python Book
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Books
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $40
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                100
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;