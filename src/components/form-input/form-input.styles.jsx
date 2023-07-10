import { styled } from "styled-components"

const SubColor = 'grey'
const MainColor = 'black'

export const ShrinkLabelStyles = styled.css`
top: -14px;
font-size: 12px;
color: ${MainColor};
`

export const FormInputLabel = styled.label`
color: ${SubColor};
font-size: 16px;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: 300ms ease all;

${({shrink}) => shrink && ShrinkLabelStyles}

`

export const FormInput = styled.input`
background: none;
    background-color: white;
    color: ${SubColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${SubColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabel} {
      ${ShrinkLabelStyles}
    }
`

.group {
  position: relative;
  margin: 45px 0;

  .form-input {
    
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      @include shrinkLabel();
    }
  }
}
