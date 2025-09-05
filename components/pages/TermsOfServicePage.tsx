import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';

export const TermsOfServicePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-sigma-midnight text-white min-h-screen">
      <Header onContactClick={() => openModal('contact')} />
      
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-graphite p-6 rounded-xl border border-white/10 mb-8">
            <p className="text-lg text-gray-300 mb-0">
              <strong>Last Updated:</strong> January 4, 2025<br/>
              <strong>Effective Date:</strong> January 4, 2025
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing or using Sigma Life's B2B corporate wellness platform, smart ring devices, mobile applications, or website ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These Terms apply to corporate clients ("Companies"), their employees ("Users"), and visitors to our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">2. Description of Services</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Platform Services</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sigma Life provides a comprehensive B2B wellness platform including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Smart ring wearable devices for health monitoring</li>
              <li>Corporate dashboard with aggregated wellness analytics</li>
              <li>Employee mobile applications and personal health insights</li>
              <li>AI-powered wellness coaching and recommendations</li>
              <li>Administrative tools for program management</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Health Monitoring</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our smart rings continuously monitor various health metrics including heart rate, sleep patterns, activity levels, and stress indicators to provide wellness insights and recommendations.
            </p>

            <div className="bg-vital-red/10 border border-vital-red/30 p-4 rounded-lg mb-4">
              <p className="text-white font-semibold mb-2">⚠️ Medical Disclaimer:</p>
              <p className="text-gray-300">
                Sigma Life is not a medical device. Our Services are for wellness purposes only and are not intended for diagnosis, treatment, or monitoring of medical conditions. Always consult healthcare professionals for medical advice.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">3. Corporate Client Responsibilities</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 Account Management</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Maintain accurate corporate account information</li>
              <li>Ensure authorized personnel access administrative features</li>
              <li>Implement proper device distribution and management</li>
              <li>Comply with applicable labor laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2 Employee Consent and Privacy</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Obtain proper employee consent before program enrollment</li>
              <li>Inform employees about data collection and use</li>
              <li>Respect employee rights to opt-out or discontinue participation</li>
              <li>Ensure no penalties for non-participation in wellness programs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.3 Payment and Billing</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Pay fees according to agreed pricing and payment terms</li>
              <li>Maintain current billing information</li>
              <li>Report billing discrepancies within 30 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">4. Employee User Responsibilities</h2>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Device Care and Usage</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Use smart ring devices according to provided instructions</li>
              <li>Report device issues, damage, or loss promptly</li>
              <li>Return devices upon employment termination or program exit</li>
              <li>Keep devices clean and properly maintained</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 Data Accuracy</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Provide accurate personal information for account setup</li>
              <li>Update health information relevant to device usage</li>
              <li>Use devices consistently for accurate health monitoring</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.3 Appropriate Use</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Use Services for personal wellness purposes only</li>
              <li>Not attempt to reverse engineer or tamper with devices</li>
              <li>Respect other users' privacy and data confidentiality</li>
              <li>Report security concerns or unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">5. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold mb-3">5.1 Sigma Life Property</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              All intellectual property rights in the Services, including software, algorithms, designs, trademarks, and proprietary technology, remain the exclusive property of Sigma Life.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.2 User Data Rights</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Users retain ownership of their personal health data. By using our Services, you grant us a limited license to process this data solely to provide the agreed Services.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.3 Aggregated Data</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use anonymized, aggregated data derived from the Services for research, product improvement, and industry insights, provided individual privacy is protected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">6. Privacy and Data Protection</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Data collection, use, and protection are governed by our Privacy Policy, which forms an integral part of these Terms. Key principles include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Individual health data is never shared with employers</li>
              <li>Only aggregated, anonymized insights are provided to companies</li>
              <li>All data is stored within India for data sovereignty</li>
              <li>Users maintain full control over their personal health data</li>
              <li>Comprehensive security measures protect all information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">7. Service Availability and Support</h2>
            
            <h3 className="text-xl font-semibold mb-3">7.1 Service Uptime</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We strive to maintain 99.5% uptime for our platform Services, excluding planned maintenance windows and circumstances beyond our control.
            </p>

            <h3 className="text-xl font-semibold mb-3">7.2 Support Services</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Technical support during business hours (9 AM - 8 PM IST)</li>
              <li>Emergency support for critical issues</li>
              <li>Training and onboarding assistance for corporate clients</li>
              <li>Regular platform updates and feature enhancements</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">7.3 Planned Maintenance</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We will provide reasonable notice for planned maintenance that may affect Service availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">8. Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold mb-3">8.1 Service Disclaimers</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted service, error-free operation, or that Services will meet all user requirements.
            </p>

            <h3 className="text-xl font-semibold mb-3">8.2 Health and Medical Disclaimers</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sigma Life Services are not intended to replace professional medical advice, diagnosis, or treatment. Users should consult healthcare providers for medical decisions.
            </p>

            <h3 className="text-xl font-semibold mb-3">8.3 Liability Limits</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our liability for any claims arising from these Terms or use of Services is limited to the amount paid by the client for Services in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">9. Termination</h2>
            
            <h3 className="text-xl font-semibold mb-3">9.1 Corporate Client Termination</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Corporate clients may terminate Services with 30 days written notice. All devices must be returned, and final billing will be processed.
            </p>

            <h3 className="text-xl font-semibold mb-3">9.2 Employee Termination</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Employees may discontinue participation at any time. Personal health data will be handled according to their data retention preferences.
            </p>

            <h3 className="text-xl font-semibold mb-3">9.3 Sigma Life Termination Rights</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may terminate Services for material breach of Terms, non-payment, or violation of applicable laws, with appropriate notice and opportunity to cure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">10. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms are governed by the laws of India. Any disputes will be resolved through arbitration in accordance with Indian arbitration laws, with proceedings conducted in New Delhi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">11. Contact Information</h2>
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Legal and Compliance</h3>
              <p className="text-gray-300 mb-4">
                For questions about these Terms or legal matters:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> legal@sigmalife.io</p>
                <p><strong>General Contact:</strong> entrepreneurtoolbit@gmail.com</p>
                <p><strong>Phone:</strong> +91-9999999999</p>
                <p><strong>Address:</strong> Sigma Life Legal Department, India</p>
              </div>
            </div>
          </section>

          <div className="bg-ocean-teal/20 border border-ocean-teal/30 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
            <p className="text-gray-300 mb-6">
              Our legal team can help clarify any aspects of these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('contact')}
                className="bg-ocean-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-teal/90 transition"
              >
                Contact Legal Team
              </button>
              <a
                href="mailto:legal@sigmalife.io"
                className="bg-graphite text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 border border-white/20 transition"
              >
                Email: legal@sigmalife.io
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />

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