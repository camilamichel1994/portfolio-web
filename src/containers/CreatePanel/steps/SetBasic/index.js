import React, { useState } from 'react'
import { COLORS } from '../../../../constants/theme'
import ELEVATION from '../../../../constants/elevation'
import COLOR_TILES from '../../../../constants/colorTiles'
import Input from '../../../../components/Input'
import Textarea from '../../../../components/Textarea'
import ICONS from '../../../../constants/icons'
import Card from '../../../../components/Card'
import {
    SetBasicStyled,
    ColorTile,
    Colors,
    Icon,
    IconsWrapper,
    IconTile,
    TopWrapper,
    RightWrapper,
    InputWrapper,
} from './SetBasicStyled'

const SetBasic = ({ theme, onValidate }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState(COLOR_TILES.PRIMARY)
    const [icon, setIcon] = useState(ICONS.ASTERISK.NAME)

    return (
        <SetBasicStyled>
            <TopWrapper>
                <Card theme={theme} elevation={ELEVATION[1]} title="What should it be called?">
                    <InputWrapper>
                        <Input
                            theme={theme}
                            required
                            label="Title"
                            value={title}
                            onChange={e => {
                                setTitle(e.target.value)
                                onValidate(isFormValid(title, description, color, icon), title, description, color, icon)
                            }}
                        />
                    </InputWrapper>
                    <Textarea
                        theme={theme}
                        required
                        label="Short description"
                        value={description}
                        onChange={e => {
                            setDescription(e.target.value)
                            onValidate(isFormValid(title, description, color, icon), title, description, color, icon)
                        }} />
                </Card>
                <RightWrapper>
                    <Card theme={theme} elevation={ELEVATION[1]} title="Accent color">
                        <Colors>{ renderColors(color, setColor, theme) }</Colors>
                    </Card>
                </RightWrapper>
            </TopWrapper>
            <Card theme={theme} elevation={ELEVATION[1]} title="What best defines it?">
                <IconsWrapper>{ renderIcons(icon, setIcon, theme) }</IconsWrapper>
            </Card>
        </SetBasicStyled>
    )
}

const renderColors = (activeColor, setColor, theme) => [
    <ColorTile key={COLOR_TILES.PRIMARY} theme={theme} color={COLORS.PRIMARY} onClick={() => setColor(COLOR_TILES.PRIMARY)} isActive={activeColor === COLOR_TILES.PRIMARY} />,
    <ColorTile key={COLOR_TILES.GREEN} theme={theme} color={COLORS.GREEN} onClick={() => setColor(COLOR_TILES.GREEN)} isActive={activeColor === COLOR_TILES.GREEN} />,
    <ColorTile key={COLOR_TILES.RED} theme={theme} color={COLORS.RED} onClick={() => setColor(COLOR_TILES.RED)} isActive={activeColor === COLOR_TILES.RED} />,
    <ColorTile key={COLOR_TILES.YELLOW} theme={theme} color={COLORS.YELLOW} onClick={() => setColor(COLOR_TILES.YELLOW)} isActive={activeColor === COLOR_TILES.YELLOW} />,
    <ColorTile key={COLOR_TILES.BLUE} theme={theme} color={COLORS.BLUE} onClick={() => setColor(COLOR_TILES.BLUE)} isActive={activeColor === COLOR_TILES.BLUE} />,
    <ColorTile key={COLOR_TILES.CYAN} theme={theme} color={COLORS.CYAN} onClick={() => setColor(COLOR_TILES.CYAN)} isActive={activeColor === COLOR_TILES.CYAN} />,
    <ColorTile key={COLOR_TILES.PURPLE} theme={theme} color={COLORS.PURPLE} onClick={() => setColor(COLOR_TILES.PURPLE)} isActive={activeColor === COLOR_TILES.PURPLE} />,
    <ColorTile key={COLOR_TILES.ORANGE} theme={theme} color={COLORS.ORANGE} onClick={() => setColor(COLOR_TILES.ORANGE)} isActive={activeColor === COLOR_TILES.ORANGE} />,
    <ColorTile key={COLOR_TILES.PINK} theme={theme} color={COLORS.PINK} onClick={() => setColor(COLOR_TILES.PINK)} isActive={activeColor === COLOR_TILES.PINK} />,
    <ColorTile key={COLOR_TILES.BROWN} theme={theme} color={COLORS.BROWN} onClick={() => setColor(COLOR_TILES.BROWN)} isActive={activeColor === COLOR_TILES.BROWN} />,
    <ColorTile key={COLOR_TILES.LAVANDER} theme={theme} color={COLORS.LAVANDER} onClick={() => setColor(COLOR_TILES.LAVANDER)} isActive={activeColor === COLOR_TILES.LAVANDER} />,
    <ColorTile key={COLOR_TILES.LEMON} theme={theme} color={COLORS.LEMON} onClick={() => setColor(COLOR_TILES.LEMON)} isActive={activeColor === COLOR_TILES.LEMON} />,
]

const renderIcons = (activeIcon, setIcon, theme) => {
    const icons = []
    Object.entries(ICONS).forEach(i => {
        const icon = i[1]
        icons.push(
            <IconTile key={icon.NAME} theme={theme} onClick={() => setIcon(icon.NAME)} isActive={activeIcon === icon.NAME}>
                <Icon theme={theme} icon={icon.ICON} />
            </IconTile>
        )
    })
    return icons
}

const isFormValid = (title, description, color, icon) => {
    if (!!title && !!description && !!color && !!icon) return true
    return false
}

export default SetBasic

