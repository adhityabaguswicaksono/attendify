// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlLyyqqFtq-1NNhGkREkmlOKmaUNK9Jr8",
  authDomain: "attendify-2db82.firebaseapp.com",
  projectId: "attendify-2db82",
  storageBucket: "attendify-2db82.appspot.com",
  messagingSenderId: "766413434574",
  appId: "1:766413434574:web:262af2e8b1711f9390ea9f",
  measurementId: "G-ETQKLLTYZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth };
export default app;
