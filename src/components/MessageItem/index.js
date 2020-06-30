import React from 'react'
import PropTypes from 'prop-types'
import {
    MessageItemStyled,
    ProfileImage,
    NameImageWrapper,
    Name,
    Online,
    Text,
    NameTextWrapper,
} from './MessageItemStyled'

const MessageItem = props => {
    return (
        <MessageItemStyled>
            <NameImageWrapper>
                <ProfileImage image={props.image} />
                <NameTextWrapper>
                    <Name theme={props.theme}>{props.firstName} {props.lastName}</Name>
                    <Text theme={props.theme}>{props.text}</Text>
                </NameTextWrapper>
            </NameImageWrapper>
            {props.isOnline && <Online theme={props.theme} />}
        </MessageItemStyled>
    )
}

MessageItem.propTypes = {
    theme: PropTypes.object.isRequired,
    isOnline: PropTypes.bool,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

MessageItem.defaultTypes = {
    isOnline: false,
}

export default MessageItem

