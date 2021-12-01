import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD7Y6VDqBoMsHLLIzPB3uoPl80eL_vOOqY",
    authDomain: "login-context.firebaseapp.com",
    projectId: "login-context",
    storageBucket: "login-context.appspot.com",
    messagingSenderId: "995622458832",
    appId: "1:995622458832:web:7c4bdf1139777effa355d5"
  };

  firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const provedor={
  google: new firebase.auth.GoogleAuthProvider(),
  // email: new firebase.auth.signInWithEmailAndPassword() 
}


export {
    db,
    firebase,
    provedor
}