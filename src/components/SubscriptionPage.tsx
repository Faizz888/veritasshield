import React from "react";

const SubscriptionPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl shadow-2xl p-8 animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              💎 Subscription Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your disinformation detection needs
            </p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">Monthly</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">$10</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Unlimited text analysis</li>
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Real-time fact checking</li>
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Email support</li>
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Basic reporting</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Choose Monthly
                </button>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-400 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">Yearly</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">$89</span>
                  <span className="text-gray-500 ml-2">/ year</span>
                  <div className="text-sm text-green-600 font-semibold mt-1">Save $31!</div>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Everything in Monthly</li>
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Priority support</li>
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Advanced analytics</li>
                  <li className="flex items-center text-gray-600"><span className="text-green-500 mr-3">✓</span>Export reports</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Choose Yearly
                </button>
              </div>
            </div>
          </div>

          {/* Trust / Payment Info */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              🔒 Secure payments • 30-day money-back guarantee • Cancel anytime
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-400">
              <span>💳 All major cards accepted</span>
              <span>•</span>
              <span>🛡️ SSL protected</span>
              <span>•</span>
              <span>📞 24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
