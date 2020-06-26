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
    SectionDescription,
    Tile,
    TileMiniRow,
    TileMini,
    ColorPickText,
    TileImageRow,
    SideWrapper,
    IconPanelWrapper,
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
    const [layout, setLayout] = useState({ id: 1, alias: 'progress_bars', name: 'Progess Bars', description: "Good for showing your skill levels or a work's progress." })
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState(COLORS.PRIMARY)
    const [icon, setIcon] = useState(ICONS.ASTERISK)

    const layoutList = [
        { id: 3, alias: 'basic_info', name: 'Basic Information' },
        { id: 5, alias: 'carousel', name: 'Carousel' },
        { id: 7, alias: 'gallery', name: 'Gallery' },
        { id: 4, alias: 'list_view', name: 'List View' },
        { id: 2, alias: 'pill_collection', name: 'Pill Collection' },
        { id: 1, alias: 'progress_bars', name: 'Progess Bars' },
        { id: 6, alias: 'simple_text', name: 'Simple Text' },
    ]

    return (
        <CreatePanelStyled>
            <SideWrapper>
                <Card title="Basic details" theme={theme} elevation={ELEVATION[1]}>
                    <SectionDescription theme={theme}>Describe your panel's basic information.</SectionDescription>
                    <SectionDescription theme={theme}>What should it look like?</SectionDescription>
                    <TileImageRow>
                        <Tile theme={theme} color={color ? color : COLORS.GREY}>
                            <Icon maintile="true" theme={theme} icon={icon.ICON} />
                        </Tile>
                    </TileImageRow>
                    <ColorPickText theme={theme}>Select a color:</ColorPickText>
                    <TileMiniRow>
                        { renderColors(setColor) }
                    </TileMiniRow>
                </Card>
                <IconPanelWrapper>
                    <Card title="What best defines it?" theme={theme} elevation={ELEVATION[1]}>
                        <SectionDescription theme={theme}>Choose an icon to represent your panel.</SectionDescription>
                        <IconsWrapper>{ renderIcons(icon, setIcon, theme) }</IconsWrapper>
                    </Card>
                </IconPanelWrapper>
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
                <Card title="Define a style" theme={theme} elevation={ELEVATION[1]}>
                    <SectionDescription theme={theme}>Choose a style that best fits your needs.</SectionDescription>
                    <SectionDescription theme={theme}>This can <Bold>not</Bold> be changed later.</SectionDescription>
                    <StylesListWrapper>
                        <StylesList>
                            { renderLayoutList(layoutList, layout, setLayout, theme) }
                        </StylesList>
                    </StylesListWrapper>
                </Card>
            </MainWrapper>
        </CreatePanelStyled>
    )
}

const renderColors = setColor => [
    <TileMini key={COLOR_TILES.PRIMARY} color={COLORS.PRIMARY} onClick={() => setColor(COLORS.PRIMARY)} />,
    <TileMini key={COLOR_TILES.GREEN} color={COLORS.GREEN} onClick={() => setColor(COLORS.GREEN)} />,
    <TileMini key={COLOR_TILES.RED} color={COLORS.RED} onClick={() => setColor(COLORS.RED)} />,
    <TileMini key={COLOR_TILES.YELLOW} color={COLORS.YELLOW} onClick={() => setColor(COLORS.YELLOW)} />,
    <TileMini key={COLOR_TILES.BLUE} color={COLORS.BLUE} onClick={() => setColor(COLORS.BLUE)} />,
    <TileMini key={COLOR_TILES.CYAN} color={COLORS.CYAN} onClick={() => setColor(COLORS.CYAN)} />,
    <TileMini key={COLOR_TILES.PURPLE} color={COLORS.PURPLE} onClick={() => setColor(COLORS.PURPLE)} />,
    <TileMini key={COLOR_TILES.ORANGE} color={COLORS.ORANGE} onClick={() => setColor(COLORS.ORANGE)} />,
    <TileMini key={COLOR_TILES.PINK} color={COLORS.PINK} onClick={() => setColor(COLORS.PINK)} />,
    <TileMini key={COLOR_TILES.BROWN} color={COLORS.BROWN} onClick={() => setColor(COLORS.BROWN)} />,
    <TileMini key={COLOR_TILES.LAVANDER} color={COLORS.LAVANDER} onClick={() => setColor(COLORS.LAVANDER)} />,
    <TileMini key={COLOR_TILES.LEMON} color={COLORS.LEMON} onClick={() => setColor(COLORS.LEMON)} />,
]

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