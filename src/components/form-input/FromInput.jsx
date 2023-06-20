import React from 'react'

const FromInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      {/* name="displayName" -- has to be the same as we have in the -- defaultFormFields */}
      <input {...otherProps} />

      <button type='submit'>Sign Up</button>
    </div>
  )
}

export default FromInput
