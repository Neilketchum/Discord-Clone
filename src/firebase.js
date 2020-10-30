import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCy_xbAmhLRcviFkGueZIK4DyXRBn-Ufdc",
    authDomain: "discord-clone-cc902.firebaseapp.com",
    databaseURL: "https://discord-clone-cc902.firebaseio.com",
    projectId: "discord-clone-cc902",
    storageBucket: "discord-clone-cc902.appspot.com",
    messagingSenderId: "514316659855",
    appId: "1:514316659855:web:55cdf456557fc7863714fa",
    measurementId: "G-LLLMNKZB40"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;