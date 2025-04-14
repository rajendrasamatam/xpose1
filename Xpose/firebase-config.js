// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration (Replace with your actual credentials)
const firebaseConfig = {
    apiKey: "AIzaSyDCCTnqO99HZ7Aw0jjn5AekOC12QX2LH5Q",
    authDomain: "xpose-4452f.firebaseapp.com",
    projectId: "xpose-4452f",
    storageBucket: "xpose-4452f.firebasestorage.app",
    messagingSenderId: "326293598496",
    appId: "1:326293598496:web:07ca208569bd132c436745",
    measurementId: "G-YD7RP953G5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in other files
export { auth };
