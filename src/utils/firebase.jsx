// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "simple-you-tube.firebaseapp.com",
  projectId: "simple-you-tube",
  storageBucket: "simple-you-tube.appspot.com",
  messagingSenderId: "918555298185",
  appId: "1:918555298185:web:31c8d18cae5e77a6f93958",
  measurementId: "G-7MX2C0PVJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
