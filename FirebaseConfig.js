// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDavfHwMTl5WdDOz5zUvgAKR1AryqXj75Y",
  authDomain: "studentforum-9fa63.firebaseapp.com",
  projectId: "studentforum-9fa63",
  storageBucket: "studentforum-9fa63.firebasestorage.app",
  messagingSenderId: "263794848209",
  appId: "1:263794848209:web:c042b6d5e3d5ac783f30f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)