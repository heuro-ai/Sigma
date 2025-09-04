
import React from 'react';
import { CASE_STUDIES } from '../constants';

export const CaseStudies: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-tight font-bold text-white">Success Stories</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        See how businesses like yours have transformed their employee wellness programs with Sigma Life.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CASE_STUDIES.map((study, index) => (
                        <div key={index} className="bg-graphite rounded-xl border border-white/10 overflow-hidden flex flex-col">
                            <div className="bg-gray-800 p-8 flex items-center justify-center">
                                <img src={study.logoUrl} alt={`${study.title.split(' ')[0]} logo`} className="h-10 object-contain" />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                                <p className="mt-2 text-gray-400 text-sm flex-grow">{study.description}</p>
                                <a href="#" className="mt-4 text-sm font-semibold text-neon-cyan hover:text-ocean-teal transition-colors">
                                    Read full story &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
