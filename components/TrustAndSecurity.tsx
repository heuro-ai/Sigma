
import React from 'react';
import { CheckCircleIcon } from './IconComponents';

export const TrustAndSecurity: React.FC = () => {
    return (
        <section id="security" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-tight font-bold text-white">Trust, Security & Privacy by Design</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                    We are committed to the highest standards of data protection, ensuring employee information is always secure and confidential.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-graphite p-6 rounded-xl border border-white/10">
                        <h3 className="font-bold text-white flex items-center"><CheckCircleIcon />Data Encryption</h3>
                        <p className="mt-2 text-sm text-gray-400">All data is encrypted in transit and at rest using industry-leading protocols.</p>
                    </div>
                    <div className="bg-graphite p-6 rounded-xl border border-white/10">
                        <h3 className="font-bold text-white flex items-center"><CheckCircleIcon />Privacy First</h3>
                        <p className="mt-2 text-sm text-gray-400">Individual data is never shared. Employers only see anonymized, aggregated insights.</p>
                    </div>
                    <div className="bg-graphite p-6 rounded-xl border border-white/10">
                        <h3 className="font-bold text-white flex items-center"><CheckCircleIcon />Compliance Focused</h3>
                        <p className="mt-2 text-sm text-gray-400">SOC 2 Type II compliance is in progress. BAA evaluation available on request for qualified enterprise partners.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
