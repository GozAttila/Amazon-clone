import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcwANYWdN9IKBCK9Xx03MfALxU3gJyefI",
    authDomain: "clone-8e70a.firebaseapp.com",
    databaseURL: "https://clone-8e70a.firebaseio.com",
    projectId: "clone-8e70a",
    storageBucket: "clone-8e70a.appspot.com",
    messagingSenderId: "592606512545",
    appId: "1:592606512545:web:de9a34f386af9d762337e0",
    measurementId: "G-GJJVJPT6QN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
