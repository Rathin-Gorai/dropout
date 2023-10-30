// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe48_u4M5cdwR63VvjdxkveBlVMDgzBMI",
  authDomain: "testing-40431.firebaseapp.com",
  projectId: "testing-40431",
  storageBucket: "testing-40431.appspot.com",
  messagingSenderId: "401451256828",
  appId: "1:401451256828:web:d342179e0e2ecbf9ba0079"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

