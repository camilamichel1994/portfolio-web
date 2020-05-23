import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {
    PanelItemStyled,
    IconBox,
    Icon,
    InfoWrapper,
    Title,
    Description,
    ArrowIcon,
    AreaWrapper,
    ContentArea,
} from './PanelItemStyled'

const PanelItem = props => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AreaWrapper>
            <PanelItemStyled theme={props.theme} onClick={() => setIsOpen(!isOpen)}>
                <IconBox color={props.color}>
                    <Icon theme={props.theme} icon={props.icon} />
                </IconBox>
                <InfoWrapper>
                    <Title theme={props.theme}>{props.title}</Title>
                    <Description theme={props.theme}>{props.description}</Description>
                </InfoWrapper>
                <ArrowIcon theme={props.theme} isopen={isOpen.toString()} icon={faAngleDown} />
            </PanelItemStyled>
            {(isOpen && props.children) &&
                <ContentArea theme={props.theme}>
                    {props.children}
                </ContentArea>
            }
        </AreaWrapper>
    )
}

PanelItem.propTypes = {
    theme: PropTypes.object.isRequired,
    color: PropTypes.string,
    icon: PropTypes.object.isRequired,
}

PanelItem.defaultTypes = {
    color: 'grey',
}

export default PanelItem

