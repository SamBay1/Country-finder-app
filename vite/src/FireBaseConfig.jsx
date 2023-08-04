// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjbW0qbGptbSsfMfkD21UiIiytPj-8_mI',
  authDomain: 'country-app-b13c7.firebaseapp.com',
  projectId: 'country-app-b13c7',
  storageBucket: 'country-app-b13c7.appspot.com',
  messagingSenderId: '590812849470',
  appId: '1:590812849470:web:0e25a0293707f5c2d8386f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
