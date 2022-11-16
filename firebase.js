// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v4-ed226.firebaseapp.com",
  projectId: "twitter-v4-ed226",
  storageBucket: "twitter-v4-ed226.appspot.com",
  messagingSenderId: "89414745117",
  appId: "1:89414745117:web:5107fb8050c17dd2b21af4"
};

// Initialize Firebase
const app = !getApp().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()
export {app, db, storage}