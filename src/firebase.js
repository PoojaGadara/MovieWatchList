// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfxj46-IM6DpC20ISD5EytDdc9DZEly0",
  authDomain: "reactauth-22055.firebaseapp.com",
  projectId: "reactauth-22055",
  storageBucket: "reactauth-22055.appspot.com",
  messagingSenderId: "269769553682",
  appId: "1:269769553682:web:fbe85b6c4b9a03cf0765cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const firestore = getFirestore(app)

export {
  auth ,
  firestore
}