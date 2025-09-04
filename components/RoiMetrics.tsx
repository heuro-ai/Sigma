
import React from 'react';
import { ROI_METRICS } from '../constants';

export const RoiMetrics: React.FC = () => {
  return (
    <section id="roi" className="py-20 bg-graphite/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-tight font-bold text-white">Driving Real Outcomes</h2>
          <p className="mt-4 text-lg text-gray-300">
            See the tangible impact of a proactive wellness strategy on employee engagement and satisfaction.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROI_METRICS.map((metric) => (
            <div key={metric.label} className="bg-graphite p-8 rounded-xl text-center border border-white/10">
              <p className="text-5xl font-tight font-extrabold text-transparent bg-clip-text bg-sigma-pulse">{metric.value}</p>
              <p className="mt-2 text-lg font-semibold text-white">{metric.label}</p>
              <p className="mt-1 text-sm text-neon-cyan">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
