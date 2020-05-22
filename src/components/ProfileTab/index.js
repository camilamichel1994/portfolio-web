import React from 'react'
import PropTypes from 'prop-types'
import {
    ProfileTabStyled,
} from './ProfileTabStyled'

const ProfileTab = props => {
    
    return (
        <ProfileTabStyled theme={props.theme}>
            profile tab
        </ProfileTabStyled>
    )
}

ProfileTab.propTypes = {
    theme: PropTypes.object.isRequired,
}

export default ProfileTab

