// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDe4cq3wp5i5nEzAhrPtnCnL4ppofGIiO4',
  authDomain: 'fir-chat-9d54e.firebaseapp.com',
  databaseURL:
    'https://fir-chat-9d54e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-chat-9d54e',
  storageBucket: 'fir-chat-9d54e.appspot.com',
  messagingSenderId: '318919613923',
  appId: '1:318919613923:web:43a03d362b454ae02694d6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
