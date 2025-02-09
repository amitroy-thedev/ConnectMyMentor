import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDz_cFJqoi9vcyxuv4HuBGIbEw_mHuj3Fg",
    authDomain: "connect-my-mentor-16e47.firebaseapp.com",
    projectId: "connect-my-mentor-16e47",
    storageBucket: "connect-my-mentor-16e47.firebasestorage.app",
    messagingSenderId: "598343021618",
    appId: "1:598343021618:web:57b31954966b7b4f88b82b"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);