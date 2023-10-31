// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKlBRQSBCh3qZwXYWCVMjnKLCVhqXqmmM',
  authDomain: 'crwn-store-db-5789f.firebaseapp.com',
  projectId: 'crwn-store-db-5789f',
  storageBucket: 'crwn-store-db-5789f.appspot.com',
  messagingSenderId: '881339419450',
  appId: '1:881339419450:web:7d7a325178ad8010fa1e03',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// AUTH
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangeListener = (callback: NextOrObserver<User | null>) => onAuthStateChanged(auth, callback);

// FIRESTORE
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: {
  uid: string;
  displayName: string | null;
  email: string | null;
}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const { displayName, email } = userAuth;

  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAd: new Date(),
      });
    } catch (error) {
      console.log(error, 'Error creating user');
    }
  }

  return userDocRef;
};

