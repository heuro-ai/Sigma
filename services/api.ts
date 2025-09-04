
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
  
  // Sanitize data
  const sanitizedData = {
    ...data,
    fullName: SecurityUtils.sanitizeInput(data.fullName),
    email: SecurityUtils.sanitizeInput(data.email),
    company: SecurityUtils.sanitizeInput(data.company),
    role: SecurityUtils.sanitizeInput(data.role),
    message: SecurityUtils.sanitizeInput(data.message)
  };
  
  console.log('Submitting Contact Form:', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random failure
      if (Math.random() < 0.1) {
        console.error('Mock API Error: Failed to submit contact form.');
        reject(new Error('Failed to submit form. Please try again.'));
      } else {
        console.log('Mock API Success: Contact form submitted.');
        resolve({ success: true });
      }
    }, MOCK_API_DELAY);
  });
};

export const submitWaitlistForm = (data: WaitlistFormData): Promise<{ success: true }> => {
  // Security validation
  if (!SecurityUtils.isValidEmail(data.email)) {
    return Promise.reject(new Error('Invalid email format'));
  }
  
  const sanitizedData = {
    email: SecurityUtils.sanitizeInput(data.email)
  };
  
  console.log('Submitting Waitlist Form:', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate email already exists error
      if (data.email === 'duplicate@example.com') {
          console.error('Mock API Error: Email already on waitlist.');
          reject(new Error('This email is already on the waitlist.'));
      } else if (Math.random() < 0.1) {
        console.error('Mock API Error: Failed to submit waitlist form.');
        reject(new Error('Failed to join waitlist. Please try again.'));
      } else {
        console.log('Mock API Success: Waitlist form submitted.');
        resolve({ success: true });
      }
    }, MOCK_API_DELAY);
  });
};
