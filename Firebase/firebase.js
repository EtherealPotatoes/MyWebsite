import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import * as Firestore from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZuSTAWWYwSgbvrVZDK8KC11ufSO54Ebw",
  authDomain: "summer-springboard-blog-c2d79.firebaseapp.com",
  projectId: "summer-springboard-blog-c2d79",
  storageBucket: "summer-springboard-blog-c2d79.appspot.com",
  messagingSenderId: "1057912413692",
  appId: "1:1057912413692:web:2418957ff08eb04dd6a679",
  measurementId: "G-FMEJDWV4TN"
};

const app = initializeApp(firebaseConfig);
export const db = Firestore.getFirestore(app);
export const firestore = Firestore;
