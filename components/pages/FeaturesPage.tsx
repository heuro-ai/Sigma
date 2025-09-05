import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { StickyCTA } from '../StickyCTA';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';
import { Link } from '../Router';
import { TRACKING_FEATURES, INTELLIGENT_FEATURES } from '../../constants';
import { FeatureCard } from '../FeatureCard';

export const FeaturesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const advancedFeatures = [
    {
      title: "24/7 Heart Rate Monitoring",
      description: "Real-time heart health insights with medical-grade accuracy for continuous cardiovascular wellness tracking.",
      icon: "❤️",
      benefits: ["Early detection of irregularities", "Stress pattern analysis", "Fitness zone optimization"]
    },
    {
      title: "Sleep Quality Analytics", 
      description: "AI-driven sleep scoring with personalized tips and science-backed coaching for improved rest quality.",
      icon: "😴",
      benefits: ["Sleep stage analysis (REM, Deep, Light)", "Personalized sleep coaching", "Recovery recommendations"]
    },
    {
      title: "Activity & Stress Tracking",
      description: "Monitor steps, calories, and stress levels—empowering employees to stay active and resilient throughout the day.",
      icon: "🏃‍♂️",
      benefits: ["Automatic activity detection", "Stress pattern insights", "Burnout prevention alerts"]
    }
  ];

  const aiFeatures = [
    {
      title: "Micro-App Suite",
      description: "Unique AI-powered micro-apps for sleep, stress, productivity, and mood—tailored to each individual user.",
      icon: "🤖",
      benefits: ["Personalized wellness apps", "Smart habit formation", "Contextual recommendations"]
    },
    {
      title: "Daily Actionable Insights",
      description: "Get bite-sized, actionable health nudges and reminders powered by advanced AI algorithms.",
      icon: "💡",
      benefits: ["Smart daily tips", "Proactive health alerts", "Behavioral pattern recognition"]
    },
    {
      title: "Wellness Challenges",
      description: "Motivate teams with gamified step, sleep, and healthy habit challenges built into the Sigma app.",
      icon: "🏆",
      benefits: ["Team competitions", "Achievement badges", "Social wellness motivation"]
    }
  ];

  const corporateFeatures = [
    {
      title: "Ready for HR & Team Leads",
      description: "Simple bulk onboarding, team wellness dashboards, and instant progress reports for seamless management.",
      icon: "👥",
      benefits: ["Bulk device provisioning", "Team wellness analytics", "Easy onboarding process"]
    },
    {
      title: "Automated Wellness Reports",
      description: "Export NPS, engagement, and health KPIs to measure ROI on your company wellness investment.",
      icon: "📊",
      benefits: ["ROI measurement tools", "Engagement metrics", "Health trend analysis"]
    },
    {
      title: "GDPR & Privacy Compliant",
      description: "Your employees' data stays secure, encrypted, and 100% compliant with Indian & international standards.",
      icon: "🔒",
      benefits: ["End-to-end encryption", "India data residency", "Full privacy compliance"]
    }
  ];

  return (
    <div className="bg-sigma-midnight text-white min-h-screen">
      <Header onContactClick={() => openModal('contact')} />
      
      {/* Hero Section */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-tight font-bold mb-6">
            India's Most Affordable AI-Powered Smart Ring
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your workplace, boost productivity, and inspire happier teams—starting at just <span className="text-neon-cyan font-bold">₹4,999 per employee!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal('contact')}
              className="bg-gradient-to-r from-ocean-teal to-neon-cyan text-sigma-midnight font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-neon-cyan/20"
            >
              📅 Schedule Free Demo
            </button>
            <Link
              to="/compare"
              className="bg-graphite text-white font-bold py-4 px-8 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
            >
              ⚖️ Compare vs Competitors
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
            <div className="bg-graphite/50 p-4 rounded-lg">
              <div className="text-neon-cyan font-bold text-2xl">6 Days</div>
              <div className="text-gray-400">Battery Life</div>
            </div>
            <div className="bg-graphite/50 p-4 rounded-lg">
              <div className="text-neon-cyan font-bold text-2xl">₹4,999</div>
              <div className="text-gray-400">One-time Cost</div>
            </div>
            <div className="bg-graphite/50 p-4 rounded-lg">
              <div className="text-neon-cyan font-bold text-2xl">GDPR</div>
              <div className="text-gray-400">Compliant</div>
            </div>
            <div className="bg-graphite/50 p-4 rounded-lg">
              <div className="text-neon-cyan font-bold text-2xl">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Health & Wellness Tracking */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-tight font-bold mb-4">
              Advanced Health & Wellness Tracking
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive health monitoring that goes beyond basic fitness tracking to provide actionable wellness insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-graphite p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 text-neon-cyan mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRACKING_FEATURES.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Health Coach */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-tight font-bold mb-4">
              Personalized AI Health Coach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence that learns from your patterns to provide personalized wellness guidance and motivation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-sigma-midnight p-8 rounded-xl border border-ocean-teal/30 hover:border-ocean-teal transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 text-ocean-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Intelligent Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INTELLIGENT_FEATURES.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Integration */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-tight font-bold mb-4">
              Effortless Corporate Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built for Indian enterprises with seamless HR integration, compliance, and powerful analytics for decision makers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {corporateFeatures.map((feature, index) => (
              <div key={index} className="bg-graphite p-8 rounded-xl border border-white/10 hover:border-pulse-violet/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 text-pulse-violet mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sigma Life */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-tight font-bold mb-4">
              Why Choose Sigma Life For Your Company?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-ocean-teal/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Best In-Class Value</h3>
              <p className="text-gray-300">Only ₹4,999—India's most affordable advanced smart ring for teams of any size.</p>
            </div>

            <div className="text-center">
              <div className="bg-pulse-violet/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Backed By Science & AI</h3>
              <p className="text-gray-300">Built by experts in AI, health, and wearable technologies with proven algorithms.</p>
            </div>

            <div className="text-center">
              <div className="bg-neon-cyan/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-3">B2B-First Service</h3>
              <p className="text-gray-300">Priority onboarding, dedicated account management, and rapid support for enterprises.</p>
            </div>

            <div className="text-center">
              <div className="bg-calm-mint/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Made for India</h3>
              <p className="text-gray-300">Full compliance with Indian privacy laws, data residency, and cultural workplace understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-ocean-teal/20 to-neon-cyan/20 rounded-xl p-12 border border-ocean-teal/30 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Started With Sigma Life
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's make wellness your X-factor for talent retention and business growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-graphite/50 p-6 rounded-xl">
                <h3 className="font-bold text-neon-cyan mb-2">Easy Bulk Orders</h3>
                <p className="text-gray-400 text-sm">Volume discounts available for 50+ devices</p>
              </div>
              <div className="bg-graphite/50 p-6 rounded-xl">
                <h3 className="font-bold text-neon-cyan mb-2">Fast Delivery</h3>
                <p className="text-gray-400 text-sm">2-4 weeks implementation across India</p>
              </div>
              <div className="bg-graphite/50 p-6 rounded-xl">
                <h3 className="font-bold text-neon-cyan mb-2">Dedicated Support</h3>
                <p className="text-gray-400 text-sm">24/7 priority support for enterprise clients</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('contact')}
                className="bg-ocean-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-ocean-teal/90 transition transform hover:scale-105"
              >
                🗣️ Talk to a Wellness Expert Now
              </button>
              <Link
                to="/compare"
                className="bg-graphite text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 border border-white/20 transition transform hover:scale-105"
              >
                📊 See Detailed Comparisons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="font-bold text-lg mb-3">🏢 Made for Indian Workplaces</h3>
              <p className="text-gray-300 text-sm">Full compliance with Indian privacy laws, local data storage, and cultural workplace understanding.</p>
            </div>
            
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="font-bold text-lg mb-3">📱 Monthly AI Suite at ₹199</h3>
              <p className="text-gray-300 text-sm">Optional advanced AI features available for enhanced coaching and predictive analytics.</p>
            </div>
            
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="font-bold text-lg mb-3">🚀 Used by Top Companies</h3>
              <p className="text-gray-300 text-sm">Trusted by India's leading digital-first companies for employee wellness and productivity enhancement.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="bg-ocean-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-teal/90 transition"
            >
              View All FAQs
            </Link>
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