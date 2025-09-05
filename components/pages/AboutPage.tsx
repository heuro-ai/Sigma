import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppFloat } from '../WhatsAppFloat';
import { StickyCTA } from '../StickyCTA';
import { ContactModal } from '../ContactModal';
import { ModalType } from '../../types';

export const AboutPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Medical Officer",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "15+ years in preventive medicine and corporate wellness. Former Apollo Hospitals senior consultant."
    },
    {
      name: "Priya Sharma",
      role: "Head of Product",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Ex-Fitbit and Garmin product leader with expertise in wearable technology and user experience design."
    },
    {
      name: "Arjun Patel",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Former Microsoft and Google engineer specializing in IoT, AI, and enterprise software architecture."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description: "Sigma Life launched with mission to transform Indian corporate wellness through smart ring technology"
    },
    {
      year: "Q1 2024",
      title: "Pilot Programs",
      description: "Successful pilot deployments with 5 leading Indian companies, 500+ employees"
    },
    {
      year: "Q2 2024",
      title: "Product Launch",
      description: "Commercial launch of Sigma Life Smart Ring with enterprise dashboard and B2B features"
    },
    {
      year: "Q3 2024",
      title: "Scale & Growth",
      description: "Expanded to 50+ corporate clients, 10,000+ active users across India"
    },
    {
      year: "2025",
      title: "Market Leadership",
      description: "Positioned as India's #1 B2B smart ring platform with AI-powered wellness insights"
    }
  ];

  return (
    <div className="bg-sigma-midnight text-white min-h-screen">
      <Header onContactClick={() => openModal('contact')} />
      
      {/* Hero Section */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-tight font-bold mb-6">
              Transforming Indian Workplace Wellness
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sigma Life is India's pioneering B2B corporate wellness platform, leveraging advanced smart ring technology to help organizations build healthier, more productive workforces while maintaining complete employee privacy and data security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('contact')}
                className="bg-ocean-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-ocean-teal/90 transition"
              >
                Partner With Us
              </button>
              <a
                href="#story"
                className="bg-graphite text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 border border-white/20 transition"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="story" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To empower Indian organizations with cutting-edge wearable technology that transforms employee wellness from reactive healthcare to proactive wellbeing. We believe that healthier employees are more engaged, productive, and fulfilled in their work.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">Why We Started Sigma Life</h3>
              <p className="text-gray-300 leading-relaxed">
                Indian corporations face unique challenges: high stress levels, sedentary work culture, and rising healthcare costs. Traditional wellness programs show low engagement (15-30%), while employees want privacy-first solutions that respect their personal health data. We built Sigma Life specifically for the Indian market with local compliance, cultural understanding, and B2B-first features.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Team collaboration at Sigma Life office"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sigma-midnight/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Sigma Life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-graphite p-8 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-ocean-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Privacy First</h3>
              <p className="text-gray-300">
                Employee health data is sacred. We maintain the highest standards of privacy and security, ensuring individual data never leaves employee control.
              </p>
            </div>
            
            <div className="bg-graphite p-8 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-ocean-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Made for India</h3>
              <p className="text-gray-300">
                Purpose-built for Indian organizations with local data residency, compliance with Indian laws, and cultural understanding of workplace wellness.
              </p>
            </div>
            
            <div className="bg-graphite p-8 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-ocean-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Measurable Impact</h3>
              <p className="text-gray-300">
                Every feature is designed to deliver quantifiable results: improved engagement, reduced healthcare costs, and enhanced productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experienced leaders from healthcare, technology, and enterprise software bringing together decades of expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-graphite p-6 rounded-xl border border-white/10 text-center">
                <img 
                  src={member.image} 
                  alt={`${member.name}, ${member.role} at Sigma Life`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-neon-cyan font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From startup to India's leading B2B wellness platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ocean-teal/30 hidden md:block"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-ocean-teal rounded-full items-center justify-center text-sigma-midnight font-bold text-sm mr-8 flex-shrink-0">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-graphite p-6 rounded-xl border border-white/10 flex-1">
                    <div className="md:hidden text-ocean-teal font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Impact by Numbers</h2>
            <p className="text-gray-300 text-lg">
              The results speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-cyan mb-2">50+</div>
              <div className="text-gray-300">Corporate Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-cyan mb-2">10,000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-cyan mb-2">85%</div>
              <div className="text-gray-300">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-cyan mb-2">20%</div>
              <div className="text-gray-300">Healthcare Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-graphite/30">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-ocean-teal/20 to-neon-cyan/20 rounded-xl p-8 border border-ocean-teal/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the Wellness Revolution</h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Partner with Sigma Life to transform your organization's approach to employee wellness. Together, we can build healthier, more productive workplaces across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('contact')}
                className="bg-ocean-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-ocean-teal/90 transition transform hover:scale-105"
              >
                🤝 Partner With Us
              </button>
              <a
                href="https://wa.me/+919999999999?text=Hi! I'd like to learn more about partnering with Sigma Life"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Let's Talk
              </a>
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