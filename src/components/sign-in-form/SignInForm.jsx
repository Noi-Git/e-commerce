import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'
import './sign-in-form.styles.scss'
import Button from '../button/Button'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  console.log(formFields)

  const handleChange = (event) => {
    const { name, value } = event.target
    // make the function generic -- destructure the name of the event
    // "name" is use for telling setState -- which field should be updated

    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      resetFormFields()
    } catch (error) {}
  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <Button type='submit'>Sign In</Button>
      </form>
    </div>
  )
}

export default SignInForm
