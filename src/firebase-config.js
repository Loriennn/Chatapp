// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdzaDumD_NllUP0L0bWDs4FbXhIM-tp4A",
  authDomain: "chatapp1-ba58d.firebaseapp.com",
  projectId: "chatapp1-ba58d",
  storageBucket: "chatapp1-ba58d.appspot.com",
  messagingSenderId: "749577493940",
  appId: "1:749577493940:web:75939e404393f11d0f26e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
