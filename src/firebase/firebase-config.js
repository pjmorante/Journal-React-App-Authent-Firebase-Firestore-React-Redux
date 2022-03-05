import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg0ra5kIOPMWQGxxbpy9iuceSCANJWP6Q",
  authDomain: "react-apps-12a79.firebaseapp.com",
  projectId: "react-apps-12a79",
  storageBucket: "react-apps-12a79.appspot.com",
  messagingSenderId: "855509551264",
  appId: "1:855509551264:web:59eaba49471721d545e1c5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
