import React, { useState } from 'react'
import PanelCard from '../../../../components/PanelCard'
import Card from '../../../../components/Card'
import Button from '../../../../components/Button'
import { COLORS } from '../../../../constants/theme'
import ELEVATION from '../../../../constants/elevation'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {
    SetCardStyled,
    Title,
    CardWrapper,
    ArrowIcon,
    CardDescription,
    InfoWrapper,
    CardAreaWrapper,
    InfoCardWrapper,
    CardList,
    CardListItem,
} from './SetCardStyled'

const SetCard = ({ theme, onSelect }) => {
    const [activeCard, setActiveCard] = useState(0)

    const cards = [
        { id: 1, alias: 'progress_bars', name: 'Progess Bars', description: "Good for showing your skill levels or a work's progress.", color: COLORS.GREEN },
        { id: 2, alias: 'pill_collection', name: 'Pill Collection', description: 'A horizontal list of pills.', color: COLORS.PRIMARY },
        { id: 3, alias: 'basic_info', name: 'Basic Information', description: 'Use this to display basic information such as e-mail and phone number.', color: COLORS.YELLOW },
        { id: 4, alias: 'list_view', name: 'List View', description: 'A simple vertical list of items. Be creative!', color: COLORS.RED },
    ]

    return (
        <SetCardStyled>
            <CardAreaWrapper>
                <Title theme={theme}>Choose a Panel layout</Title>
                <CardWrapper>
                    <ArrowIcon icon={faAngleLeft} theme={theme} onClick={() => setActiveCard(getNextCard(cards, activeCard, 0))} />
                    <span onClick={() => onSelect(cards[activeCard].alias)}>
                        <PanelCard color={cards[activeCard].color} alias={cards[activeCard].alias} />
                    </span>
                    <ArrowIcon icon={faAngleRight} theme={theme} onClick={() => setActiveCard(getNextCard(cards, activeCard, 1))} />
                </CardWrapper>
            </CardAreaWrapper>
            <InfoWrapper>
                <InfoCardWrapper>
                    <Card theme={theme} elevation={ELEVATION[1]} title={cards[activeCard].name} height="max-content">
                        <CardDescription theme={theme}>{cards[activeCard].description}</CardDescription>
                        <Button title="This one!" onClick={() => onSelect(cards[activeCard].alias)} />
                    </Card>
                </InfoCardWrapper>
                <InfoCardWrapper>
                    <Card theme={theme} elevation={ELEVATION[1]} title="Available Panels">
                        <CardList>{ renderCardList(cards, activeCard, setActiveCard, theme) }</CardList>
                    </Card>
                </InfoCardWrapper>
            </InfoWrapper>
        </SetCardStyled>
    )
}

const renderCardList = (cards, activeCard, setActiveCard, theme) => {
    const list = []
    cards.forEach(card => {
        list.push(
            <CardListItem key={card.id} isActive={cards[activeCard].id === card.id} onClick={() => setActiveCard(cards.findIndex(c => c.id === card.id))}>{card.name}</CardListItem>
        )
    })
    return list
}

const getNextCard = (cards, activeCard, direction) => {
    const lastCard = cards.length - 1
    if (direction === 0 && activeCard === 0) return lastCard
    if (direction === 0 && activeCard > 0) return activeCard - 1
    if (direction === 1 && activeCard === lastCard) return 0
    if (direction === 1 && activeCard >= 0) return activeCard + 1
}

export default SetCard

