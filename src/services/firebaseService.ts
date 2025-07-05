import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface WaitlistEntry {
  email: string;
  timestamp?: any;
  source: 'hero' | 'general';
  userAgent?: string;
  referrer?: string;
}

export interface ContactEntry {
  name: string;
  email: string;
  company?: string;
  investmentAmount?: string;
  message?: string;
  timestamp?: any;
  userAgent?: string;
  referrer?: string;
}

export const addToWaitlist = async (email: string, source: 'hero' | 'general' = 'general'): Promise<string> => {
  try {
    const waitlistEntry: WaitlistEntry = {
      email,
      timestamp: serverTimestamp(),
      source,
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    };

    const docRef = await addDoc(collection(db, 'waitlist'), waitlistEntry);
    console.log('Waitlist entry added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding to waitlist: ', error);
    throw new Error('Failed to join waitlist. Please try again.');
  }
};

export const submitContactForm = async (contactData: Omit<ContactEntry, 'timestamp' | 'userAgent' | 'referrer'>): Promise<string> => {
  try {
    const contactEntry: ContactEntry = {
      ...contactData,
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    };

    const docRef = await addDoc(collection(db, 'contacts'), contactEntry);
    console.log('Contact form submitted with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    throw new Error('Failed to submit contact form. Please try again.');
  }
};

// Utility function to validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility function to sanitize input
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};