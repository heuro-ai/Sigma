import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { StickyCTA } from '../StickyCTA';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';

const comparisonData = {
  features: [
    {
      category: "Basic Features",
      items: [
        { feature: "Heart Rate Monitoring", sigma: "✅ Continuous 24/7", oura: "✅ Continuous", ultrahuman: "✅ Continuous", boat: "✅ Basic", hart: "✅ Basic" },
        { feature: "Sleep Tracking", sigma: "✅ Advanced Sleep Stages", oura: "✅ Advanced", ultrahuman: "✅ Advanced", boat: "✅ Basic", hart: "✅ Basic" },
        { feature: "Activity Tracking", sigma: "✅ Comprehensive", oura: "✅ Yes", ultrahuman: "✅ Yes", boat: "✅ Yes", hart: "✅ Yes" },
        { feature: "Battery Life", sigma: "✅ 6+ Days", oura: "4-7 Days", ultrahuman: "5-6 Days", boat: "3-4 Days", hart: "2-3 Days" },
        { feature: "Water Resistance", sigma: "✅ 5ATM", oura: "10ATM", ultrahuman: "5ATM", boat: "IP68", hart: "IP67" }
      ]
    },
    {
      category: "B2B Enterprise Features",
      items: [
        { feature: "Corporate Dashboard", sigma: "✅ Advanced Analytics", oura: "❌ Consumer Only", ultrahuman: "❌ Limited", boat: "❌ No", hart: "❌ No" },
        { feature: "Admin Controls", sigma: "✅ Full Management", oura: "❌ No", ultrahuman: "❌ No", boat: "❌ No", hart: "❌ No" },
        { feature: "Bulk Provisioning", sigma: "✅ Automated", oura: "❌ Manual Only", ultrahuman: "❌ Limited", boat: "❌ No", hart: "❌ No" },
        { feature: "HRIS Integration", sigma: "✅ Workday, SAP, Indian", oura: "❌ No", ultrahuman: "❌ No", boat: "❌ No", hart: "❌ No" },
        { feature: "Employee Privacy Controls", sigma: "✅ Complete Anonymization", oura: "❌ Individual Focus", ultrahuman: "❌ Limited", boat: "❌ No", hart: "❌ No" },
        { feature: "Productivity Analytics", sigma: "✅ AI-Powered Insights", oura: "❌ No", ultrahuman: "❌ Basic", boat: "❌ No", hart: "❌ No" }
      ]
    },
    {
      category: "Compliance & Security",
      items: [
        { feature: "GDPR Compliance", sigma: "✅ Full Compliance", oura: "✅ Yes", ultrahuman: "✅ Yes", boat: "❌ Limited", hart: "❌ No" },
        { feature: "India Data Residency", sigma: "✅ Complete Local Storage", oura: "❌ Global Servers", ultrahuman: "❌ Global", boat: "✅ Yes", hart: "✅ Limited" },
        { feature: "SOC 2 Type II", sigma: "✅ In Progress", oura: "✅ Certified", ultrahuman: "❌ No", boat: "❌ No", hart: "❌ No" },
        { feature: "Healthcare BAA", sigma: "✅ Available", oura: "❌ No", ultrahuman: "❌ No", boat: "❌ No", hart: "❌ No" },
        { feature: "Indian Labor Law Compliance", sigma: "✅ Purpose-Built", oura: "❌ No", ultrahuman: "❌ No", boat: "✅ Basic", hart: "✅ Basic" }
      ]
    },
    {
      category: "Pricing & Support",
      items: [
        { feature: "Device Price", sigma: "₹4,999", oura: "₹25,000+", ultrahuman: "₹20,000+", boat: "₹3,000+", hart: "₹2,500+" },
        { feature: "Monthly Subscription", sigma: "❌ No Hidden Fees", oura: "₹500/month", ultrahuman: "₹399/month", boat: "Free", hart: "Free" },
        { feature: "Corporate Support", sigma: "✅ Dedicated Team", oura: "❌ Consumer Support", ultrahuman: "❌ Limited", boat: "❌ Basic", hart: "❌ Basic" },
        { feature: "Training & Onboarding", sigma: "✅ Included", oura: "❌ No", ultrahuman: "❌ No", boat: "❌ No", hart: "❌ No" },
        { feature: "Volume Discounts", sigma: "✅ 50+ Devices", oura: "❌ No", ultrahuman: "❌ Limited", boat: "✅ Available", hart: "✅ Available" }
      ]
    },
    {
      category: "Advanced AI Features",
      items: [
        { feature: "AI Sleep Coach", sigma: "✅ Personalized Insights", oura: "✅ Basic", ultrahuman: "✅ Advanced", boat: "❌ No", hart: "❌ No" },
        { feature: "Stress Pattern Analysis", sigma: "✅ Workplace-Focused", oura: "✅ General", ultrahuman: "✅ Advanced", boat: "❌ Basic", hart: "❌ No" },
        { feature: "Productivity Correlation", sigma: "✅ B2B Specific", oura: "❌ No", ultrahuman: "❌ Limited", boat: "❌ No", hart: "❌ No" },
        { feature: "Early Warning System", sigma: "✅ Predictive Analytics", oura: "❌ Basic Alerts", ultrahuman: "✅ Health Warnings", boat: "❌ No", hart: "❌ No" }
      ]
    }
  ]
};

export const ComparePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-sigma-midnight text-white min-h-screen">
      <Header onContactClick={() => openModal('contact')} />
      
      {/* Hero Section */}
      <section className="py-16 bg-graphite/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-tight font-bold mb-4">
            Why Choose Sigma Life?
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Compare Sigma Life against leading smart ring competitors for B2B corporate wellness programs
          </p>
          <div className="mt-8 bg-gradient-to-r from-ocean-teal/20 to-neon-cyan/20 rounded-xl p-6 border border-ocean-teal/30 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-neon-cyan mb-2">🏆 India's Best Value</h2>
            <p className="text-lg">₹4,999 • No Monthly Fees • Enterprise Ready • Full GDPR Compliance</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-graphite rounded-xl overflow-hidden shadow-2xl">
              {/* Header */}
              <thead>
                <tr className="bg-sigma-midnight">
                  <th className="text-left p-6 font-bold text-lg">Features</th>
                  <th className="text-center p-6 bg-ocean-teal text-white">
                    <div className="flex flex-col items-center">
                      <div className="font-bold text-lg">Sigma Life</div>
                      <div className="text-sm opacity-90">🏆 Best for B2B</div>
                    </div>
                  </th>
                  <th className="text-center p-6">Oura Ring</th>
                  <th className="text-center p-6">Ultrahuman</th>
                  <th className="text-center p-6">boAt Smart Ring</th>
                  <th className="text-center p-6">HART Smart Ring</th>
                </tr>
              </thead>
              
              {/* Body */}
              <tbody>
                {comparisonData.features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    {/* Category Header */}
                    <tr className="bg-graphite border-t-2 border-ocean-teal">
                      <td colSpan={6} className="p-4 font-bold text-neon-cyan text-lg">
                        {category.category}
                      </td>
                    </tr>
                    
                    {/* Category Items */}
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-4 font-medium">{item.feature}</td>
                        <td className="p-4 text-center bg-ocean-teal/10 font-semibold text-neon-cyan">{item.sigma}</td>
                        <td className="p-4 text-center text-gray-300">{item.oura}</td>
                        <td className="p-4 text-center text-gray-300">{item.ultrahuman}</td>
                        <td className="p-4 text-center text-gray-300">{item.boat}</td>
                        <td className="p-4 text-center text-gray-300">{item.hart}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Advantages */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-neon-cyan mb-4 flex items-center">
                <span className="mr-2">🎯</span> B2B-First Design
              </h3>
              <p className="text-gray-300">
                Purpose-built for corporate wellness with enterprise dashboard, admin controls, and workforce analytics - not retrofitted consumer features.
              </p>
            </div>
            
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-neon-cyan mb-4 flex items-center">
                <span className="mr-2">🇮🇳</span> India-Specific Compliance
              </h3>
              <p className="text-gray-300">
                Complete data residency in India, Indian labor law compliance, and integration with local HR systems like Keka and Darwinbox.
              </p>
            </div>
            
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-neon-cyan mb-4 flex items-center">
                <span className="mr-2">💰</span> Transparent Pricing
              </h3>
              <p className="text-gray-300">
                No hidden fees, no monthly subscriptions. ₹4,999 includes hardware, software, enterprise dashboard, and support.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-ocean-teal/20 to-neon-cyan/20 rounded-xl p-8 border border-ocean-teal/30">
              <h2 className="text-3xl font-bold mb-4">Ready to see the difference?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Book a personalized demo and see why leading Indian companies choose Sigma Life for their corporate wellness programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('contact')}
                  className="bg-ocean-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-ocean-teal/90 transition transform hover:scale-105"
                >
                  📅 Book Free Demo
                </button>
                <a
                  href="https://wa.me/+919999999999?text=Hi! I want to compare Sigma Life with other smart rings for our company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.510-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Expert
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