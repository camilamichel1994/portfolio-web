import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Button from '../Button'
import PanelItem from '../PanelItem'
import { FIELDS } from '../../constants/theme'
import { faSearch, faUser, faFolder, faGripHorizontal, faCubes } from '@fortawesome/free-solid-svg-icons'
import {
    ProfileTabStyled,
    SearchAddWrapper,
    AddPanelWrapper,
    PanelArea,
} from './ProfileTabStyled'

const ProfileTab = props => {
    
    return (
        <ProfileTabStyled theme={props.theme}>
            <SearchAddWrapper>
                <Input theme={props.theme} startIcon={faSearch} />
                <AddPanelWrapper>
                    <Button title="Add Panel" />
                </AddPanelWrapper>
            </SearchAddWrapper>
            <PanelArea>
                <PanelItem icon={faUser} color={FIELDS.DANGER} theme={props.theme} title="About me" description="Basic information about myself">Lorem ipsum dolor sit amet</PanelItem>
                <PanelItem icon={faFolder} color={FIELDS.SUCCESS} theme={props.theme} title="Projects" description="A collection of Github repositories">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PanelItem>
                <PanelItem icon={faGripHorizontal} color={FIELDS.WARNING} theme={props.theme} title="Skills" description="Things I can do">Ut enim ad minim veniam.</PanelItem>
                <PanelItem icon={faCubes} color={FIELDS.PRIMARY} theme={props.theme} title="Career" description="Where I've worked at">Duis aute irure dolor enim ad minim veniam.</PanelItem>
            </PanelArea>
        </ProfileTabStyled>
    )
}

ProfileTab.propTypes = {
    theme: PropTypes.object.isRequired,
}

export default ProfileTab

