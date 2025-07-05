import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDtvg89B0lQWM1706tdVxmgim787qDCPaI",
  authDomain: "wealthihq-marketting.firebaseapp.com",
  projectId: "wealthihq-marketting",
  storageBucket: "wealthihq-marketting.firebasestorage.app",
  messagingSenderId: "1017450876167",
  appId: "1:1017450876167:web:1c11990a6cef039b7309a2",
  measurementId: "G-WZ930Q5GZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;