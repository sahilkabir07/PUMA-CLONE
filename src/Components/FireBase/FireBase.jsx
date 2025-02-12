import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvQE_zxy-RHiZCQas8OISbIY1hpZOlzDQ",
  authDomain: "puma-clone-d0c84.firebaseapp.com",
  projectId: "puma-clone-d0c84",
  storageBucket: "puma-clone-d0c84.firebasestorage.app",
  messagingSenderId: "1090366113448",
  appId: "1:1090366113448:web:9f43a10d4b4044183f249d",
  measurementId: "G-T14EKJV56D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
