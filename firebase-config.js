import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/fire";

const firebaseConfig = {
  apiKey: "AIzaSyBFCkkYZQP-soJXjFKVoe5ffXGNOjCnV8g",
  authDomain: "edcelljuetguna.firebaseapp.com",
  projectId: "edcelljuetguna",
  storageBucket: "edcelljuetguna.appspot.com",
  messagingSenderId: "199324652269",
  appId: "1:199324652269:web:905f270d03c842bc2232e4",
  measurementId: "G-S488F0HX14",
};

const app = initializeApp(firebaseConfig);

export default db = getFireStore(app);
