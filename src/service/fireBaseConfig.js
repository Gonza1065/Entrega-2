import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCjd_a23sJ9DpDPKyE3GmV5KcZ5ivIM344",
  authDomain: "final-4c517.firebaseapp.com",
  projectId: "final-4c517",
  storageBucket: "final-4c517.appspot.com",
  messagingSenderId: "573240912126",
  appId: "1:573240912126:web:e67495194ba26ab3535daf",
};

const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app)