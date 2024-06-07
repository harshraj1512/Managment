// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcOVE_xPS0-Q6c_DFNW2VRhjAzVYWVqcI",
  authDomain: "mang-auth.firebaseapp.com",
  projectId: "mang-auth",
  storageBucket: "mang-auth.appspot.com",
  messagingSenderId: "635339099282",
  appId: "1:635339099282:web:2c98933c58f44a6b69aa4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;