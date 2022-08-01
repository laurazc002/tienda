// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-5Z6EH8rmvtOjwymAM_plkoOuPjfCm2o",
  authDomain: "tiendatcc-bccd5.firebaseapp.com",
  projectId: "tiendatcc-bccd5",
  storageBucket: "tiendatcc-bccd5.appspot.com",
  messagingSenderId: "1070132159978",
  appId: "1:1070132159978:web:ac1d3aec1ec132d6173e93",
  measurementId: "G-DXXJ0K3B37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

