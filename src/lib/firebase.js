import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMtfU3mitbkVKFgC8GQimnWtFdSIEvuOo",
  authDomain: "properties-409ba.firebaseapp.com",
  projectId: "properties-409ba",
  storageBucket: "properties-409ba.firebasestorage.app",
  messagingSenderId: "719154995794",
  appId: "1:719154995794:web:d6c659832cf03c7627358b",
  measurementId: "G-PHNNG0R5YH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };