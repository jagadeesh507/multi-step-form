
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiB82DNNuBNx0omVnc_NGwC1NNF5K37dk",
  authDomain: "mutistepform.firebaseapp.com",
  projectId: "mutistepform",
  storageBucket: "mutistepform.appspot.com",
  messagingSenderId: "720422527284",
  appId: "1:720422527284:web:46681bbccc9dba57838561"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();