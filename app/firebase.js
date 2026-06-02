// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFpUejSvDUgNeTQ5SUNX_eB7fLZmquUJQ",
  authDomain: "math-ceeb8.firebaseapp.com",
  projectId: "math-ceeb8",
  storageBucket: "math-ceeb8.firebasestorage.app",
  messagingSenderId: "902658855290",
  appId: "1:902658855290:web:f7b3e5d6e6d8027836c6c3",
  measurementId: "G-5WVBKFJ7TW"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);