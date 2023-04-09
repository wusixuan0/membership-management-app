import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6Ry9OH26voviibeu0-DR9sZmHJZ2-RgY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "membership-management-ap-534ee",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();