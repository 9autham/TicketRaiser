// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWkbFlfBj0jO866YI3feEi3mQTBysvblA",
  authDomain: "plantdieasesdetection.firebaseapp.com",
  projectId: "plantdieasesdetection",
  storageBucket: "plantdieasesdetection.appspot.com",
  messagingSenderId: "1004709252445",
  appId: "1:1004709252445:web:bddbc35001a9dbda67ecb4",
  measurementId: "G-N04WW12G18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);