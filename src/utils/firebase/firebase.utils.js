import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc }from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () =>signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log('user snapshot', userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch(error) {
      console.log('error creating the user', error.message)
    }

    return userDocRef;
  }
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>{ 
  onAuthStateChanged(auth, callback);
}