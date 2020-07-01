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
            { props.icon && 
                <Icon
                    title={props.title}
                    icon={props.icon}
                    color={props.color}
                    theme={props.theme}
                    outlined={props.outlined.toString()}
                    disabled={props.disabled}
                />
            }
        </ButtonStyled>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    theme: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    outlined: PropTypes.bool,
    color: PropTypes.string,
    small: PropTypes.bool,
    round: PropTypes.bool,
    icon: PropTypes.object,
}

Button.defaultProps = {
    title: null,
    disabled: false,
    outlined: false,
    color: null,
    small: false,
    round: false,
}

export default Button

