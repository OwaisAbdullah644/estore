// src/components/UpdateCategory.jsx
import React from "react";
import { Link } from "react-router-dom";
import CategoryLogic from "../hooks/CategoryLogic";

const UpdateCategory = () => {
  const { handleEdit, handleChange, cate, id, fetch: categories } = CategoryLogic();

  const currentCategory = categories.find(cat => cat._id === id);
  const currentImageUrl = currentCategory?.image || currentCategory?.imageUrl; // Adjust field name if needed

  return (
    <div className="py-12">
      <div className="max-w-md mx-auto">
        <Link
          to="/dashboard/categories"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors mb-6"
        >
          ← Back to Categories
        </Link>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Update Category
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the details to update category to your store. ID: {id}
            </p>
          </div>
          <form onSubmit={handleEdit} className="space-y-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Image (leave empty to keep current)
              </label>
              {currentImageUrl && (
                <div className="mb-2">
                  <p className="text-sm text-gray-600 mb-1">Current Image:</p>
                  <img 
                    src={currentImageUrl} 
                    alt="Current category" 
                    className="w-32 h-32 object-cover rounded-lg border"
                  />
                </div>
              )}
              <input
                id="image"
                name="image"
                type="file"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                accept="image/*"
              />
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700"
              >
                Update Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;