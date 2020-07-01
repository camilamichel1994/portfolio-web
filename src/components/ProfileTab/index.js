import React from 'react'
import PropTypes from 'prop-types'
import PanelItem from '../PanelItem'
import * as icons from '@fortawesome/free-solid-svg-icons'
import {
    ProfileTabStyled,
} from './ProfileTabStyled'

const renderPanels = (panels, theme) => {
    const panelList = []
    panels.forEach(panel => {
        panelList.push(
            <PanelItem key={panel.id} icon={icons[panel.icon] || icons['faFolder']} color={panel.color} theme={theme} title={panel.title} description={panel.description}>
                {panel.content}
            </PanelItem>
        )
    })
    return panelList
}

const ProfileTab = props => (
    <ProfileTabStyled theme={props.theme}>
        { renderPanels(props.panels, props.theme) }
    </ProfileTabStyled>
)

ProfileTab.propTypes = {
    theme: PropTypes.object.isRequired,
}

export default ProfileTab

