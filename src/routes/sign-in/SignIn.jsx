import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  signInWithGooglePopup,
  singInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth)
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user)
    }
    console.log(response)
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    console.log(user)

    const userDocRef = await createUserDocumentFromAuth(user)
  }

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await singInWithGoogleRedirect()
  //   console.log(user)

  //   // const userDocRef = await createUserDocumentFromAuth(user)
  // }
  return (
    <div>
      <h1>Sing In page</h1>
      <button onClick={logGoogleUser}>Sing in wiht Google Popup</button>
      <button onClick={singInWithGoogleRedirect}>
        Sing in wiht Google Redirect
      </button>
    </div>
  )
}

export default SignIn
