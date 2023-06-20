import React from 'react'

const FromInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      {/* name="displayName" -- has to be the same as we have in the -- defaultFormFields */}
      <input {...otherProps} />
    </div>
  )
}

export default FromInput
