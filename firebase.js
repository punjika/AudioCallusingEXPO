// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoiqdqwgKJHiQBYdSxo5j8IsWH1iiShYY",
  authDomain: "audioapp-c8bff.firebaseapp.com",
  projectId: "audioapp-c8bff",
  storageBucket: "audioapp-c8bff.appspot.com",
  messagingSenderId: "349832067978",
  appId: "1:349832067978:web:ac8408c5b1f4839fb52673",
  measurementId: "G-7K9PMKE30D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});