import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';

export const PrivacyPolicyPage: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-graphite p-6 rounded-xl border border-white/10 mb-8">
            <p className="text-lg text-gray-300 mb-0">
              <strong>Last Updated:</strong> January 4, 2025<br/>
              <strong>Effective Date:</strong> January 4, 2025
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sigma Life ("we," "our," or "us") is committed to protecting the privacy and security of personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our B2B corporate wellness platform and smart ring technology ("Services").
            </p>
            <p className="text-gray-300 leading-relaxed">
              This policy applies to our website (sigmalife.io), mobile applications, smart ring devices, and related services provided to corporate clients and their employees in India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Health and Wellness Data</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our smart rings collect the following health metrics with explicit employee consent:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Heart rate and heart rate variability (HRV)</li>
              <li>Sleep patterns, duration, and quality metrics</li>
              <li>Physical activity levels, steps, and movement data</li>
              <li>Stress indicators derived from physiological signals</li>
              <li>Body temperature variations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Account Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              For corporate administrators and employees:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Name, email address, employee ID</li>
              <li>Company affiliation and role information</li>
              <li>Account credentials and authentication data</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Technical Data</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Device identifiers and hardware information</li>
              <li>Usage patterns and interaction data</li>
              <li>Log files and technical diagnostics</li>
              <li>IP addresses and browser information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">3. How We Use Information</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 Individual Employee Benefits</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Provide personalized health insights and recommendations</li>
              <li>Generate wellness scores and trend analysis</li>
              <li>Deliver AI-powered sleep coaching and stress management tips</li>
              <li>Send health pattern alerts and early warning signals</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2 Corporate Wellness Analytics</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Create anonymized, aggregated workforce health trends</li>
              <li>Generate population-level wellness insights for HR teams</li>
              <li>Measure program effectiveness and engagement metrics</li>
              <li>Support wellness program optimization and resource allocation</li>
            </ul>

            <div className="bg-ocean-teal/10 border border-ocean-teal/30 p-4 rounded-lg mb-4">
              <p className="text-white font-semibold mb-2">🔒 Privacy Guarantee:</p>
              <p className="text-gray-300">
                Individual employee health data is NEVER shared with employers. Only anonymized, aggregated insights are provided to corporate administrators.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">4. Data Security and Protection</h2>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Technical Safeguards</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Multi-factor authentication and access controls</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance (certification in progress)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 India Data Residency</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              All personal health data is stored exclusively within India to comply with local data protection regulations and ensure data sovereignty.
            </p>

            <h3 className="text-xl font-semibold mb-3">4.3 Access Controls</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Strict role-based access permissions</li>
              <li>Regular employee training on data privacy</li>
              <li>Comprehensive audit trails and monitoring</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">5. Employee Rights and Controls</h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Employees maintain full control over their personal health data:
            </p>
            
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li><strong>Access:</strong> View all personal health data and insights</li>
              <li><strong>Portability:</strong> Export personal data in standard formats</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of personal data</li>
              <li><strong>Consent Management:</strong> Modify data sharing preferences</li>
              <li><strong>Opt-out:</strong> Discontinue participation at any time</li>
            </ul>

            <div className="bg-vital-red/10 border border-vital-red/30 p-4 rounded-lg mb-4">
              <p className="text-white font-semibold mb-2">⚠️ Important:</p>
              <p className="text-gray-300">
                Participation in corporate wellness programs is voluntary. Employees cannot be penalized for non-participation or for exercising their privacy rights.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">6. Compliance and Legal Framework</h2>
            
            <h3 className="text-xl font-semibold mb-3">6.1 Indian Privacy Laws</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We comply with India's Personal Data Protection Act and related regulations governing employee health data collection and processing.
            </p>

            <h3 className="text-xl font-semibold mb-3">6.2 International Standards</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>GDPR compliance for international operations</li>
              <li>HIPAA-level security standards</li>
              <li>ISO 27001 information security management</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">6.3 Corporate Compliance</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We help corporate clients maintain compliance with Indian labor laws and workplace monitoring regulations through proper consent management and data anonymization.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">7. Data Sharing and Third Parties</h2>
            
            <h3 className="text-xl font-semibold mb-3">7.1 No Sale of Personal Data</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, rent, or trade personal health data to third parties for marketing or commercial purposes.
            </p>

            <h3 className="text-xl font-semibold mb-3">7.2 Service Providers</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may share data with trusted service providers who assist in:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Cloud infrastructure and data hosting (India-based)</li>
              <li>Analytics and AI model development</li>
              <li>Technical support and maintenance</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              All service providers are bound by strict data processing agreements and privacy obligations.
            </p>

            <h3 className="text-xl font-semibold mb-3">7.3 Legal Requirements</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may disclose information when required by law, court order, or to protect the rights and safety of individuals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">8. Contact Information</h2>
            
            <div className="bg-graphite p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Data Protection Officer</h3>
              <p className="text-gray-300 mb-4">
                For privacy-related questions, concerns, or requests:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@sigmalife.io</p>
                <p><strong>General Contact:</strong> entrepreneurtoolbit@gmail.com</p>
                <p><strong>Phone:</strong> +91-9999999999</p>
                <p><strong>Address:</strong> Sigma Life Privacy Office, India</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">9. Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify users of material changes through:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Email notifications to registered users</li>
              <li>Prominent notices on our website</li>
              <li>In-app notifications for mobile users</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Continued use of our Services after policy updates constitutes acceptance of the revised terms.
            </p>
          </section>

          <div className="bg-ocean-teal/20 border border-ocean-teal/30 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-4">Questions About Privacy?</h3>
            <p className="text-gray-300 mb-6">
              Our privacy team is here to help you understand your rights and our data practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('contact')}
                className="bg-ocean-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-teal/90 transition"
              >
                Contact Privacy Team
              </button>
              <a
                href="mailto:privacy@sigmalife.io"
                className="bg-graphite text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 border border-white/20 transition"
              >
                Email: privacy@sigmalife.io
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