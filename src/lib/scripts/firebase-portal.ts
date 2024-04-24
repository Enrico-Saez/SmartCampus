// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_NxwGmupR6lPsfmXU8Cqy9Bl-TwkRNM0",
  authDomain: "smartcampus-portal.firebaseapp.com",
  projectId: "smartcampus-portal",
  storageBucket: "smartcampus-portal.appspot.com",
  messagingSenderId: "7331500148",
  appId: "1:7331500148:web:b388f097ce7f662e940121"
};

// Initialize Firebase
let firebasePortal;
if (!getApps().length) {
  firebasePortal = initializeApp(firebaseConfig, 'Portal')
} else {
  firebasePortal = getApp()
  deleteApp(firebasePortal)
  firebasePortal = initializeApp(firebaseConfig, 'Portal')
}

export const auth = getAuth(firebasePortal)
console.log(auth.config.sdkClientVersion);
setPersistence(auth, browserLocalPersistence)