import React from 'react';
import Textarea from '../components/Textarea'
import THEME from '../constants/theme'
import { faPhoneAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Textarea',
  component: Textarea,
}

export const Default = () => <Textarea theme={THEME.LIGHT} />
export const withLabel = () => <Textarea label="Password" theme={THEME.LIGHT} />
export const withHelper = () => <Textarea label="Age" helper="Only numbers allowed" type="number" theme={THEME.LIGHT} />
export const withValidationRule = () => <Textarea label="Name" validationRule="^[a-zA-Z]+$" errorMessage="No numbers allowed" theme={THEME.LIGHT} />
export const required = () => <Textarea label="Name" required theme={THEME.LIGHT} validate={isValid => console.log(isValid)} />
export const withStartIcon = () => <Textarea startIcon={faSearch} theme={THEME.LIGHT} />
export const withEndIcon = () => <Textarea endIcon={faPhoneAlt} theme={THEME.LIGHT} />

export const Full = () => 
  <Textarea
    theme={THEME.LIGHT}
    label="Name"
    helper="What should I call you?"
    validationRule="^[a-zA-Z]+$"
    errorMessage="Only characters from a-Z"
    required
    startIcon={faUser}
    endIcon={faPhoneAlt}
    width="300px"
    validate={isValid => console.log(isValid)}
  />