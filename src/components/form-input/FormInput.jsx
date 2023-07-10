import {} from './form-input.styles.jsx'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
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
    </div>
  )
}

export default FormInput
