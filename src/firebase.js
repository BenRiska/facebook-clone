import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1N8NPERXn4MOxEROGZ97yWAzCnrlQFAA",
  authDomain: "fb-clone-138e6.firebaseapp.com",
  databaseURL: "https://fb-clone-138e6.firebaseio.com",
  projectId: "fb-clone-138e6",
  storageBucket: "fb-clone-138e6.appspot.com",
  messagingSenderId: "446881222832",
  appId: "1:446881222832:web:94cb61fdf99e646ed4ab75",
  measurementId: "G-2Q8E91RRM4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
