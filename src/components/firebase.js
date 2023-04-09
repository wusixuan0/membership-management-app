import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA6Ry9OH26voviibeu0-DR9sZmHJZ2-RgY",
  authDomain: "membership-management-ap-534ee.firebaseapp.com",
  projectId: "membership-management-ap-534ee",
  storageBucket: "membership-management-ap-534ee.appspot.com",
  messagingSenderId: "637328153417",
  appId: "1:637328153417:web:91eff3bd0239d06cd01898"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();