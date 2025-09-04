
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-graphite p-6 rounded-xl border border-white/10 hover:border-neon-cyan/50 hover:-translate-y-1 transition-all duration-300">
      {icon}
      <h3 className="text-lg font-bold text-white mt-2">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
    </div>
  );
};
