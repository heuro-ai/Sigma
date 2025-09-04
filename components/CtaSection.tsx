
import React from 'react';

interface CtaSectionProps {
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-graphite/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-tight font-bold text-white">Ready to Transform Your Workplace Wellness?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Contact us today to learn more about how Sigma Life can benefit your organization and request a demo for your team.
        </p>
        <div className="mt-8">
          <button
            onClick={onContactClick}
            className="bg-gradient-to-r from-ocean-teal to-neon-cyan text-sigma-midnight font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-neon-cyan/20"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};
