
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
              India's #1 B2B Corporate Wellness Platform
              <br/>
              <span className="text-4xl md:text-5xl">Smart Ring Technology for Employee Health</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              Transform your workplace wellness program with India's most trusted B2B smart ring platform. Privacy-first wearable device technology that boosts employee engagement by 85% while reducing healthcare costs by 20%.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto bg-gradient-to-r from-ocean-teal to-neon-cyan text-sigma-midnight font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-neon-cyan/20 animate-pulse"
              >
                📅 Book Free Demo • ₹4,999 per device
              </button>
              <button
                onClick={onWaitlistClick}
                className="w-full sm:w-auto bg-graphite text-white font-semibold py-4 px-8 rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                💼 Join Enterprise Waitlist
              </button>
            </div>
            
            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 opacity-75">
                <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>GDPR & Indian Privacy Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Complete India Data Residency</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>6+ Days Battery • No Monthly Fees</span>
                </div>
            </div>
            
            <div className="mt-16 text-sm text-gray-400">
                <p>Trusted by 50+ leading Indian enterprises</p>
                <div className="flex justify-center items-center space-x-8 mt-4 opacity-50">
                    <span>TechCorp Solutions</span>
                    <span>HealthFirst Insurance</span>
                    <span>Global Retail Chain</span>
                    <span>Innovate Manufacturing</span>
                </div>
            </div>
        </div>
    </section>
  );
};
