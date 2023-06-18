import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
  }

  return (
    <div>
      <h1>Sing In page</h1>
      <button onClick={logGoogleUser}>Sing in wiht Google Popup</button>
    </div>
  )
}

export default SignIn
