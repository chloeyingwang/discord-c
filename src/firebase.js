import firebase from "firebase";
require("dotenv").config();

const firebaseConfig = {
    apiKey: 'AIzaSyC4feySU70N7XJZE6pXOBbGaKrzyWpoM3U',
    authDomain: 'discordc-e118f.firebaseapp.com',
    projectId: "discordc-e118f",
    storageBucket: "discordc-e118f.appspot.com",
    messagingSenderId: '657389781336',
    appId: '1:657389781336:web:63f035c9d46d8ddd37e52d'
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;