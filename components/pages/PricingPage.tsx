import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { StickyCTA } from '../StickyCTA';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';

export const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');
  const [teamSize, setTeamSize] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const calculateSavings = (size: number) => {
    if (size >= 500) return 25;
    if (size >= 250) return 20;
    if (size >= 100) return 15;
    if (size >= 50) return 10;
    return 0;
  };

  const getDiscountedPrice = (basePrice: number, size: number) => {
    const discount = calculateSavings(size);
    return Math.round(basePrice * (1 - discount / 100));
  };

  const plans = [
    {
      id: 'pilot',
      name: 'Pilot Program',
      description: 'Perfect for testing with small teams',
      basePrice: 4999,
      features: [
        '10-50 Smart Rings',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Onboarding',
        'Basic Health Metrics',
        'Sleep & Activity Tracking'
      ],
      highlight: false,
      minTeam: 10,
      maxTeam: 50
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Most popular for mid to large companies',
      basePrice: 4999,
      features: [
        '50+ Smart Rings',
        'Advanced Analytics Dashboard',
        'Admin Panel & Controls',
        'Priority Support',
        'Advanced Health Insights',
        'Productivity Analytics',
        'HRIS Integration Ready',
        'Dedicated Account Manager',
        'Custom Reporting'
      ],
      highlight: true,
      minTeam: 50,
      maxTeam: 1000
    },
    {
      id: 'enterprise-plus',
      name: 'Enterprise Plus',
      description: 'For large organizations with complex needs',
      basePrice: 4999,
      features: [
        '500+ Smart Rings',
        'White-label Dashboard',
        '24/7 Priority Support',
        'Custom Integrations',
        'Advanced AI Analytics',
        'Predictive Health Insights',
        'Multi-location Support',
        'Dedicated Success Team',
        'Custom Training Programs',
        'API Access',
        'Healthcare BAA Available'
      ],
      highlight: false,
      minTeam: 500,
      maxTeam: 10000
    }
  ];

  return (
    <div className="bg-sigma-midnight text-white min-h-screen">
      <Header onContactClick={() => openModal('contact')} />
      
      {/* Hero Section */}
      <section className="py-16 bg-graphite/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-tight font-bold mb-4">
            Transparent Pricing, Maximum Value
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            India's most competitive B2B smart ring pricing with no hidden fees or monthly subscriptions
          </p>
          
          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-ocean-teal to-neon-cyan rounded-xl p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-sigma-midnight mb-2">
              🏆 India's Best Value Corporate Wellness Smart Ring
            </h2>
            <p className="text-sigma-midnight text-lg font-semibold">
              ₹4,999 per device • No Monthly Fees • No Hidden Costs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Team Size Calculator */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Calculate Your Investment</h2>
            
            <div className="bg-graphite p-8 rounded-xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <label className="block text-lg font-semibold mb-4">
                    How many employees in your wellness program?
                  </label>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full h-3 bg-sigma-midnight rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>10</span>
                      <span>250</span>
                      <span>500</span>
                      <span>1000+</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-3xl font-bold text-neon-cyan">{teamSize}</span>
                    <span className="text-gray-400 ml-2">employees</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-sigma-midnight p-6 rounded-xl border border-ocean-teal/30">
                    <h3 className="text-xl font-semibold mb-4">Your Investment</h3>
                    
                    {calculateSavings(teamSize) > 0 && (
                      <div className="mb-4">
                        <span className="text-gray-400 line-through text-lg">
                          ₹{(4999 * teamSize).toLocaleString('en-IN')}
                        </span>
                        <div className="text-vital-red font-semibold">
                          -{calculateSavings(teamSize)}% Volume Discount
                        </div>
                      </div>
                    )}
                    
                    <div className="text-4xl font-bold text-neon-cyan mb-2">
                      ₹{(getDiscountedPrice(4999, teamSize) * teamSize).toLocaleString('en-IN')}
                    </div>
                    <div className="text-gray-400">
                      ₹{getDiscountedPrice(4999, teamSize).toLocaleString('en-IN')} per device
                    </div>
                    
                    {calculateSavings(teamSize) > 0 && (
                      <div className="mt-4 text-green-400 font-semibold">
                        You save: ₹{((4999 - getDiscountedPrice(4999, teamSize)) * teamSize).toLocaleString('en-IN')}
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => openModal('contact')}
                    className="mt-6 bg-ocean-teal text-white px-8 py-3 rounded-lg font-bold hover:bg-ocean-teal/90 transition transform hover:scale-105"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-graphite rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.highlight 
                      ? 'border-ocean-teal shadow-2xl shadow-ocean-teal/20' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-ocean-teal text-white px-6 py-2 rounded-full text-sm font-bold">
                        🏆 Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-neon-cyan">
                        ₹{plan.basePrice.toLocaleString('en-IN')}
                      </span>
                      <div className="text-gray-400 text-sm">per device • one-time</div>
                      {plan.minTeam && (
                        <div className="text-gray-500 text-sm mt-2">
                          {plan.minTeam}-{plan.maxTeam}+ employees
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-neon-cyan mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => openModal('contact')}
                    className={`w-full py-3 px-6 rounded-lg font-bold transition ${
                      plan.highlight
                        ? 'bg-ocean-teal text-white hover:bg-ocean-teal/90'
                        : 'bg-graphite border border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison with Competitors */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Sigma Life is India's Best Value
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-graphite rounded-xl overflow-hidden">
                <thead className="bg-sigma-midnight">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4 bg-ocean-teal text-white">Sigma Life</th>
                    <th className="text-center p-4">Oura Ring</th>
                    <th className="text-center p-4">Ultrahuman</th>
                    <th className="text-center p-4">boAt</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Device Price</td>
                    <td className="p-4 text-center bg-ocean-teal/10 text-neon-cyan font-bold">₹4,999</td>
                    <td className="p-4 text-center text-gray-400">₹25,000+</td>
                    <td className="p-4 text-center text-gray-400">₹20,000+</td>
                    <td className="p-4 text-center text-gray-400">₹3,000+</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Monthly Subscription</td>
                    <td className="p-4 text-center bg-ocean-teal/10 text-neon-cyan font-bold">₹0</td>
                    <td className="p-4 text-center text-gray-400">₹500/month</td>
                    <td className="p-4 text-center text-gray-400">₹399/month</td>
                    <td className="p-4 text-center text-gray-400">Free</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">B2B Dashboard</td>
                    <td className="p-4 text-center bg-ocean-teal/10 text-neon-cyan font-bold">✅ Included</td>
                    <td className="p-4 text-center text-gray-400">❌ No</td>
                    <td className="p-4 text-center text-gray-400">❌ Limited</td>
                    <td className="p-4 text-center text-gray-400">❌ No</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Enterprise Support</td>
                    <td className="p-4 text-center bg-ocean-teal/10 text-neon-cyan font-bold">✅ Dedicated</td>
                    <td className="p-4 text-center text-gray-400">❌ Consumer</td>
                    <td className="p-4 text-center text-gray-400">❌ Basic</td>
                    <td className="p-4 text-center text-gray-400">❌ Basic</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">India Compliance</td>
                    <td className="p-4 text-center bg-ocean-teal/10 text-neon-cyan font-bold">✅ Full</td>
                    <td className="p-4 text-center text-gray-400">❌ Limited</td>
                    <td className="p-4 text-center text-gray-400">❌ Limited</td>
                    <td className="p-4 text-center text-gray-400">✅ Basic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Your ROI Potential</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-graphite p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">20%</div>
                <div className="text-lg font-semibold mb-2">Healthcare Cost Reduction</div>
                <div className="text-gray-400 text-sm">
                  Average savings: ₹{Math.round(teamSize * 5000).toLocaleString('en-IN')} annually
                </div>
              </div>
              
              <div className="bg-graphite p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">30%</div>
                <div className="text-lg font-semibold mb-2">Engagement Increase</div>
                <div className="text-gray-400 text-sm">
                  Higher participation vs traditional wellness programs
                </div>
              </div>
              
              <div className="bg-graphite p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">6-12 months</div>
                <div className="text-lg font-semibold mb-2">Payback Period</div>
                <div className="text-gray-400 text-sm">
                  Typical ROI realization through reduced costs
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-ocean-teal/20 to-neon-cyan/20 rounded-xl p-8 border border-ocean-teal/30 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Book a consultation with our wellness experts to design the perfect program for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('contact')}
                  className="bg-ocean-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-ocean-teal/90 transition transform hover:scale-105"
                >
                  📅 Schedule Free Consultation
                </button>
                <a
                  href="https://wa.me/+919999999999?text=Hi! I want to discuss pricing for Sigma Life smart rings for our company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Pricing Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <StickyCTA onContactClick={() => openModal('contact')} />

      {/* Contact Modal */}
      {isModalOpen && (
        <ContactModal 
          initialMode={modalType} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};