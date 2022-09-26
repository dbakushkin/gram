// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw0Pe608EtvCc4P2ehNzCE4uWZgUz45FQ",
  authDomain: "instagramchik-2022.firebaseapp.com",
  projectId: "instagramchik-2022",
  storageBucket: "instagramchik-2022.appspot.com",
  messagingSenderId: "467816724978",
  appId: "1:467816724978:web:3c334d4abffa8ce93fd36b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
