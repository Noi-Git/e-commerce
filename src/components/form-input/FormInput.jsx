import { Group, Input, FormInputLabel } from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      {/* name="displayName" -- has to be the same as we have in the -- defaultFormFields */}
    </Group>
  )
}

export default FormInput
