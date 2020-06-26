import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import COLOR_TILES from '../../constants/colorTiles'
import { COLORS } from '../../constants/theme'
import ELEVATION from '../../constants/elevation'
import Card from '../../components/Card'
import ICONS from '../../constants/icons'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import {
    CreatePanelStyled,
    BasicWrapper,
    SectionDescription,
    Tile,
    TileMiniRow,
    TileMini,
    ColorPickText,
    TileImageRow,
    SideWrapper,
    StylePanelWrapper,
    Icon,
    IconTile,
    IconsWrapper,
    FormWrapper,
    MainWrapper,
    DescriptionWrapper,
    TitleCardWrapper,
    Bold,
    StylesList,
    CardListItem,
    StylesListWrapper,
} from './CreatePanelStyled'

const CreatePanel = () => {
    const { value: theme } = useSelector(getTheme)
    const [isValid, setIsValid] = useState(false)
    const [layout, setLayout] = useState({ id: 1, alias: 'basic_info', name: 'Basic Information' })
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState(COLOR_TILES.PRIMARY.name)
    const [icon, setIcon] = useState(ICONS.ASTERISK)

    const layoutList = [
        { id: 1, alias: 'basic_info', name: 'Basic Information' },
        { id: 2, alias: 'carousel', name: 'Carousel' },
        { id: 3, alias: 'gallery', name: 'Gallery' },
        { id: 4, alias: 'list_view', name: 'List View' },
        { id: 5, alias: 'pill_collection', name: 'Pill Collection' },
        { id: 6, alias: 'progress_bars', name: 'Progess Bars' },
        { id: 7, alias: 'simple_text', name: 'Simple Text' },
    ]

    return (
        <CreatePanelStyled>
            <BasicWrapper>
                <SideWrapper>
                    <Card title="Basic details" theme={theme} elevation={ELEVATION[1]}>
                        <SectionDescription theme={theme}>Describe your panel's basic information.</SectionDescription>
                        <SectionDescription theme={theme}>What should it look like?</SectionDescription>
                        <TileImageRow>
                            <Tile theme={theme} color={color ? color : COLORS.PRIMARY}>
                                <Icon maintile="true" theme={theme} icon={icon.ICON} />
                            </Tile>
                        </TileImageRow>
                        <ColorPickText theme={theme}>Select a color:</ColorPickText>
                        <TileMiniRow>
                            { renderColors(setColor) }
                        </TileMiniRow>
                    </Card>
                    <StylePanelWrapper>
                        <Card title="Define a style" theme={theme} elevation={ELEVATION[1]}>
                            <SectionDescription theme={theme}>Choose a style that best fits your needs.</SectionDescription>
                            <SectionDescription theme={theme}>This can <Bold>not</Bold> be changed later.</SectionDescription>
                            <StylesListWrapper>
                                <StylesList>
                                    { renderLayoutList(layoutList, layout, setLayout, theme) }
                                </StylesList>
                            </StylesListWrapper>
                        </Card>
                    </StylePanelWrapper>
                </SideWrapper>
                <MainWrapper>
                    <TitleCardWrapper>
                        <Card title="What should it be called?" theme={theme} elevation={ELEVATION[1]}>
                            <SectionDescription theme={theme}>You can always change this later.</SectionDescription>
                            <FormWrapper>
                                <Input label="Title" theme={theme} required />
                                <DescriptionWrapper>
                                    <Textarea label="Short description" theme={theme} required />
                                </DescriptionWrapper>
                            </FormWrapper>
                        </Card>
                    </TitleCardWrapper>
                    <Card title="What best defines it?" theme={theme} elevation={ELEVATION[1]}>
                        <SectionDescription theme={theme}>Choose an icon to represent your panel.</SectionDescription>
                        <IconsWrapper>{ renderIcons(icon, setIcon, theme) }</IconsWrapper>
                    </Card>
                </MainWrapper>
            </BasicWrapper>
            <StylePanelWrapper>
                <Card title="Panel data" theme={theme} elevation={ELEVATION[1]}>
                    <SectionDescription theme={theme}>The content of your Panel goes here.</SectionDescription>
                    <SectionDescription theme={theme}>Be creative!</SectionDescription>
                </Card>
            </StylePanelWrapper>
            <StylePanelWrapper>
                <Card title="Preview" theme={theme} elevation={ELEVATION[1]}>
                    <SectionDescription theme={theme}>This is how your Panel is going to look like.</SectionDescription>
                    <SectionDescription theme={theme}>What do you think?</SectionDescription>
                </Card>
            </StylePanelWrapper>
        </CreatePanelStyled>
    )
}

const renderColors = setColor => {
    const colors = []
    Object.entries(COLOR_TILES).forEach(color => {
        colors.push(
            <TileMini key={color[1].name} color={color[1].color} onClick={() => setColor(color[1].name)} />
        )
    })
    return colors
}

const renderIcons = (activeIcon, setIcon, theme) => {
    const icons = []
    Object.entries(ICONS).forEach(i => {
        const icon = i[1]
        icons.push(
            <IconTile key={icon.NAME} theme={theme} onClick={() => setIcon(icon)} isActive={activeIcon.NAME === icon.NAME}>
                <Icon theme={theme} icon={icon.ICON} />
            </IconTile>
        )
    })
    return icons
}

const renderLayoutList = (layouts, activeLayout, setLayout, theme) => {
    const list = []
    layouts.forEach(layout => {
        list.push(
            <CardListItem
                theme={theme}
                key={layout.id}
                isActive={activeLayout.id === layout.id}
                onClick={() => setLayout(layout)}
            >
                {layout.name}
            </CardListItem>
        )
    })
    return list
}

export default CreatePanel