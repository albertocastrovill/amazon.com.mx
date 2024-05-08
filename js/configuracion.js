import firebase from "firebase/compat/app";
  // Required for side-effects
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDg8MakUCFHb7jM5iUZT1AlmjeJnDzL-OA",
    authDomain: "fir-89c9f.firebaseapp.com",
    projectId: "fir-89c9f",
    storageBucket: "fir-89c9f.appspot.com",
    messagingSenderId: "329196471488",
    appId: "1:329196471488:web:d18dc0d24ae42b6afb9925",
    measurementId: "G-6RNNHNRYGT"
  };

  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

