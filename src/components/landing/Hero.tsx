import React from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#0f0f0f] to-[#1a1a1a] pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-medium">Welcome to DynamicNet</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Reimagine the way people{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-orange-500">
              collaborate
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Build, create, and connect with your team in real-time. Experience secure messaging 
            and seamless collaboration like never before.
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={onGetStarted}
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Building
            </button>
            <button className="px-8 py-3 border-2 border-gray-700 hover:border-gray-600 text-white rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Visual Element */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
            <div className="space-y-4">
              {/* Mock UI Elements */}
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-700 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-gray-700 rounded w-1/3"></div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-700 rounded w-4/5 mb-2"></div>
                  <div className="h-2 bg-gray-700 rounded w-2/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

