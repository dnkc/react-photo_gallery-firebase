import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjeBqXlTiYoGtCTYSK9b04_e-tO4KWM3U",
    authDomain: "dk-photogallery.firebaseapp.com",
    databaseURL: "https://dk-photogallery.firebaseio.com",
    projectId: "dk-photogallery",
    storageBucket: "dk-photogallery.appspot.com",
    messagingSenderId: "169609228791",
    appId: "1:169609228791:web:541087fbe6f0bac3307ef2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();

  const projectFirestore = firebase.firestore();
  
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {projectFirestore, projectStorage, timestamp};