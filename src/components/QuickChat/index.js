import React from 'react'
import PropTypes from 'prop-types'
import MessageItem from '../MessageItem'
import {
    QuickChatStyled,
    CardTitle,
    SeeMore,
    SeeMoreIcon,
    LinkStyled,
    MessageWrapper,
} from './QuickChatStyled'

const QuickChat = props => {
    
    return (
        <QuickChatStyled theme={props.theme} elevation={props.elevation}>
            <CardTitle theme={props.theme}>Messages</CardTitle>
            { renderMessages(props.theme) }
            <SeeMore theme={props.theme}>
                <LinkStyled to="/">
                    <SeeMoreIcon />
                    See more
                </LinkStyled>
            </SeeMore>
        </QuickChatStyled>
    )
}

const renderMessages = theme => {
    const messages = []
    people.forEach(p => {
        messages.push(
            <MessageWrapper theme={theme} key={p.id}>
                <MessageItem theme={theme} firstName={p.firstName} lastName={p.lastName} image={p.image} isOnline={p.isOnline} />
            </MessageWrapper>
        )
    })
    return messages
}

const people = [
    { id: 1, firstName: 'Kimberly', lastName: 'Matlock', image: 'https://www.fakepersongenerator.com/Face/female/female201710259538088.jpg', isOnline: true },
    { id: 2, firstName: 'Joey', lastName: 'Spiller', image: 'https://www.fakepersongenerator.com/Face/male/male1084942993347.jpg', isOnline: true },
    { id: 3, firstName: 'Amanda', lastName: 'Harper', image: 'https://www.fakepersongenerator.com/Face/female/female20171026152635986.jpg', isOnline: true },
    { id: 4, firstName: 'Christine', lastName: 'Tait', image: 'https://www.fakepersongenerator.com/Face/female/female20161025351109192.jpg', isOnline: true },
    { id: 5, firstName: 'Erica', lastName: 'Padilla', image: 'https://www.fakepersongenerator.com/Face/female/female20161024746835968.jpg', isOnline: false },
    { id: 6, firstName: 'Emily', lastName: 'Wentworth', image: 'https://www.fakepersongenerator.com/Face/female/female20151024067952575.jpg', isOnline: false },
]

QuickChat.propTypes = {
    theme: PropTypes.object.isRequired,
    elevation: PropTypes.string,
}

QuickChat.defaultProps = {
    elevation: '',
}

export default QuickChat
