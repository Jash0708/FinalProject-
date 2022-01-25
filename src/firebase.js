import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJmrogj3q1s1uOOgUL9d75Fjo6kbWhb0",
  authDomain: "clone-2ad2e.firebaseapp.com",
  projectId: "clone-2ad2e",
  storageBucket: "clone-2ad2e.appspot.com",
  messagingSenderId: "869287983007",
  appId: "1:869287983007:web:bece9ac1ab1e48f40d2faa",
  measurementId: "G-5HJ58JH7WW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };