import React from 'react';

interface CTAProps {
  onGetStarted: () => void;
}

const CTA: React.FC<CTAProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of teams already collaborating on DynamicNet
          </p>
          <button
            onClick={onGetStarted}
            className="px-10 py-4 bg-linear-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white text-lg rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Start Building Today
          </button>
        </div>
      </div>
    </section>
  );
};

export { CTA };