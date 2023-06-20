import './form-input.style.scss'

const FromInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {/* name="displayName" -- has to be the same as we have in the -- defaultFormFields */}
      <input className='form-input' {...otherProps} />
    </div>
  )
}

export default FromInput
