import React, { useState } from 'react'
import PanelCard from '../../components/PanelCard'
import { COLORS } from '../../constants/theme'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {
    CreatePanelStyled,
    LinkStyled,
    Title,
    CardWrapper,
    ArrowIcon,
    CardName,
    CardDescription,
} from './CreatePanelStyled'

const CreatePanel = () => {
    const { value: theme } = useSelector(getTheme)
    const [activeCard, setActiveCard] = useState(0)

    const cards = [
        { id: 1, alias: 'progress_bars', name: 'Progess Bars', description: "Good for showing your skill levels or a work's progress.", color: COLORS.GREEN },
        { id: 2, alias: 'pill_collection', name: 'Pill Collection', description: 'A horizontal list of pills.', color: COLORS.PRIMARY },
        { id: 3, alias: 'basic_info', name: 'Basic Information', description: 'Use this to display basic information such as e-mail and phone number.', color: COLORS.YELLOW },
        { id: 4, alias: 'list_view', name: 'List View', description: 'A simple vertical list of items. Be creative!', color: COLORS.RED },
    ]

    return (
        <CreatePanelStyled>
            <Title theme={theme}>Choose a panel layout</Title>
            { renderCards(cards, theme, activeCard, setActiveCard) }
        </CreatePanelStyled>
    )
}

const renderCards = (cards, theme, activeCard, setActiveCard) => (
    <React.Fragment>
        <CardWrapper>
            <ArrowIcon icon={faAngleLeft} theme={theme} onClick={() => setActiveCard(getNextCard(cards, activeCard, 0))} />
            <PanelCard color={cards[activeCard].color} alias={cards[activeCard].alias} />
            <ArrowIcon icon={faAngleRight} theme={theme} onClick={() => setActiveCard(getNextCard(cards, activeCard, 1))} />
        </CardWrapper>
        <CardName theme={theme}>{cards[activeCard].name}</CardName>
        <CardDescription>{cards[activeCard].description}</CardDescription>
    </React.Fragment>
)

const getNextCard = (cards, activeCard, direction) => {
    const lastCard = cards.length - 1
    if (direction === 0 && activeCard === 0) return lastCard
    if (direction === 0 && activeCard > 0) return activeCard - 1
    if (direction === 1 && activeCard === lastCard) return 0
    if (direction === 1 && activeCard >= 0) return activeCard + 1
}

export default CreatePanel

