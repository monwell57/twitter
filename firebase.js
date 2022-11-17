// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "newtwitterclone-f97cd.firebaseapp.com",
  projectId: "newtwitterclone-f97cd",
  storageBucket: "newtwitterclone-f97cd.appspot.com",
  messagingSenderId: "3919642077",
  appId: "1:3919642077:web:4cf7e03ba9bc2006254a34"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };

