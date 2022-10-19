// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-52zbaqkQzHl-xb49kxDUkua2AkDYf2w",
  authDomain: "securitymanagementapp.firebaseapp.com",
  projectId: "securitymanagementapp",
  storageBucket: "securitymanagementapp.appspot.com",
  messagingSenderId: "494528229914",
  appId: "1:494528229914:web:2e680d04282b4450c2d7a3",
  measurementId: "G-DRN46L5LP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db,};