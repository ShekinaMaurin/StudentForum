import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAKkSZf6ziWZ27FSPpgSAE4jEzEo4tXROw",
  authDomain: "studentforums-46998.firebaseapp.com",
  projectId: "studentforums-46998",
  storageBucket: "studentforums-46998.firebasestorage.app",
  messagingSenderId: "179823711737",
  appId: "1:179823711737:web:b6b1713d88b8bea0531928"
};


const app = initializeApp(firebaseConfig);

// ✅ Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);