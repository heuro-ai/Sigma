
import React, { useState, useEffect, useCallback } from 'react';
import { ModalType, ContactFormData, WaitlistFormData, FormErrors, SubmissionStatus } from '../types';
import { submitContactForm, submitWaitlistForm } from '../services/api';

interface ContactModalProps {
  initialMode: ModalType;
  onClose: () => void;
}

const formInputClasses = "w-full bg-graphite border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition";
const formLabelClasses = "block text-sm font-medium text-gray-300 mb-1";

export const ContactModal: React.FC<ContactModalProps> = ({ initialMode, onClose }) => {
  const [mode, setMode] = useState<ModalType>(initialMode);
  const [contactData, setContactData] = useState<ContactFormData>({
    fullName: '', email: '', company: '', companySize: '', role: '', interests: [], message: '', consent: false
  });
  const [waitlistData, setWaitlistData] = useState<WaitlistFormData>({ email: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
        setContactData(prev => ({ ...prev, [name]: e.target.checked }));
    } else {
        setContactData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setContactData(prev => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: newInterests };
    });
  };

  const validateContactForm = useCallback(() => {
    const newErrors: FormErrors = {};
    if (!contactData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!contactData.email.trim()) newErrors.email = 'Business email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) newErrors.email = 'Invalid email format';
    if (!contactData.company.trim()) newErrors.company = 'Company name is required';
    if (!contactData.companySize) newErrors.companySize = 'Please select a company size';
    if (!contactData.consent) newErrors.consent = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [contactData]);
  
  const validateWaitlistForm = useCallback(() => {
    const newErrors: FormErrors = {};
    if (!waitlistData.email.trim()) newErrors.waitlistEmail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(waitlistData.email)) newErrors.waitlistEmail = 'Invalid email format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [waitlistData]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContactForm()) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      await submitContactForm(contactData);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
    }
  };
  
  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateWaitlistForm()) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      await submitWaitlistForm(waitlistData);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
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
                    <form onSubmit={handleContactSubmit} className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
                        <div>
                            <label htmlFor="fullName" className={formLabelClasses}>Full Name</label>
                            <input type="text" id="fullName" name="fullName" value={contactData.fullName} onChange={handleContactChange} className={formInputClasses} />
                            {errors.fullName && <p className="text-vital-red text-xs mt-1">{errors.fullName}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className={formLabelClasses}>Business Email</label>
                            <input type="email" id="email" name="email" value={contactData.email} onChange={handleContactChange} className={formInputClasses} />
                             {errors.email && <p className="text-vital-red text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="company" className={formLabelClasses}>Company</label>
                            <input type="text" id="company" name="company" value={contactData.company} onChange={handleContactChange} className={formInputClasses} />
                            {errors.company && <p className="text-vital-red text-xs mt-1">{errors.company}</p>}
                        </div>
                        <div>
                            <label htmlFor="companySize" className={formLabelClasses}>Company Size</label>
                            <select id="companySize" name="companySize" value={contactData.companySize} onChange={handleContactChange} className={formInputClasses}>
                                <option value="">Select an option</option>
                                <option value="50-249">50-249 employees</option>
                                <option value="250-999">250-999 employees</option>
                                <option value="1k-5k">1,000-5,000 employees</option>
                                <option value="5k+">5,000+ employees</option>
                            </select>
                            {errors.companySize && <p className="text-vital-red text-xs mt-1">{errors.companySize}</p>}
                        </div>
                        <div className="pt-2">
                             <label className={formLabelClasses}>Interests</label>
                             <div className="grid grid-cols-2 gap-2 mt-2">
                                {["Pilot", "Bulk order", "Integrations", "Security review"].map(interest => (
                                    <label key={interest} className="flex items-center space-x-2 text-sm text-gray-300 cursor-pointer">
                                        <input type="checkbox" checked={contactData.interests.includes(interest)} onChange={() => handleInterestChange(interest)} className="form-checkbox bg-graphite border-white/20 text-ocean-teal focus:ring-neon-cyan" />
                                        <span>{interest}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                         <div>
                            <label htmlFor="message" className={formLabelClasses}>Message (Optional)</label>
                            <textarea id="message" name="message" value={contactData.message} onChange={handleContactChange} rows={3} className={formInputClasses}></textarea>
                        </div>
                         <div className="pt-2">
                            <label className="flex items-center space-x-2 text-sm text-gray-400">
                                <input type="checkbox" name="consent" checked={contactData.consent} onChange={handleContactChange} className="form-checkbox bg-graphite border-white/20 text-ocean-teal focus:ring-neon-cyan"/>
                                <span>I agree to Sigma Life's terms and privacy policy.</span>
                            </label>
                             {errors.consent && <p className="text-vital-red text-xs mt-1">{errors.consent}</p>}
                        </div>
                        <button type="submit" disabled={status === 'loading'} className="w-full bg-ocean-teal text-white font-semibold py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                          {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleWaitlistSubmit} className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-white text-center">Join the Enterprise Waitlist</h3>
                        <p className="text-sm text-gray-400 text-center">Be the first to know when we expand our enterprise offerings.</p>
                         <div>
                            <label htmlFor="waitlistEmail" className={formLabelClasses}>Email Address</label>
                            <input type="email" id="waitlistEmail" value={waitlistData.email} onChange={(e) => setWaitlistData({email: e.target.value})} className={formInputClasses} />
                            {errors.waitlistEmail && <p className="text-vital-red text-xs mt-1">{errors.waitlistEmail}</p>}
                        </div>
                        <button type="submit" disabled={status === 'loading'} className="w-full bg-ocean-teal text-white font-semibold py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </form>
                )}
                 {status === 'error' && <div className="p-6 pt-0 text-center text-vital-red text-sm">{errorMessage}</div>}
            </>
         )}
         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
         </button>
      </div>
    </div>
  );
};
