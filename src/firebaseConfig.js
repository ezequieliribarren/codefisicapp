// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyC-E1G1GmOSXWiRadD9XH_wPKfNtNDSa24",
  authDomain: "codefisicapp.firebaseapp.com",
  projectId: "codefisicapp",
  storageBucket: "codefisicapp.appspot.com",
  messagingSenderId: "152845634793",
  appId: "1:152845634793:web:e494570a21a66240e87478",
  measurementId: "G-HCJ16Q721N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
