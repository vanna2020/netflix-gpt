// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjaXJleJAJP9-e5IzNGhkaPQrdUxOkstk",
  authDomain: "netflixgpt-a8003.firebaseapp.com",
  projectId: "netflixgpt-a8003",
  storageBucket: "netflixgpt-a8003.appspot.com",
  messagingSenderId: "784735838905",
  appId: "1:784735838905:web:3420dd7b5b548ea9193168",
  measurementId: "G-6ZBS81V4JB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
