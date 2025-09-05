import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { StickyCTA } from '../StickyCTA';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';
import { Link } from '../Router';

const caseStudies = [
  {
    id: 'techcorp',
    company: 'TechCorp Solutions',
    logoUrl: 'https://via.placeholder.com/200x80/1A2233/F5F7FB?text=TechCorp',
    industry: 'Software Development',
    employees: '2,500+',
    title: 'TechCorp Boosts Employee Engagement by 30%',
    subtitle: 'How a leading software company transformed their wellness program',
    challenge: 'Low wellness program participation and rising healthcare costs',
    solution: 'Sigma Life Smart Rings with personalized health insights and gamification',
    results: [
      '30% increase in wellness program participation',
      '15% improvement in employee satisfaction scores',
      '22% reduction in sick days taken',
      '₹2.5 crore annual savings in healthcare costs'
    ],
    testimonial: {
      quote: "Sigma Life transformed our approach to employee wellness. The privacy-first design and actionable insights helped us create a culture where employees genuinely care about their health.",
      author: "Priya Sharma",
      role: "Chief People Officer",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'healthfirst',
    company: 'HealthFirst Insurance',
    logoUrl: 'https://via.placeholder.com/200x80/1A2233/F5F7FB?text=HealthFirst',
    industry: 'Healthcare Insurance',
    employees: '1,800+',
    title: 'HealthFirst Reduces Healthcare Costs by 20%',
    subtitle: 'Data-driven wellness program delivers measurable ROI',
    challenge: 'Rising healthcare premiums and low employee health awareness',
    solution: 'Comprehensive health monitoring with predictive analytics',
    results: [
      '20% reduction in healthcare spending',
      '40% increase in preventive care appointments',
      '85% employee engagement rate',
      '₹1.8 crore cost avoidance in first year'
    ],
    testimonial: {
      quote: "The ROI was clear within 6 months. Our employees love the privacy controls, and we're seeing real improvements in population health metrics.",
      author: "Dr. Rajesh Kumar",
      role: "Chief Medical Officer",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    image: 'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'globalretail',
    company: 'Global Retail Corp',
    logoUrl: 'https://via.placeholder.com/200x80/1A2233/F5F7FB?text=GlobalRetail',
    industry: 'Retail Chain',
    employees: '5,000+',
    title: 'Global Retail Achieves 90% Employee Retention',
    subtitle: 'Multi-location wellness program drives employee satisfaction',
    challenge: 'High turnover rates and inconsistent wellness programs across locations',
    solution: 'Standardized smart ring deployment with location-specific insights',
    results: [
      '90% employee retention rate (+25% improvement)',
      '50% reduction in recruitment costs',
      '35% increase in employee Net Promoter Score',
      '₹4.2 crore savings in hiring and training costs'
    ],
    testimonial: {
      quote: "Sigma Life helped us create a consistent wellness experience across all our locations. The analytics dashboard gives us insights we never had before.",
      author: "Arun Patel",
      role: "VP Human Resources",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    image: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  }
];

export const CaseStudiesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-sigma-midnight text-white min-h-screen">
      {/* SEO Meta Tags */}
      <title>Case Studies - Sigma Life Smart Ring Success Stories | Indian Corporate Wellness</title>
      <meta name="description" content="See how leading Indian companies like TechCorp, HealthFirst, and Global Retail transformed employee wellness with Sigma Life smart rings. Real ROI, proven results." />

      {/* Structured Data for Case Studies */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Sigma Life Case Studies",
          "description": "Success stories from companies using Sigma Life smart rings for corporate wellness",
          "publisher": {
            "@type": "Organization",
            "name": "Sigma Life"
          },
          "hasPart": caseStudies.map(study => ({
            "@type": "Article",
            "headline": study.title,
            "description": study.subtitle,
            "image": study.image,
            "author": {
              "@type": "Organization",
              "name": "Sigma Life"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sigma Life"
            }
          }))
        })}
      </script>

      <Header onContactClick={() => openModal('contact')} />
      
      {/* Hero Section */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-tight font-bold mb-6">
            Real Results from Real Companies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See how leading Indian organizations transformed their employee wellness programs with Sigma Life smart rings
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📈</span>
              <span>Proven ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span>Award-Winning Results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇳</span>
              <span>India-First Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-graphite rounded-2xl border border-white/10 overflow-hidden hover:border-ocean-teal/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Company Header */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={study.logoUrl} 
                        alt={`${study.company} logo`}
                        className="h-12 object-contain"
                      />
                      <div>
                        <div className="text-sm text-gray-400">{study.industry}</div>
                        <div className="text-sm text-neon-cyan">{study.employees} employees</div>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <p className="text-gray-300">{study.subtitle}</p>
                    </div>

                    {/* Key Results */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-neon-cyan">Key Results:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-ocean-teal/10 border border-ocean-teal/30 rounded-lg p-4">
                      <p className="text-white italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <img 
                          src={study.testimonial.image} 
                          alt={`${study.testimonial.author}, ${study.testimonial.role}`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-white">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-300">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-ocean-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-teal/90 transition"
                    >
                      Read Full Story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <img 
                      src={study.image} 
                      alt={`${study.company} team using Sigma Life wellness program`}
                      className="w-full h-80 lg:h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sigma-midnight/30 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Collective Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-graphite p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-neon-cyan mb-2">9,300+</div>
                <div className="text-gray-300">Employees Empowered</div>
              </div>
              <div className="bg-graphite p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-neon-cyan mb-2">₹8.5 Cr</div>
                <div className="text-gray-300">Healthcare Savings</div>
              </div>
              <div className="bg-graphite p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-neon-cyan mb-2">88%</div>
                <div className="text-gray-300">Average Engagement</div>
              </div>
              <div className="bg-graphite p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-neon-cyan mb-2">95%</div>
                <div className="text-gray-300">Client Retention</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-ocean-teal/20 to-neon-cyan/20 rounded-xl p-8 border border-ocean-teal/30 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Join These Success Stories?</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Transform your workplace wellness program with India's #1 B2B smart ring platform. Book a personalized demo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('contact')}
                  className="bg-ocean-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-ocean-teal/90 transition transform hover:scale-105"
                >
                  📅 Schedule Success Consultation
                </button>
                <a
                  href="https://wa.me/+919999999999?text=Hi! I want to learn how Sigma Life can deliver results like these case studies for our company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Success Stories
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