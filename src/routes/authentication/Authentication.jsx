import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignInForm from '../../components/sign-in-form/SignInForm'

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    console.log(user)

    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sing In page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
