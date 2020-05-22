import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    InputStyled,
    InputNative,
    LabelWrapper,
    Label,
    Helper,
    ErrorMessage,
    RequiredSign,
    LabelRequiredWrapper,
    StartIcon,
    EndIcon,
} from './InputStyled'

const Input = props => {
    const [isValid, setIsValid] = useState(true)

    return (
        <LabelWrapper>
            {props.label &&
                <LabelRequiredWrapper>
                    <Label theme={props.theme} isValid={isValid}>
                        {props.label}
                    </Label>
                    {props.required && <RequiredSign theme={props.theme}>*</RequiredSign>}
                </LabelRequiredWrapper>
            }
            <InputStyled isValid={isValid} {...props}>
                {props.startIcon && <StartIcon icon={props.startIcon} theme={props.theme} isvalid={isValid.toString()} />}
                <InputNative onChange={e => setIsValid(validate(props.validationRule, e.target.value, props.required, props.validate))} type={props.type || 'text'} />
                {props.endIcon && <EndIcon icon={props.endIcon} theme={props.theme} isvalid={isValid.toString()} />}
            </InputStyled>
            {(props.helper && isValid) && <Helper theme={props.theme} isValid={isValid}>{props.helper}</Helper>}
            {(props.errorMessage && !isValid) && <ErrorMessage theme={props.theme}>{props.errorMessage}</ErrorMessage>}
        </LabelWrapper>
    )
}

const validate = (regex, payload, isRequired, validateToParent = () => {}) => {
    if (payload === '' && isRequired) {
        validateToParent(false)
        return false
    }
    if (payload === '' && !isRequired) {
        validateToParent(true)
        return true
    }
    if (!regex) {
        validateToParent(true)
        return true
    }
    const expression = new RegExp(regex)
    const isRegexValid = expression.test(payload)
    validateToParent(isRegexValid)
    return isRegexValid
}

Input.propTypes = {}
Input.defaultProps = {}

export default Input

