import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuY0aUp2yleycvMseVtyZgbHh8iwhmsYM",
  authDomain: "video-dce1a.firebaseapp.com",
  projectId: "video-dce1a",
  storageBucket: "video-dce1a.appspot.com",
  messagingSenderId: "554679224761",
  appId: "1:554679224761:web:e7a7b377aed45f1e95ce68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app