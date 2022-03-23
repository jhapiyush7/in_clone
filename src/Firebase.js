// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBoq92QTXWmtiQDMdAbfjmOAYfo-iZdswU",
  authDomain: "in-clone-aa800.firebaseapp.com",
  projectId: "in-clone-aa800",
  storageBucket: "in-clone-aa800.appspot.com",
  messagingSenderId: "623095955977",
  appId: "1:623095955977:web:3fcc4671d6e39d9a9aaed8",
  measurementId: "G-G2C0WPZ6DQ",
};
const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);

export {db,auth};


