import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtUk8-GqkUklek2w8Qps8FnsrUBDEShb4",
  authDomain: "devmart-817d7.firebaseapp.com",
  projectId: "devmart-817d7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
