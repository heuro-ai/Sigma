
export type ModalType = 'contact' | 'waitlist';

export interface WaitlistFormData {
  email: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  companySize: '50-249' | '250-999' | '1k-5k' | '5k+' | '';
  role: string;
  interests: string[];
  message: string;
  consent: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  companySize?: string;
  role?: string;
  consent?: string;
  waitlistEmail?: string;
}

export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';
