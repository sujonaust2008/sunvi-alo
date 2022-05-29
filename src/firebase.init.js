// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfsKPjIyo88P9i-V10AgCdoVZGaDmUAnw",
  authDomain: "sunvi-alo.firebaseapp.com",
  projectId: "sunvi-alo",
  storageBucket: "sunvi-alo.appspot.com",
  messagingSenderId: "44774957231",
  appId: "1:44774957231:web:83289eeb694afeaf53745a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;