import React from 'react'
import PropTypes from 'prop-types'
import {
    ButtonStyled,
    Icon,
} from './ButtonStyled'

const Button = props => {
    return (
        <ButtonStyled {...props}>
            { props.title }
            { props.icon && <Icon icon={props.icon}  />}
        </ButtonStyled>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    outlined: PropTypes.bool,
    color: PropTypes.string,
    small: PropTypes.bool,
    round: PropTypes.bool,
    icon: PropTypes.object,
}

Button.defaultProps = {
    title: 'Button',
    disabled: false,
    outlined: false,
    color: null,
    small: false,
    round: false,
}

export default Button

