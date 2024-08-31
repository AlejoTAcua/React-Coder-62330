import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBov9DoSuSrG34EUd0pUfumyZXQn_loPqs",
  authDomain: "comision-32330.firebaseapp.com",
  projectId: "comision-32330",
  storageBucket: "comision-32330.appspot.com",
  messagingSenderId: "1071073187570",
  appId: "1:1071073187570:web:b10e5c8895a584299ee26b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 