// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpVJRCkwGr1aw8x2FvQizl-tgwN7pbUmo",
  authDomain: "ema-john-auth-59.firebaseapp.com",
  projectId: "ema-john-auth-59",
  storageBucket: "ema-john-auth-59.appspot.com",
  messagingSenderId: "741307206198",
  appId: "1:741307206198:web:911781677d8ecae3fa6697",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
