// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN4UplpfCxLVpHQQS2-zLGQJ_xLLJigaA",
    authDomain: "ema-john-simple-824d0.firebaseapp.com",
    projectId: "ema-john-simple-824d0",
    storageBucket: "ema-john-simple-824d0.appspot.com",
    messagingSenderId: "723757508896",
    appId: "1:723757508896:web:f9cada3d11f0501e508f45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;