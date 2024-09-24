// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-8ed16.firebaseapp.com",
  projectId: "estate-8ed16",
  storageBucket: "estate-8ed16.appspot.com",
  messagingSenderId: "312977510461",
  appId: "1:312977510461:web:f3214e109e402f99901a54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
