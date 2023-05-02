// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYZTQTuqFydiXpszEN6PpjPg4jnN5t2iE",
  authDomain: "recipe-project-c7fae.firebaseapp.com",
  projectId: "recipe-project-c7fae",
  storageBucket: "recipe-project-c7fae.appspot.com",
  messagingSenderId: "1010027351743",
  appId: "1:1010027351743:web:ada94272df1c180d54400a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;