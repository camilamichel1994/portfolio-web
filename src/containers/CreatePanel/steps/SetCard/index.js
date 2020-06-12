import React, { useState } from 'react'
import PanelCard from '../../../../components/PanelCard'
import Card from '../../../../components/Card'
import { COLORS } from '../../../../constants/theme'
import ELEVATION from '../../../../constants/elevation'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {
    SetCardStyled,
    ArrowIcon,
    ChoosePanelWrapper,
    CardAreaWrapper,
    ListCardWrapper,
    CardList,
    CardListItem,
    ListWrapper,
    CardTitleWrapper,
    CardInfo,
    Title,
    CardDescription,
} from './SetCardStyled'

const SetCard = ({ theme, onSelect }) => {
    const [activeCard, setActiveCard] = useState(0)

    const cards = [
        { id: 1, alias: 'progress_bars', name: 'Progess Bars', description: "Good for showing your skill levels or a work's progress.", color: COLORS.GREEN },
        { id: 2, alias: 'pill_collection', name: 'Pill Collection', description: 'A horizontal list of pills.', color: COLORS.BLUE },
        { id: 3, alias: 'basic_info', name: 'Basic Information', description: 'Use this to display basic information such as e-mail and phone number.', color: COLORS.YELLOW },
        { id: 4, alias: 'list_view', name: 'List View', description: 'A simple vertical list of items. Be creative!', color: COLORS.PURPLE },
    ]

    return (
        <SetCardStyled>
            <CardAreaWrapper>
                <Card theme={theme} elevation={ELEVATION[1]} title="Choose a Panel layout">
                    <ChoosePanelWrapper>
                        <span onClick={() => onSelect(cards[activeCard].alias)}>
                            <PanelCard color={cards[activeCard].color} alias={cards[activeCard].alias} />
                        </span>
                        <CardInfo>
                            <CardTitleWrapper>
                                <ArrowIcon icon={faAngleLeft} theme={theme} onClick={() => setActiveCard(getNextCard(cards, activeCard, 0))} />
                                <Title theme={theme}>{cards[activeCard].name}</Title>
                                <ArrowIcon icon={faAngleRight} theme={theme} onClick={() => setActiveCard(getNextCard(cards, activeCard, 1))} />
                            </CardTitleWrapper>
                            <CardDescription theme={theme}>{cards[activeCard].description}</CardDescription>
                        </CardInfo>
                    </ChoosePanelWrapper>
                </Card>
            </CardAreaWrapper>
            <ListWrapper>
                <ListCardWrapper>
                    <Card theme={theme} elevation={ELEVATION[1]} title="Available Panels" spaced>
                        <CardList>{ renderCardList(cards, activeCard, setActiveCard, theme) }</CardList>
                    </Card>
                </ListCardWrapper>
            </ListWrapper>
        </SetCardStyled>
    )
}

const renderCardList = (cards, activeCard, setActiveCard, theme) => {
    const list = []
    cards.forEach(card => {
        list.push(
            <CardListItem
                theme={theme}
                key={card.id}
                isActive={cards[activeCard].id === card.id}
                onClick={() => setActiveCard(cards.findIndex(c => c.id === card.id))}
            >
                {card.name}
            </CardListItem>
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

