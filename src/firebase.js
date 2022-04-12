import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore'


export const auth = firebase.initializeApp({
   
  apiKey: "AIzaSyCiXe9cC5mxQkLgVi_qdf_TpNQ8p-4ReVw",
  authDomain: "orange-chat-3c8c4.firebaseapp.com",
  projectId: "orange-chat-3c8c4",
  storageBucket: "orange-chat-3c8c4.appspot.com",
  messagingSenderId: "897225761631",
  appId: "1:897225761631:web:5561f174106157ca118cea"
      
}).auth();



export const firestore = firebase.firestore();