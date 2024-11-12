import React from 'react';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)" }}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-95 rounded-xl shadow-md shadow-gray-400">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
        <form className="space-y-4">
          <input 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:border-gray-500" 
            type="text" 
            placeholder="Username" 
          />
          <input 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:border-gray-500" 
            type="email" 
            placeholder="Email" 
          />
          <input 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:border-gray-500" 
            type="password" 
            placeholder="Password" 
          />
          <button className="w-full py-2 text-white bg-gray-700 rounded-lg shadow-sm shadow-gray-500 hover:bg-gray-600 font-bold">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account? <a href="/login" className="text-gray-700 hover:text-gray-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
