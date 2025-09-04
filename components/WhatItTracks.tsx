
import React from 'react';
import { TRACKING_FEATURES } from '../constants';
import { FeatureCard } from './FeatureCard';

export const WhatItTracks: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-graphite/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-tight font-bold text-white">Unlock Comprehensive Wellness Insights</h2>
          <p className="mt-4 text-lg text-gray-300">
            The Sigma Smart Ring delivers continuous wellness insights through dual-chip sensors and up to 6 days of battery life.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRACKING_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
         <p className="text-center text-xs text-gray-500 mt-12">
            BP and illness risk wording: “trend estimates,” “early pattern signals,” “consult a healthcare professional for diagnosis.”
        </p>
      </div>
    </section>
  );
};
