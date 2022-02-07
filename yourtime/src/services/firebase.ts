import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyAXIlWREt7weG9EQ9WJKBqmrGzKmMlY47I",
  authDomain: "yourtime-592f1.firebaseapp.com",
  projectId: "yourtime-592f1",
  storageBucket: "yourtime-592f1.appspot.com",
  messagingSenderId: "111412237057",
  appId: "1:111412237057:web:f6ba91614159d6c4b04100",
  measurementId: "G-7LVPG1LL6M"
};

//lembrar de colocar as chaves em ambiente local

firebase.initializeApp(firebaseConfig)

 const auth = firebase.auth();

 const database = firebase.database();

 export {firebase, auth, database}