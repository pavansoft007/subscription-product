import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)" }}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-95 rounded-xl shadow-md shadow-gray-400">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4">
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
            Login
          </button>
        </form>
        <div className="flex justify-between text-sm">
          <a href="/forgot-password" className="text-gray-700 hover:text-gray-600">Forgot Password?</a>
          <a href="/register" className="text-gray-700 hover:text-gray-600">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
