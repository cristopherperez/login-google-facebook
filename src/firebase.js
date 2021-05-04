// ////////////
// const firebase = require("firebase/app");
// require("firebase/auth");
// require('firebase/firestore');
// require('firebase/storage');
/////////////


import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDeRf9c_akSg-7UJun_iiJM0fUqlZ1020o",
    authDomain: "facey-4a638.firebaseapp.com",
    projectId: "facey-4a638",
    storageBucket: "facey-4a638.appspot.com",
    messagingSenderId: "814116755563",
    appId: "1:814116755563:web:8f99ef40b31c8b660cf92e"
};
firebase.initializeApp(firebaseConfig);

////
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase
export { firebase, db, auth, storage }
//////////