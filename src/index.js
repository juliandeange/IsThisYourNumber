import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IsThisYourNumber from './IsThisYourNumber';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IsThisYourNumber />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMEXLQLdrwwyLHM5wC4Pyhf2KD32E5LWU",
    authDomain: "isthisyournumber-842a8.firebaseapp.com",
    projectId: "isthisyournumber-842a8",
    storageBucket: "isthisyournumber-842a8.appspot.com",
    messagingSenderId: "1069589150294",
    appId: "1:1069589150294:web:a619e55d50bb9a929899f7",
    measurementId: "G-VX0KN962C0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
