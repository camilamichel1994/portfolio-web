import React from 'react'
import PropTypes from 'prop-types'
import {
    ContactsTabStyled,
} from './ContactsTabStyled'

const ContactsTab = props => {
    
    return (
        <ContactsTabStyled theme={props.theme}>
            Contacts Tab
        </ContactsTabStyled>
    )
}

ContactsTab.propTypes = {
    theme: PropTypes.object.isRequired,
    elevation: PropTypes.string,
}

export default ContactsTab

