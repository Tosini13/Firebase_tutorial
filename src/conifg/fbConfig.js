import firebase from 'firebase/app'
import 'firebase/firestore' //db
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBu_TlvtUVbzgZsosd8sHu39fYhWi2LFo8",
    authDomain: "marioplan-tutorial-f30f6.firebaseapp.com",
    databaseURL: "https://marioplan-tutorial-f30f6.firebaseio.com",
    projectId: "marioplan-tutorial-f30f6",
    storageBucket: "marioplan-tutorial-f30f6.appspot.com",
    messagingSenderId: "149869984525",
    appId: "1:149869984525:web:23273648945a0a67a7ce44",
    measurementId: "G-42ZG4C9SV7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true }); //change how firebase works with timestamps
firebase.firestore();
export default firebase;