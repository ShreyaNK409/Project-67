import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDZqcR9kKaB-QgEn0yC15KJQtHl_G87xYM",
    authDomain: "teamvotingapp-e19cc.firebaseapp.com",
    databaseURL: "https://teamvotingapp-e19cc-default-rtdb.firebaseio.com",
    projectId: "teamvotingapp-e19cc",
    storageBucket: "teamvotingapp-e19cc.appspot.com",
    messagingSenderId: "1031497122137",
    appId: "1:1031497122137:web:14a9c924686c1413078c48"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();