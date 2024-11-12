import React from 'react';

const Subscription = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6" style={{ background: "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)" }}>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <h2 className="col-span-full text-4xl font-bold text-center text-gray-800 mb-6">Choose Your Plan</h2>

        {/* Basic Plan */}
        <div className="flex flex-col items-center p-8 bg-white bg-opacity-95 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Basic Plan</h3>
          <p className="text-4xl font-bold text-gray-800 mb-6">$5<span className="text-lg text-gray-600">/month</span></p>
          <p className="text-gray-600 text-center mb-6">Basic features for personal use.</p>
          <button className="w-full py-2 mt-auto text-white bg-gray-700 rounded-lg shadow-sm shadow-gray-500 hover:bg-gray-600 font-bold transition-all">Subscribe</button>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col items-center p-8 bg-white bg-opacity-95 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Premium Plan</h3>
          <p className="text-4xl font-bold text-gray-800 mb-6">$15<span className="text-lg text-gray-600">/month</span></p>
          <p className="text-gray-600 text-center mb-6">Advanced features for power users.</p>
          <button className="w-full py-2 mt-auto text-white bg-gray-700 rounded-lg shadow-sm shadow-gray-500 hover:bg-gray-600 font-bold transition-all">Subscribe</button>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col items-center p-8 bg-white bg-opacity-95 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Pro Plan</h3>
          <p className="text-4xl font-bold text-gray-800 mb-6">$30<span className="text-lg text-gray-600">/month</span></p>
          <p className="text-gray-600 text-center mb-6">All features for professionals.</p>
          <button className="w-full py-2 mt-auto text-white bg-gray-700 rounded-lg shadow-sm shadow-gray-500 hover:bg-gray-600 font-bold transition-all">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
