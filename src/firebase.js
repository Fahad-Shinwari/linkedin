import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAJEy4fTEw-e7JsJc5o9RPw4_Sl-UFXrns",
    authDomain: "linkedin-6463a.firebaseapp.com",
    projectId: "linkedin-6463a",
    storageBucket: "linkedin-6463a.appspot.com",
    messagingSenderId: "1083593623660",
    appId: "1:1083593623660:web:1990a3c3dab60e90323049"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };