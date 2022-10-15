import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_DB_URL,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
