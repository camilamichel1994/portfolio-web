import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import SetCard from './steps/SetCard'
import SetBasic from './steps/SetBasic'
import SetData from './steps/SetData'
import { TOP_ELEVATION } from '../../constants/elevation'
import COLOR_TILES from '../../constants/colorTiles'
import ICONS from '../../constants/icons'
import {
    CreatePanelStyled,
    BottomNavigator,
    ButtonStyled,
    LinkStyled,
} from './CreatePanelStyled'

const CreatePanel = () => {
    const { value: theme } = useSelector(getTheme)
    const [isValid, setIsValid] = useState(true)
    const [layout, setLayout] = useState('progress_bars')
    const [step, setStep] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState()
    const [icon, setIcon] = useState()

    // console.log('layout', layout)
    // console.log('title', title)
    // console.log('description', description)
    // console.log('color', color)
    // console.log('icon', icon)

    return (
        <Fragment>
            <CreatePanelStyled>
                { renderStep(step, theme, setLayout, setIsValid, setTitle, setDescription, setColor, setIcon) }
            </CreatePanelStyled>
            <BottomNavigator theme={theme} elevation={TOP_ELEVATION[2]}>
                { step === 1 &&
                <LinkStyled to="/profile"><ButtonStyled round outlined title="Back" /></LinkStyled> }
                { step !== 1 &&
                <ButtonStyled
                    round
                    outlined
                    title="Previous"
                    onClick={() => {
                        setIsValid(true)
                        setStep(step - 1)
                    }} 
                /> }
                <ButtonStyled
                    round
                    title="Next"
                    disabled={!isValid}
                    onClick={() => {
                        setIsValid(false)
                        if (isValid) setStep(step + 1)
                    }}
                />
            </BottomNavigator>
        </Fragment>
    )
}

const renderStep = (step, theme, setLayout, setIsValid, setTitle, setDescription, setColor, setIcon) => {
    switch (step) {
        case 1:
            return <SetCard theme={theme} onSelect={card => setLayout(card)} />
        case 2:
            return <SetBasic theme={theme} onValidate={
                (isValid, title, description, color, icon) => {
                    console.log(isValid)
                    setIsValid(isValid)
                    setTitle(title)
                    setDescription(description)
                    setColor(color)
                    setIcon(icon)
                }} />
        case 3:
            return <SetData theme={theme} />
        default:
            return ''
    }
}

export default CreatePanel

