import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import COLOR_TILES from '../../constants/colorTiles'
import { COLORS } from '../../constants/theme'
import Button from '../../components/Button'
import {
    CreatePanelStyled,
    Title,
    SectionDescription,
    Tile,
    TileMiniRow,
    TileMini,
    ColorPickText,
    TileImageRow,
} from './CreatePanelStyled'

const CreatePanel = () => {
    const { value: theme } = useSelector(getTheme)
    const [isValid, setIsValid] = useState(false)
    const [layout, setLayout] = useState()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState()

    return (
        <CreatePanelStyled>
            <Title>Basic details</Title>
            <SectionDescription>Describe your panel's basic information.</SectionDescription>
            <SectionDescription>What should it look like?</SectionDescription>
            <TileImageRow>
                <Tile theme={theme} color={color ? color : COLORS.GREY}>{title && title[0]}</Tile>
                <Button small outlined title="Upload image" />
            </TileImageRow>
            <ColorPickText>Or select a color:</ColorPickText>
            <TileMiniRow>
                { renderColors(setColor) }
            </TileMiniRow>
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

export default CreatePanel

