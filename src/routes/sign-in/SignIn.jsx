import {
  signInWithGooglePopup,
  singInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    console.log(user)

    const userDocRef = await createUserDocumentFromAuth(user)
  }

  const logGoogleRedirectUser = async () => {
    const { user } = await singInWithGoogleRedirect()
    console.log(user)

    // const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sing In page</h1>
      <button onClick={logGoogleUser}>Sing in wiht Google Popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sing in wiht Google Redirect
      </button>
    </div>
  )
}

export default SignIn
