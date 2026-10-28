// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// we import the getauth from the firebase
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-f42fb.firebaseapp.com",
  projectId: "genwebai-f42fb",
  storageBucket: "genwebai-f42fb.firebasestorage.app",
  messagingSenderId: "417896303134",
  appId: "1:417896303134:web:649f014cdcee7b4f287c0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//we make the auth 
const auth = getAuth(app);
// here we write the provider we want to connect with my website
const provider = new GoogleAuthProvider();


export{auth,provider};
