import React from 'react';
import Input from '../components/Input'
import THEME from '../constants/theme'
import { faPhoneAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Input',
  component: Input,
}

export const Default = () => <Input theme={THEME.LIGHT} />
export const withLabel = () => <Input label="Password" theme={THEME.LIGHT} />
export const withHelper = () => <Input label="Age" helper="Only numbers allowed" type="number" theme={THEME.LIGHT} />
export const withValidationRule = () => <Input label="Name" validationRule="^[a-zA-Z]+$" errorMessage="No numbers allowed" theme={THEME.LIGHT} />
export const required = () => <Input label="Name" required theme={THEME.LIGHT} validate={isValid => console.log(isValid)} />
export const withStartIcon = () => <Input startIcon={faSearch} theme={THEME.LIGHT} />
export const withEndIcon = () => <Input endIcon={faPhoneAlt} theme={THEME.LIGHT} />

export const Full = () => 
  <Input
    theme={THEME.LIGHT}
    label="Name"
    helper="What should I call you?"
    validationRule="^[a-zA-Z]+$"
    errorMessage="No numbers allowed"
    required
    startIcon={faUser}
    endIcon={faPhoneAlt}
    width="300px"
    validate={isValid => console.log(isValid)}
  />