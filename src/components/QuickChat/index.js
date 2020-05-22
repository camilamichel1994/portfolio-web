import React from 'react'
import PropTypes from 'prop-types'
import {
    QuickChatStyled,
} from './QuickChatStyled'

const QuickChat = props => {
    
    return (
        <QuickChatStyled theme={props.theme} elevation={props.elevation}>
            
        </QuickChatStyled>
    )
}

QuickChat.propTypes = {
    theme: PropTypes.object.isRequired,
    elevation: PropTypes.string,
}

QuickChat.defaultProps = {
    elevation: '',
}

export default QuickChat

