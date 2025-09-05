
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatItTracks } from './components/WhatItTracks';
import { IntelligentFeatures } from './components/IntelligentFeatures';
import { EmployerSolutions } from './components/EmployerSolutions';
import { TrustAndSecurity } from './components/TrustAndSecurity';
import { RoiMetrics } from './components/RoiMetrics';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { SecurityProvider } from './contexts/SecurityContext';
import { SecurityBoundary } from './components/SecurityBoundary';
import { ModalType } from './types';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { StickyCTA } from './components/StickyCTA';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);


  return (
    <SecurityProvider>
      <SecurityBoundary>
        <div className="bg-sigma-midnight text-cloud font-sans antialiased overflow-x-hidden">
          <Header onContactClick={() => openModal('contact')} />
          <main>
            <Hero onContactClick={() => openModal('contact')} onWaitlistClick={() => openModal('waitlist')} />
            <WhatItTracks />
            <IntelligentFeatures />
            <EmployerSolutions />
            <TrustAndSecurity />
            <RoiMetrics />
            <CtaSection onContactClick={() => openModal('contact')} />
          </main>
          <Footer />
          {isModalOpen && (
            <SecurityBoundary fallback={
              <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                <div className="bg-sigma-midnight p-8 rounded-xl border border-vital-red/20 max-w-md mx-4">
                  <p className="text-white text-center">Unable to load contact form. Please refresh the page.</p>
                  <button onClick={closeModal} className="w-full mt-4 bg-ocean-teal text-white py-2 px-4 rounded-lg">
                    Close
                  </button>
                </div>
              </div>
            }>
              <ContactModal initialMode={modalType} onClose={closeModal} />
            </SecurityBoundary>
          )}
          <div className="bg-graphite text-center py-2 px-4 text-xs text-gray-400">
            <p>Not a medical device. For wellness purposes only. Not intended for diagnosis or treatment.</p>
          </div>
        </div>
        <WhatsAppFloat />
        <StickyCTA onContactClick={() => openModal('contact')} />
      </SecurityBoundary>
    </SecurityProvider>
  );
};

