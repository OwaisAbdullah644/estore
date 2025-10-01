import React from 'react';
import { Link } from 'react-router-dom';
import CategoryLogic from '../hooks/CategoryLogic';

const AddCategory = () => {
  const { cate, insertCate, handleChange } = CategoryLogic();

  return (
    <div className="py-12">
      <div className="max-w-md mx-auto">
        <Link
          to="dashboard/categories"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors mb-6"
        >
          ← Back to Categories
        </Link>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Add New Category</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the details to add a new category to your store.
            </p>
          </div>
          <form className="space-y-6" onSubmit={insertCate}>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Category Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={cate.name}
                onChange={handleChange}
                placeholder="Enter category name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                value={cate.description}
                onChange={handleChange}
                placeholder="Enter description"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                required
              />
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
