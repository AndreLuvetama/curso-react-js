// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQR7eZcNykmsWibxYO_8d3S4WcYY2Eps",
  authDomain: "miniblog-30f21.firebaseapp.com",
  projectId: "miniblog-30f21",
  storageBucket: "miniblog-30f21.appspot.com",
  messagingSenderId: "502521945649",
  appId: "1:502521945649:web:aaa82c188e4bce28873f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
const auth = getAuth(app);
 
export { db, auth };

