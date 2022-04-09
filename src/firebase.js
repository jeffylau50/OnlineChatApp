import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
   
    apiKey: "AIzaSyDmQPfG2OPwrwNnpUNa8y2c6AqksWe5sRQ",
    authDomain: "orangechat-ea880.firebaseapp.com",
    projectId: "orangechat-ea880",
    storageBucket: "orangechat-ea880.appspot.com",
    messagingSenderId: "27246837839",
    appId: "1:27246837839:web:bfa871a0bd1c3704822a3a"
      
}).auth();



