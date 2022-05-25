// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqFzf4kd_nuaVYh_ww17NDbFJeikWeiYA",
  authDomain: "netflix-clone-26209.firebaseapp.com",
  projectId: "netflix-clone-26209",
  storageBucket: "netflix-clone-26209.appspot.com",
  messagingSenderId: "148443499284",
  appId: "1:148443499284:web:4000a1e758098bf6729001",
  measurementId: "G-E8YH7MC52F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const analytics = getAnalytics(app);
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }