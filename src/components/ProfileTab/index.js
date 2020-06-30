import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Button from '../Button'
import PanelItem from '../PanelItem'
import * as icons from '@fortawesome/free-solid-svg-icons'
import {
    ProfileTabStyled,
    SearchAddWrapper,
    AddPanelWrapper,
    PanelArea,
    LinkStyled,
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
        <SearchAddWrapper>
            <Input theme={props.theme} startIcon={icons['faSearch']} />
            <AddPanelWrapper>
                <LinkStyled to="/new-panel">
                    <Button title="Add Panel" theme={props.theme} />
                </LinkStyled>
            </AddPanelWrapper>
        </SearchAddWrapper>
        <PanelArea>
            { renderPanels(props.panels, props.theme) }
        </PanelArea>
    </ProfileTabStyled>
)

ProfileTab.propTypes = {
    theme: PropTypes.object.isRequired,
}

export default ProfileTab

