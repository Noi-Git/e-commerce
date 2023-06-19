import { useState } from 'react'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  console.log(formFields)

  const handleChange = (event) => {
    const { name, value } = event.target
    // make the function generic -- destructure the name of the event
    // "name" is use for telling setState -- which field should be updated

    setFormFields({ ...formFields, [name]: value })
  }

  const onSubmitSignup = () => {}

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form
        onSubmit={() => {
          onSubmitSignup()
        }}
      >
        <label>Display Name</label>
        {/* name="displayName" -- has to be the same as we have in the -- defaultFormFields */}
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
          //value -- has to be exact of what we extract form -- formFields
        />
        <label>Email</label>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <label>Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
