import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    TextareaStyled,
    TextareaNative,
    LabelWrapper,
    Label,
    Helper,
    ErrorMessage,
    RequiredSign,
    LabelRequiredWrapper,
    StartIcon,
    EndIcon,
} from './TextareaStyled'

const Textarea = props => {
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
            <TextareaStyled isValid={isValid} theme={props.theme} width={props.width} startIcon={props.startIcon} endIcon={props.endIcon}>
                {props.startIcon && <StartIcon icon={props.startIcon} theme={props.theme} isvalid={isValid.toString()} />}
                <TextareaNative
                    theme={props.theme}
                    onChange={e => {
                        if (!!props.onChange) props.onChange(e)
                        setIsValid(validate(props.validationRule, e.target.value, props.required, props.validate))
                    }}
                    type={props.type || 'text'}
                    value={props.value}
                />
                {props.endIcon && <EndIcon icon={props.endIcon} theme={props.theme} isvalid={isValid.toString()} />}
            </TextareaStyled>
            {(props.helper && isValid) && <Helper theme={props.theme} isValid={isValid}>{props.helper}</Helper>}
            {(props.errorMessage && !isValid) && <ErrorMessage theme={props.theme}>{props.errorMessage}</ErrorMessage>}
        </LabelWrapper>
    )
}

const validate = (regex, payload, isRequired, validateToParent = () => {}) => {
    if (payload === '' && isRequired) {
        validateToParent(false, payload)
        return false
    }
    if (payload === '' && !isRequired) {
        validateToParent(true, payload)
        return true
    }
    if (!regex) {
        validateToParent(true, payload)
        return true
    }
    const expression = new RegExp(regex)
    const isRegexValid = expression.test(payload)
    validateToParent(isRegexValid, payload)
    return isRegexValid
}

Textarea.propTypes = {
    label: PropTypes.string,
    theme: PropTypes.object.isRequired,
    required: PropTypes.bool,
    startIcon: PropTypes.object,
    endIcon: PropTypes.object,
    validationRule: PropTypes.func,
    validate: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
    helper: PropTypes.string,
    errorMessage: PropTypes.string,
    width: PropTypes.string,
    value: PropTypes.string,
}
Textarea.defaultProps = {
    label: null,
    required: false,
    startIcon: null,
    endIcon: null,
    validationRule: undefined,
    validate: undefined,
    type: null,
    helper: null,
    errorMessage: null,
}

export default Textarea

