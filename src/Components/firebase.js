// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7GcSUeiQ_o0aBoVQ_JrO8cjTQNZDIBhM",
//   authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "palsfeed",
//   storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "833026027425",
  appId: "palsfeed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };