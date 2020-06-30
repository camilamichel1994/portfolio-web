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
                <MessageItem
                    theme={theme}
                    firstName={p.firstName}
                    lastName={p.lastName}
                    image={p.image}
                    isOnline={p.isOnline}
                    text={p.text}
                />
            </MessageWrapper>
        )
    })
    return messages
}

const people = [
    { id: 1, firstName: 'Kimberly', lastName: 'Matlock', image: 'https://www.fakepersongenerator.com/Face/female/female201710259538088.jpg', isOnline: true, text: "Lorem ipsum dolor sit amet" },
    { id: 2, firstName: 'Joey', lastName: 'Spiller', image: 'https://www.fakepersongenerator.com/Face/male/male1084942993347.jpg', isOnline: true, text: "consectetur adipiscing elit." },
    { id: 3, firstName: 'Amanda', lastName: 'Harper', image: 'https://www.fakepersongenerator.com/Face/female/female20171026152635986.jpg', isOnline: true, text: "Quisque porta leo sit amet" },
    // { id: 4, firstName: 'Christine', lastName: 'Tait', image: 'https://www.fakepersongenerator.com/Face/female/female20161025351109192.jpg', isOnline: true, text: "nec porta justo pellentesque." },
    // { id: 5, firstName: 'Erica', lastName: 'Padilla', image: 'https://www.fakepersongenerator.com/Face/female/female20161024746835968.jpg', isOnline: false, text: "Curabitur sagittis maximus" },
    { id: 6, firstName: 'Emily', lastName: 'Wentworth', image: 'https://www.fakepersongenerator.com/Face/female/female20151024067952575.jpg', isOnline: false, text: "lacus et molestie." },
    { id: 7, firstName: 'Noelle', lastName: 'Greer', image: 'https://www.fakepersongenerator.com/Face/female/female20161025677362915.jpg', isOnline: true, text: "Lorem ipsum dolor sit amet" },
    { id: 8, firstName: 'Rachel', lastName: 'Owens', image: 'https://www.fakepersongenerator.com/Face/female/female20161025576615570.jpg', isOnline: false, text: "Quisque porta leo sit amet" },
    { id: 9, firstName: 'Chris', lastName: 'Smith', image: 'https://www.fakepersongenerator.com/Face/male/male1084929244538.jpg', isOnline: true, text: "Curabitur sagittis maximus" },
    // { id: 10, firstName: 'Donnie', lastName: 'Powell', image: 'https://www.fakepersongenerator.com/Face/male/male20131083507234864.jpg', isOnline: false, text: "nec porta justo pellentesque." },
]

QuickChat.propTypes = {
    theme: PropTypes.object.isRequired,
    elevation: PropTypes.string,
}

QuickChat.defaultProps = {
    elevation: '',
}

export default QuickChat
