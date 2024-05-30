// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAFKBQtEt7yzCenaSxl2W_B1Uxvwar7KpU',
	authDomain: 'attendify-d1279.firebaseapp.com',
	projectId: 'attendify-d1279',
	storageBucket: 'attendify-d1279.appspot.com',
	messagingSenderId: '517147819042',
	appId: '1:517147819042:web:b5da7bfd8eb2b330f59e7b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
