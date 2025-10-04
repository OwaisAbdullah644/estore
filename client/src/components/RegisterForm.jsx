import React from 'react';
import UseCrudLogic from '../hooks/UseCrudLogic';  // Use the generic automated hook

const RegisterForm = () => {
  const { formData, handleChange, createItem, loading } = UseCrudLogic({
    fetchEndpoint: '/users',  // Not used here, but for consistency
    addEndpoint: '/register',  // Your backend endpoint
    updateEndpoint: '/updateuser',  // Not used
    deleteEndpoint: '/deleteuser',  // Not used
    initialFormState: { 
      name: '', 
      email: '', 
      password: '', 
      confirmPass: '', 
      role: 'user'  
    },
    name: 'User'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPass) {
      alert("Passwords don't match!");
      return;
    }
    createItem(e);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">Registering...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">sign in to your account</a>
          </p>
        </div>
        <form className="mt-8 space-y-6 bg-white py-8 px-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirm"
                name="confirmPass"
                type="password"
                value={formData.confirmPass}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>

            <input type="hidden" name="role" value={formData.role} readOnly />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;