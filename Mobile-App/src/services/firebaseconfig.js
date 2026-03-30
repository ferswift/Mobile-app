// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyDk1fwbR4YJTYHU-NzFKvzLWqnoCRgmbMA",
  authDomain: "react-native-app-a79c1.firebaseapp.com",
  projectId: "react-native-app-a79c1",
  storageBucket: "react-native-app-a79c1.firebasestorage.app",
  messagingSenderId: "967663267460",
  appId: "1:967663267460:web:5acc71f101e8822f00dcd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
