import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './ButtonStyled'

const Button = props => {
    return (
        <ButtonStyled {...props}>
            { props.title }
        </ButtonStyled>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    outlined: PropTypes.bool,
    color: PropTypes.string,
    small: PropTypes.bool,
}

Button.defaultProps = {
    title: 'Button',
    disabled: false,
    outlined: false,
    color: null,
    small: false,
}

export default Button

