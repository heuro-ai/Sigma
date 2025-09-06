import React, { useState, useEffect, useCallback } from 'react';
import { ModalType, ContactFormData, WaitlistFormData, FormErrors, SubmissionStatus } from '../types';
import { submitContactForm, submitWaitlistForm } from '../services/api';
import { SecureInput } from './SecureInput';
import { useSecureForm } from '../hooks/useSecureForm';
import { SecurityUtils } from '../utils/security';

interface ContactModalProps {
  initialMode: ModalType;
  onClose: () => void;
}

const formLabelClasses = "block text-sm font-medium text-gray-300 mb-1";

export const ContactModal: React.FC<ContactModalProps> = ({ initialMode, onClose }) => {
  const [mode, setMode] = useState<ModalType>(initialMode);
  
  // Contact form with security
  const contactForm = useSecureForm<ContactFormData>({
    initialValues: {
      fullName: '', email: '', company: '', companySize: '', role: '', interests: [], message: '', consent: false
    },
    validationSchema: {
      fullName: (value) => ({
        isValid: value.trim().length > 0,
        error: value.trim().length === 0 ? 'Full name is required' : undefined
      }),
      email: (value) => ({
        isValid: SecurityUtils.isValidEmail(value),
        error: !value ? 'Business email is required' : !SecurityUtils.isValidEmail(value) ? 'Invalid email format' : undefined
      }),
      company: (value) => ({
        isValid: value.trim().length > 0,
        error: value.trim().length === 0 ? 'Company name is required' : undefined
      }),
      companySize: (value) => ({
        isValid: value.length > 0,
        error: value.length === 0 ? 'Please select a company size' : undefined
      }),
      consent: (value) => ({
        isValid: value === true,
        error: !value ? 'You must agree to the terms' : undefined
      })
    },
    onSubmit: async (values) => {
      await submitContactForm(values);
      setStatus('success');
    },
    enableRateLimit: true,
    rateLimitIdentifier: 'contact_form'
  });

  // Waitlist form with security
  const waitlistForm = useSecureForm<WaitlistFormData>({
    initialValues: { email: '' },
    validationSchema: {
      email: (value) => ({
        isValid: SecurityUtils.isValidEmail(value),
        error: !value ? 'Email is required' : !SecurityUtils.isValidEmail(value) ? 'Invalid email format' : undefined
      })
    },
    onSubmit: async (values) => {
      await submitWaitlistForm(values);
      setStatus('success');
    },
    enableRateLimit: true,
    rateLimitIdentifier: 'waitlist_form'
  });

  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleInterestChange = (interest: string) => {
    const currentInterests = contactForm.values.interests;
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest];
    contactForm.setValue('interests', newInterests);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    setStatus('loading');
    try {
      e.preventDefault();
      // Basic validation
      if (!contactForm.values.fullName || !contactForm.values.email || !contactForm.values.company) {
        setStatus('error');
        return;
      }
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (contactForm.values.email && contactForm.values.fullName) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  
  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    setStatus('loading');
    try {
      e.preventDefault();
      
      if (!waitlistForm.values.email) {
        setStatus('error');
        return;
      }
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (waitlistForm.values.email) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  
  const renderSuccessMessage = () => (
    <div className="text-center p-8">
        <h3 className="text-2xl font-bold text-white">Thank You!</h3>
        <p className="mt-4 text-gray-300">
            {mode === 'contact' ? 'Your inquiry has been sent. Our team will get back to you shortly.' : 'You have been added to the enterprise waitlist. We will keep you updated.'}
        </p>
        <button onClick={onClose} className="mt-8 bg-ocean-teal text-white font-semibold py-2 px-6 rounded-lg">Close</button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-sigma-midnight w-full max-w-lg rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
         {status === 'success' ? renderSuccessMessage() : (
            <>
                <div className="p-6 border-b border-white/10">
                    <div className="flex justify-center space-x-2 bg-graphite p-1 rounded-lg">
                        <button onClick={() => setMode('contact')} className={`w-1/2 py-2 text-sm font-semibold rounded-md transition ${mode === 'contact' ? 'bg-ocean-teal text-white' : 'text-gray-300 hover:bg-white/5'}`}>Contact Sales</button>
                        <button onClick={() => setMode('waitlist')} className={`w-1/2 py-2 text-sm font-semibold rounded-md transition ${mode === 'waitlist' ? 'bg-ocean-teal text-white' : 'text-gray-300 hover:bg-white/5'}`}>Join Waitlist</button>
                    </div>
                </div>

                {mode === 'contact' ? (
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      action="/thank-you.html"
                      className="p-6 max-h-[70vh] overflow-y-auto space-y-4"
                      onSubmit={(e) => {
                        // Let Netlify handle the form submission
                        console.log('Form submitting to Netlify...');
                      }}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="_to" value="ab@sigmalife.io" />
                        <input type="hidden" name="_subject" value="🔥 New Contact Form Submission - Sigma Life" />
                        <p style={{ display: 'none' }}>
                          <label>
                            Don't fill this out if you're human: <input name="bot-field" />
                          </label>
                        </p>
                        <div>
                            <SecureInput
                              label="Full Name"
                              type="text"
                              name="fullName"
                              value={contactForm.values.fullName}
                              onChange={(value, isValid) => {
                                contactForm.setValue('fullName', value);
                                if (!isValid) contactForm.setFieldTouched('fullName');
                              }}
                              error={contactForm.touched.fullName ? contactForm.errors.fullName : undefined}
                              required
                              maxLength={100}
                            />
                        </div>
                        <div>
                            <SecureInput
                              label="Business Email"
                              type="email"
                              name="email"
                              value={contactForm.values.email}
                              onChange={(value, isValid) => {
                                contactForm.setValue('email', value);
                                if (!isValid) contactForm.setFieldTouched('email');
                              }}
                              validation="email"
                              error={contactForm.touched.email ? contactForm.errors.email : undefined}
                              required
                              maxLength={254}
                            />
                        </div>
                        <div>
                            <SecureInput
                              label="Company"
                              type="text"
                              name="company"
                              value={contactForm.values.company}
                              onChange={(value, isValid) => {
                                contactForm.setValue('company', value);
                                if (!isValid) contactForm.setFieldTouched('company');
                              }}
                              error={contactForm.touched.company ? contactForm.errors.company : undefined}
                              required
                              maxLength={100}
                            />
                        </div>
                        <div>
                            <label htmlFor="companySize" className={formLabelClasses}>Company Size</label>
                            <select 
                              id="companySize" 
                              name="companySize"
                              value={contactForm.values.companySize} 
                              onChange={(e) => {
                                contactForm.setValue('companySize', e.target.value);
                                contactForm.setFieldTouched('companySize');
                              }}
                              required
                              className="w-full bg-graphite border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition"
                            >
                                <option value="">Select an option</option>
                                <option value="50-249">50-249 employees</option>
                                <option value="250-999">250-999 employees</option>
                                <option value="1k-5k">1,000-5,000 employees</option>
                                <option value="5k+">5,000+ employees</option>
                            </select>
                            {contactForm.touched.companySize && contactForm.errors.companySize && (
                              <p className="text-vital-red text-xs mt-1">{contactForm.errors.companySize}</p>
                            )}
                        </div>
                        <div className="pt-2">
                             <label className={formLabelClasses}>Interests</label>
                             <div className="grid grid-cols-2 gap-2 mt-2">
                                {["Pilot", "Bulk order", "Integrations", "Security review"].map(interest => (
                                    <label key={interest} className="flex items-center space-x-2 text-sm text-gray-300 cursor-pointer">
                                        <input 
                                          type="checkbox" 
                                          name="interests"
                                          id={`interest-${interest}`}
                                          value={interest}
                                          checked={contactForm.values.interests.includes(interest)} 
                                          onChange={() => handleInterestChange(interest)} 
                                          className="form-checkbox bg-graphite border-white/20 text-ocean-teal focus:ring-neon-cyan" 
                                        />
                                        <span>{interest}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                         <div>
                            <label htmlFor="message" className={formLabelClasses}>Message (Optional)</label>
                            <textarea 
                              id="message" 
                              name="message"
                              value={contactForm.values.message} 
                              onChange={(e) => contactForm.setValue('message', e.target.value)}
                              rows={3} 
                              maxLength={1000}
                              className="w-full bg-graphite border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition"
                            />
                            <div className="text-xs text-gray-500 mt-1 text-right">
                              {contactForm.values.message.length}/1000
                            </div>
                        </div>
                         <div className="pt-2">
                            <label className="flex items-center space-x-2 text-sm text-gray-400">
                                <input 
                                  type="checkbox" 
                                  name="consent"
                                  checked={contactForm.values.consent} 
                                  onChange={(e) => {
                                    contactForm.setValue('consent', e.target.checked);
                                    contactForm.setFieldTouched('consent');
                                  }}
                                  required
                                  className="form-checkbox bg-graphite border-white/20 text-ocean-teal focus:ring-neon-cyan"
                                />
                                <span>I agree to Sigma Life's terms and privacy policy.</span>
                            </label>
                             {contactForm.touched.consent && contactForm.errors.consent && (
                               <p className="text-vital-red text-xs mt-1">{contactForm.errors.consent}</p>
                             )}
                        </div>
                        <button type="submit" className="w-full bg-ocean-teal text-white font-semibold py-2.5 rounded-lg hover:bg-ocean-teal/90 transition">
                          {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
                        </button>
                    </form>
                ) : (
                    <form
                      name="waitlist"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      action="/thank-you.html"
                      className="p-6 space-y-4"
                      onSubmit={(e) => {
                        console.log('Waitlist form submitting to Netlify...');
                      }}
                    >
                        <input type="hidden" name="form-name" value="waitlist" />
                        <input type="hidden" name="_to" value="ab@sigmalife.io" />
                        <input type="hidden" name="_subject" value="🚀 New Waitlist Signup - Sigma Life" />
                        <p style={{ display: 'none' }}>
                          <label>
                            Don't fill this out if you're human: <input name="bot-field" />
                          </label>
                        </p>
                        <h3 className="text-lg font-bold text-white text-center">Join the Enterprise Waitlist</h3>
                        <p className="text-sm text-gray-400 text-center">Be the first to know when we expand our enterprise offerings.</p>
                         <div>
                            <SecureInput
                              label="Email Address"
                              type="email"
                              name="email"
                              value={waitlistForm.values.email}
                              onChange={(value, isValid) => {
                                waitlistForm.setValue('email', value);
                                if (!isValid) waitlistForm.setFieldTouched('email');
                              }}
                              validation="email"
                              error={waitlistForm.touched.email ? waitlistForm.errors.email : undefined}
                              required
                              maxLength={254}
                            />
                        </div>
                        <button type="submit" className="w-full bg-ocean-teal text-white font-semibold py-2.5 rounded-lg hover:bg-ocean-teal/90 transition">
                          {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
                        </button>
                    </form>
                )}
            </>
         )}
         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
         </button>
      </div>
    </div>
  );
};