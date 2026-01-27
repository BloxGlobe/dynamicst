import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '💬',
      title: 'Secure Messaging',
      description: 'End-to-end encrypted messaging keeps your conversations private and secure.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👥',
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with live updates and instant synchronization.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance ensures smooth experience even with large teams.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to help teams collaborate efficiently and securely
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 text-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
