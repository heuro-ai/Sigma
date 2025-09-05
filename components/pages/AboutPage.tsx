import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { StickyCTA } from '../StickyCTA';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';

const faqs = [
  {
    question: "What is Sigma Life Smart Ring and how does it work for B2B corporate wellness?",
    answer: "Sigma Life Smart Ring is India's leading B2B corporate wellness platform using advanced wearable device technology specifically designed for enterprise employee health programs. The smart ring continuously monitors key employee health metrics including heart rate, heart rate variability (HRV), sleep patterns, activity levels, and stress management indicators through dual-chip sensors with 6+ days battery life. Our platform provides real-time wellness insights to employees while delivering anonymized, aggregated workforce analytics to employers for data-driven wellness program optimization. Unlike consumer rings, Sigma Life is purpose-built for Indian corporate environments with complete GDPR compliance and local data residency.",
    category: "product"
  },
  {
    answer: "Sigma Life prioritizes data privacy and security through multiple layers of protection. All employee health data is encrypted in transit and at rest using industry-leading protocols. We maintain strict GDPR compliance and Indian data residency requirements. Individual employee data is NEVER shared with employers - only anonymized, aggregated insights are provided to organizations. We're SOC 2 Type II compliant (in progress) and offer BAA evaluation for qualified enterprise partners. Employees maintain full control over their personal health information.",
    category: "privacy"
  },
  {
    question: "How does Sigma Life compare to Oura, Ultrahuman, and boAt smart rings?",
    answer: "Sigma Life specifically focuses on B2B corporate wellness, unlike consumer-focused competitors. Key advantages: (1) India-based with local data residency and compliance, (2) B2B-specific features like productivity analytics and workforce insights, (3) Competitive pricing at ₹4,999 with no hidden fees, (4) Enterprise dashboard with admin controls, (5) Integration with Indian HR systems, (6) Dedicated corporate support and bulk provisioning. While Oura and Ultrahuman focus on individual consumers, Sigma Life is purpose-built for Indian corporate wellness programs.",
    category: "comparison"
  },
  {
    question: "What specific health metrics does the smart ring track?",
    answer: "The Sigma Life Smart Ring tracks comprehensive wellness metrics: (1) Heart Rate & HRV for cardiovascular health assessment, (2) Sleep Patterns including duration, quality, and sleep stages (REM, deep, light), (3) Activity Levels measuring steps, distance, and calories burned, (4) Stress Management through physiological signal analysis, (5) Recovery & Readiness scores, (6) Productivity Index correlating wellness with performance patterns. All metrics provide trend insights and early pattern signals for proactive health management.",
    category: "health"
  },
  {
    question: "How does Indian law and compliance shape Sigma Life's approach?",
    answer: "Sigma Life is designed specifically for the Indian market with full compliance to local regulations. We adhere to India's Personal Data Protection Act, maintain data residency within India, and ensure all processing meets Indian privacy standards. Our platform complies with Indian labor laws regarding employee monitoring, requires explicit consent for all data collection, and provides employees with full data control rights. We also support integration with Indian HRIS platforms like Keka, Darwinbox, and local payroll systems.",
    category: "compliance"
  },
  {
    question: "What is the pricing structure for corporate wellness programs?",
    answer: "Sigma Life offers transparent, competitive pricing at ₹4,999 per smart ring with no hidden fees or monthly subscriptions. This includes the hardware device, enterprise dashboard access, admin controls, employee onboarding, and ongoing support. Volume discounts are available for orders of 50+ devices. Additional services include custom integration (quoted separately), dedicated account management for enterprise clients, and optional training sessions. We also offer pilot programs for organizations wanting to test the solution before full deployment.",
    category: "pricing"
  },
  {
    question: "How does implementation work for large organizations?",
    answer: "Sigma Life provides comprehensive implementation support for enterprise clients. The process includes: (1) Initial consultation and pilot program design, (2) Bulk device provisioning and configuration, (3) Integration with existing HRIS and wellness platforms, (4) Employee onboarding with training sessions, (5) Admin dashboard setup with custom analytics, (6) Ongoing support and optimization. Implementation typically takes 2-4 weeks depending on organization size. We provide dedicated account management for seamless deployment and employee adoption.",
    category: "implementation"
  },
  {
    question: "What kind of ROI and business outcomes can we expect?",
    answer: "Organizations using Sigma Life typically see significant returns: (1) 85% average engagement rate (+20% vs. industry average), (2) 92% employee satisfaction (+15% since implementation), (3) 70% program participation (+25% growth YoY), (4) Reduced healthcare costs through early intervention, (5) Improved productivity through wellness optimization, (6) Enhanced employee retention and recruitment. Case studies show companies achieving 20% reduction in healthcare spending and 30% increase in wellness program engagement within the first year.",
    category: "roi"
  }
];

export const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📋' },
    { id: 'product', name: 'Product', icon: '🔗' },
    { id: 'privacy', name: 'Privacy & Security', icon: '🔒' },
    { id: 'comparison', name: 'Comparison', icon: '⚖️' },
    { id: 'health', name: 'Health Metrics', icon: '💓' },
    { id: 'compliance', name: 'Compliance', icon: '📜' },
    { id: 'pricing', name: 'Pricing', icon: '💰' },
    { id: 'implementation', name: 'Implementation', icon: '🚀' },
    { id: 'roi', name: 'ROI & Outcomes', icon: '📈' }
  ];

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="bg-sigma-midnight text-white min-h-screen">
      {/* SEO Meta Tags */}
      <title>FAQ - Sigma Life Smart Ring | Corporate Wellness Questions Answered</title>
      <meta name="description" content="Get answers to all your questions about Sigma Life smart ring for corporate wellness. Privacy, pricing, implementation, and ROI information for Indian businesses." />

      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      <Header onContactClick={() => openModal('contact')} />
      
      {/* Hero Section */}
      <section className="py-16 bg-graphite/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-tight font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Sigma Life Smart Ring for corporate wellness programs in India
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-ocean-teal text-white'
                      : 'bg-graphite text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-graphite rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-ocean-teal/20 to-neon-cyan/20 rounded-xl p-8 border border-ocean-teal/30">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our team of wellness experts is here to help you understand how Sigma Life can transform your workplace wellness program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('contact')}
                  className="bg-ocean-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-ocean-teal/90 transition"
                >
                  📞 Schedule Expert Consultation
                </button>
                <a
                  href="https://wa.me/+919999999999?text=Hi! I have questions about Sigma Life for our corporate wellness program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Support
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