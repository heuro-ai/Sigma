
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
            <h2 className="text-3xl md:text-4xl font-tight font-bold text-white mt-4">Built for Enterprise, Designed for People</h2>
            <p className="mt-4 text-lg text-gray-300">
              Sigma Life provides the tools and insights you need to build a healthier, more engaged workforce while prioritizing privacy and security.
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
            <img src="https://picsum.photos/seed/business/800/600" alt="Corporate team collaborating" className="object-cover w-full h-full rounded-xl shadow-2xl" />
             <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
