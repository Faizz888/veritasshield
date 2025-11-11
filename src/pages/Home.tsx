import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Veritas Shield</h1>
      <p className="text-gray-700">
        AI-powered tool to detect disinformation in text or news articles.
      </p>

      <section className="bg-gray-50 p-4 rounded shadow">
        <h2 className="font-bold text-xl mb-2">Literature Review</h2>
        <p className="text-gray-600 text-sm">
          The rapid proliferation of disinformation on digital platforms has been extensively
          documented, demonstrating that false information often spreads faster...
        </p>
      </section>

      <section className="bg-gray-50 p-4 rounded shadow">
        <h2 className="font-bold text-xl mb-2">Problem Statement</h2>
        <p className="text-gray-600 text-sm">
          Disinformation and fake news reduce trust in digital media, cause financial and
          reputational damage...
        </p>
      </section>
    </div>
  );
};

export default Home;
