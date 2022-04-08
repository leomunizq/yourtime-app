import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import {getAuth} from'firebase/auth'
// import { initializeApp } from 'firebase/app';

// import {
//   onSnapshot,
//   doc,
// } from 'firebase/firestore';


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

const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app);
export default firebase