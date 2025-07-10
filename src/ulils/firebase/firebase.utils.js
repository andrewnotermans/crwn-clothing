import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCjXmM3kxxFPKnS72ljH-EFvyn9Appd0IM",
  authDomain: "crwn-clothing-db-1e5e6.firebaseapp.com",
  projectId: "crwn-clothing-db-1e5e6",
  storageBucket: "crwn-clothing-db-1e5e6.firebasestorage.app",
  messagingSenderId: "904806441737",
  appId: "1:904806441737:web:473372f20b52f16db969d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth, provider);