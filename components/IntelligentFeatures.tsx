
import React from 'react';
import { INTELLIGENT_FEATURES } from '../constants';
import { FeatureCard } from './FeatureCard';

export const IntelligentFeatures: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-tight font-bold text-white">Go Beyond Tracking with Intelligent Features</h2>
          <p className="mt-4 text-lg text-gray-300">
            Our platform translates raw data into actionable guidance to help teams optimize productivity, manage stress, and elevate everyday health.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INTELLIGENT_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};
