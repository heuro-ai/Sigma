
import { ContactFormData, WaitlistFormData } from '../types';
import { SecurityUtils } from '../utils/security';

// This is a mock API service. In a real application, these functions
// would make HTTP requests to your backend API routes.

const MOCK_API_DELAY = 1000; // 1 second delay

export const submitContactForm = (data: ContactFormData): Promise<{ success: true }> => {
  // Security validation before submission
  if (!SecurityUtils.isValidEmail(data.email)) {
    return Promise.reject(new Error('Invalid email format'));
  }
  
  if (data.fullName.trim().length === 0 || data.company.trim().length === 0) {
    return Promise.reject(new Error('Required fields are missing'));
  }
  
  // For Netlify Forms, we'll let the form handle the submission
  // This function now just validates and allows the form to submit normally
  console.log('Contact Form Data Ready for Netlify Submission:', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Always resolve successfully as Netlify will handle the actual submission
      console.log('Form validation passed - ready for Netlify submission.');
      resolve({ success: true });
    }, MOCK_API_DELAY);
  });
};

export const submitWaitlistForm = (data: WaitlistFormData): Promise<{ success: true }> => {
  // Security validation
  if (!SecurityUtils.isValidEmail(data.email)) {
    return Promise.reject(new Error('Invalid email format'));
  }
  
  console.log('Waitlist Form Data Ready for Netlify Submission:', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Always resolve successfully as Netlify will handle the actual submission
      console.log('Waitlist form validation passed - ready for Netlify submission.');
      resolve({ success: true });
    }, MOCK_API_DELAY);
  });
};
