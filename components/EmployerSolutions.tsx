
import React from 'react';
import { EMPLOYER_SOLUTIONS } from '../constants';
import { CheckCircleIcon } from './IconComponents';

export const EmployerSolutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-graphite/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold text-neon-cyan uppercase tracking-wider">For Your Organization</span>
            <h2 className="text-3xl md:text-4xl font-tight font-bold text-white mt-4">Enterprise Dashboard & Analytics</h2>
            <p className="mt-4 text-lg text-gray-300">
              Access powerful B2B dashboard analytics and insights to build a healthier, more engaged workforce while maintaining complete privacy and security.
            </p>
            <div className="mt-8 space-y-4">
              {EMPLOYER_SOLUTIONS.map((solution) => (
                <div key={solution.title} className="flex items-start">
                  <CheckCircleIcon />
                  <div>
                    <h3 className="font-semibold text-white">{solution.title}</h3>
                    <p className="text-gray-400 text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-96">
            <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="B2B Analytics Dashboard" className="object-cover w-full h-full rounded-xl shadow-2xl" />
             <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 bg-sigma-midnight/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h4 className="text-white font-semibold text-sm">Real-time Analytics</h4>
              <p className="text-gray-300 text-xs mt-1">Monitor wellness trends across your organization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
