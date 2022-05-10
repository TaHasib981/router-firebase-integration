// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSUZAfINfmAthNaXg3cbV4-rI0M8EqcHw",
  authDomain: "h-router-firebase-integration.firebaseapp.com",
  projectId: "h-router-firebase-integration",
  storageBucket: "h-router-firebase-integration.appspot.com",
  messagingSenderId: "659982677036",
  appId: "1:659982677036:web:06506bdfbeb371b4204d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 