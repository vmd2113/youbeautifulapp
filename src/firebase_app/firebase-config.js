// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCGPjNck27rAdn9bG6l_sug3Tq9PbNMwA",
    authDomain: "zestaroma-6b838.firebaseapp.com",
    projectId: "zestaroma-6b838",
    storageBucket: "zestaroma-6b838.appspot.com",
    messagingSenderId: "329780416213",
    appId: "1:329780416213:web:e060ce3fd09ddfd81d1c5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
