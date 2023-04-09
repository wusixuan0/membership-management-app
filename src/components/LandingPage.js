import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from "../firebase.js";

db.collection("classes").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});

export default function LandingPage() {
  const [classes, setClasses] = useState([]);
  
  // Your code to fetch classes data from Firestore goes here
  
  return (
    <div>
      <h1>Skating Classes</h1>
      <ul>
        {classes.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Date: {item.startDate.toDate().toLocaleDateString()}</p>
            <p>Time: {item.startTime.toDate().toLocaleTimeString()} - {item.endTime.toDate().toLocaleTimeString()}</p>
            <button>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

