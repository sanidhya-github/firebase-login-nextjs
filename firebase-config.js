// firebase-config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKkCRegazXJNCbwT0lpRKNuShl_542FUs",
  authDomain: "fir-login-project-63941.firebaseapp.com",
  projectId: "fir-login-project-63941",
  storageBucket: "fir-login-project-63941.firebasestorage.app",
  messagingSenderId: "300654767639",
  appId: "1:300654767639:web:af6f3f7e19690f66d3b652",
  measurementId: "G-2VP80LZQKN"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

console.log("Firebase initialized:", app.name);
