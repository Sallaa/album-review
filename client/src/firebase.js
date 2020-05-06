// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMwluOFuw2JYdxiuQ9fFtpGqmfvSF6QiI",
    authDomain: "album-review-info1998.firebaseapp.com",
    databaseURL: "https://album-review-info1998.firebaseio.com",
    projectId: "album-review-info1998",
    storageBucket: "album-review-info1998.appspot.com",
    messagingSenderId: "560589081542",
    appId: "1:560589081542:web:e11902f36ce36a11ba40c7",
    measurementId: "G-1S0BQ9EDKJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

