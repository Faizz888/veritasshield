import React from "react";

const AboutPage: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="glass rounded-3xl shadow-2xl p-8 mb-8 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Veritas Shield
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering truth in the digital age through advanced AI technology
            </p>
          </div>

          {/* Core sections */}
          <div className="space-y-8">
            {/* Problem */}
            <section className="bg-white rounded-2xl p-8 border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold mb-4 text-red-700 flex items-center">
                <span className="mr-3">⚠️</span>
                The Problem
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Disinformation and fake news reduce trust in digital media, causing financial and reputational damage and wasting analysts' time on manual verification.
              </p>
            </section>

            {/* Why It Matters */}
            <section className="bg-white rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold mb-4 text-blue-700 flex items-center">
                <span className="mr-3">🎯</span>
                Why It Matters
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Companies need reliable tools to automatically detect misinformation before publishing or sharing content.
              </p>
            </section>

            {/* Our Solution */}
            <section className="bg-white rounded-2xl p-8 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold mb-4 text-green-700 flex items-center">
                <span className="mr-3">🛡️</span>
                Our Solution
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Veritas Shield is an AI‑powered platform that verifies online information in real time, helping teams make informed decisions with confidence.
              </p>
            </section>
          </div>
        </div>

        {/* Strategic Analysis */}
        <section>
          <h3 className="font-display text-3xl font-bold mb-8 text-gray-800 text-center">Strategic Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-bold text-xl mb-4 text-green-800 flex items-center">
                <span className="mr-2">💪</span>
                Strengths
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">•</span>AI-based instant detection</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Multilingual support</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">•</span>User-friendly interface</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-bold text-xl mb-4 text-red-800 flex items-center">
                <span className="mr-2">⚡</span>
                Challenges
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>New brand building awareness</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Training data dependencies</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Evolving misinformation tactics</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-bold text-xl mb-4 text-blue-800 flex items-center">
                <span className="mr-2">🚀</span>
                Opportunities
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Growing demand for fact-checking</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Enterprise system integration</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Government partnerships</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-bold text-xl mb-4 text-purple-800 flex items-center">
                <span className="mr-2">🎯</span>
                Focus Areas
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Competitive AI verification market</li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Building user trust</li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Staying ahead of bad actors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Journey */}
        <section className="bg-white rounded-2xl p-8 mt-8 border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-display text-2xl font-bold mb-6 text-purple-700 flex items-center">
            <span className="mr-3">🗺️</span>
            User Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👋</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Discover</h4>
              <p className="text-sm text-gray-600">Learn about Veritas Shield</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📝</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Try</h4>
              <p className="text-sm text-gray-600">Test our AI analysis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💎</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Subscribe</h4>
              <p className="text-sm text-gray-600">Choose your plan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Succeed</h4>
              <p className="text-sm text-gray-600">Fight disinformation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default AboutPage;
