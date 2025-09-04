
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
  onWaitlistClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onWaitlistClick }) => {
  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-pulse-violet/20 rounded-full blur-3xl"
        ></div>
        <div className="container mx-auto px-6 relative">
            <h1 className="text-4xl md:text-6xl font-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 leading-tight">
              Sigma Life for Employers
              <br/>
              <span className="text-4xl md:text-5xl">Smart Health, Simplified</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              A screen-free smart ring that can support employee wellness and productivity with clear, privacy-first insights.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto bg-gradient-to-r from-ocean-teal to-neon-cyan text-sigma-midnight font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-neon-cyan/20"
              >
                Contact Sales
              </button>
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto bg-graphite text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
              >
                Request a Demo
              </button>
            </div>
            <div className="mt-16 text-sm text-gray-400">
                <p>Trusted by forward-thinking organizations</p>
                <div className="flex justify-center items-center space-x-8 mt-4 opacity-50">
                    <span>TechCorp</span>
                    <span>HealthFirst</span>
                    <span>Global Retail</span>
                    <span>Innovate Inc.</span>
                </div>
            </div>
        </div>
    </section>
  );
};
