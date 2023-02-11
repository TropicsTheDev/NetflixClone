import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflix-clone-130ba.firebaseapp.com",
  projectId: "netflix-clone-130ba",
  storageBucket: "netflix-clone-130ba.appspot.com",
  messagingSenderId: "1005940792178",
  appId: "1:1005940792178:web:f4882ec0006725a7d65beb",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const fireAuth = getAuth();

export const auth = {
  fireAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
