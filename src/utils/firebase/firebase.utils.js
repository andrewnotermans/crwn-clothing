import {initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCjXmM3kxxFPKnS72ljH-EFvyn9Appd0IM",
  authDomain: "crwn-clothing-db-1e5e6.firebaseapp.com",
  projectId: "crwn-clothing-db-1e5e6",
  storageBucket: "crwn-clothing-db-1e5e6.firebasestorage.app",
  messagingSenderId: "904806441737",
  appId: "1:904806441737:web:14288f78234a649fb969d8"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
