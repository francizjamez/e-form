import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5p8dFEp3nMFyHYClJYpKUERQa6qJY_Hc",
  authDomain: "e-forms-e94da.firebaseapp.com",
  projectId: "e-forms-e94da",
  storageBucket: "e-forms-e94da.appspot.com",
  messagingSenderId: "871670742426",
  appId: "1:871670742426:web:92178f98479ea3a4ca8e23",
  measurementId: "G-XQD38BBT31",
};

export const initializeFirebase = () => {
  if (!firebase.app) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const addDataToFireStore = (data) => {
  const firestore = firebase.firestore();
  firestore.collection("forms").add(data);
};
