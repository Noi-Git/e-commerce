import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBkUGEeMeAFSOqjh28KOSnCIJh1zoFd8rw',
  authDomain: 'noi-e-commerce-db.firebaseapp.com',
  projectId: 'noi-e-commerce-db',
  storageBucket: 'noi-e-commerce-db.appspot.com',
  messagingSenderId: '650095256826',
  appId: '1:650095256826:web:aa6f6ebfe962c16fab1543',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const singInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey) //the collectionKey is user or shop
  /*
  Yihua: 1000 => 900
  -100
  Andrei: 1000 => 1100
  +100
  */
  //use Batch to add object to the collection
  const batch = writeBatch(db)

  //create set event
  objectsToAdd.forEach((object) => {
    //get document refference
    const docRef = doc((collectionRef, object.title.toLowerCase()))
    batch.set(docRef, object)
  })
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return
  //if there is any existing document
  const userDocRef = doc(db, 'users', userAuth.uid)

  // console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot.exists())

  // if user data does not exist -- create set the document with data from user auth into our data collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      // console.log('error createing the user', error.message)
    }
  }
  // after check above -- and user exist -- yes -- return userDocRef
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
