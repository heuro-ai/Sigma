
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatItTracks } from './components/WhatItTracks';
import { IntelligentFeatures } from './components/IntelligentFeatures';
import { EmployerSolutions } from './components/EmployerSolutions';
import { TrustAndSecurity } from './components/TrustAndSecurity';
import { RoiMetrics } from './components/RoiMetrics';
import { CaseStudies } from './components/CaseStudies';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ModalType } from './types';

const App: React.FC = () => {
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
    <div className="bg-sigma-midnight text-cloud font-sans antialiased overflow-x-hidden">
      <Header onContactClick={() => openModal('contact')} />
      <main>
        <Hero onContactClick={() => openModal('contact')} onWaitlistClick={() => openModal('waitlist')} />
        <WhatItTracks />
        <IntelligentFeatures />
        <EmployerSolutions />
        <TrustAndSecurity />
        <RoiMetrics />
        <CaseStudies />
        <CtaSection onContactClick={() => openModal('contact')} />
      </main>
      <Footer />
      {isModalOpen && <ContactModal initialMode={modalType} onClose={closeModal} />}
      <div className="bg-graphite text-center py-2 px-4 text-xs text-gray-400">
        <p>Not a medical device. For wellness purposes only. Not intended for diagnosis or treatment.</p>
      </div>
    </div>
  );
};

export default App;
