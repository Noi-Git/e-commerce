import React from 'react'

const FromInput = ({ label, changeHandler, value }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>{label}</label>
        {/* name="displayName" -- has to be the same as we have in the -- defaultFormFields */}
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default FromInput
