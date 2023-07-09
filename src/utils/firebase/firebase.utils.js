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
  query,
  getDocs,
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db)
  const collectionRef = collection(db, collectionKey)

  objectsToAdd.forEach((object) => {
    //object comes from data in shop-data
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object) //set docRef data to the value in object
  })

  await batch.commit()
  console.log('done')
}

//retrive data from the database in the Firestore
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  //this is important for frontend in all framework to retrive data from database
  const querySnapshort = await getDocs(q)
  // querySnapshort.docs
  // -- will give us an array of all of the individual documents inside
  //-- to create the structure below
  const categoryMap = querySnapshort.docs.reduce((acc, doc) => {}, {})
}

/*
{
  hats: {
    title: 'Hats',
    items: [ {}, {}]
  },
    sneakers: {
    title: 'Hats',
    items: [ {}, {}]
  }
}
*/

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
