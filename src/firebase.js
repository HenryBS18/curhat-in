import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC9jp0-ZuJRlKYJ_YVM1wSBU2_CIQ0Gw_U",
  authDomain: "curhat-in.firebaseapp.com",
  projectId: "curhat-in",
  storageBucket: "curhat-in.appspot.com",
  messagingSenderId: "1045452580923",
  appId: "1:1045452580923:web:8a552fbdf190857bbcd41e",
  measurementId: "G-WQ31HMH9GS"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);