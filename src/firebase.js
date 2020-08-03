import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCld1OLsTA1wstt-H13xvovme7TIVR5RY4",
  authDomain: "clone-ca9ab.firebaseapp.com",
  databaseURL: "https://clone-ca9ab.firebaseio.com",
  projectId: "clone-ca9ab",
  storageBucket: "clone-ca9ab.appspot.com",
  messagingSenderId: "519084435340",
  appId: "1:519084435340:web:a0a1df3988164dae4518a9",
  measurementId: "G-RG0RCYMT5Y"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

// export {db,auth}; 

export {auth}; 