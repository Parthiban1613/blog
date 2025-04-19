
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDVXOM4itXUjDl4TfkluVbRxvqZJJ0osnc",
  authDomain: "blog-app-c5ed5.firebaseapp.com",
  projectId: "blog-app-c5ed5",
  storageBucket: "blog-app-c5ed5.firebasestorage.app",
  messagingSenderId: "504076195710",
  appId: "1:504076195710:web:f09125d526ddb4339fc52f",
  measurementId: "G-57NCJBTCF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
 