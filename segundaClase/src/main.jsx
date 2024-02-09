import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA91936D2GJVX8gq3JjxpsxkRPQzK_AtOM",
  authDomain: "prueba-primer-intento.firebaseapp.com",
  projectId: "prueba-primer-intento",
  storageBucket: "prueba-primer-intento.appspot.com",
  messagingSenderId: "1000991777062",
  appId: "1:1000991777062:web:c1e5f31b6ab3f25bab61e7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
