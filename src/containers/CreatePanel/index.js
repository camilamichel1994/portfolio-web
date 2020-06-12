import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import SetCard from './steps/SetCard'
import SetBasic from './steps/SetBasic'
import SetData from './steps/SetData'
import ELEVATION from '../../constants/elevation'
import {
    CreatePanelStyled,
    BottomNavigator,
    ButtonStyled,
    LinkStyled,
} from './CreatePanelStyled'

const CreatePanel = () => {
    const { value: theme } = useSelector(getTheme)
    const [layout, setLayout] = useState()
    const [step, setStep] = useState(1)
    const [title, setTitle] = useState()
    const [color, setColor] = useState()
    const [icon, setIcon] = useState()
    
    return (
        <Fragment>
            <CreatePanelStyled>
                { renderStep(step, theme, setStep, setLayout, setTitle, setColor, setIcon) }
            </CreatePanelStyled>
            <BottomNavigator theme={theme} elevation={ELEVATION[3]}>
                { step === 1 && <LinkStyled to="/profile"><ButtonStyled round outlined title="Back" /></LinkStyled> }
                { step !== 1 && <ButtonStyled round outlined title="Previous" onClick={() => setStep(step - 1)} /> }
                <ButtonStyled round title="Next" onClick={() => setStep(step + 1)} />
            </BottomNavigator>
        </Fragment>
    )
}

const renderStep = (step, theme, setStep, setLayout, setTitle, setColor, setIcon) => {
    switch (step) {
        case 1:
            return <SetCard theme={theme} onSelect={card => goToStepTwo(card, setStep, setLayout)} />
        case 2:
            return <SetBasic theme={theme} onNextStep={(title, color, icon) => goToStepThree(title, color, icon, setStep, setTitle, setColor, setIcon)} />
        case 3:
            return <SetData theme={theme} />
        default:
            return ''
    }
}

const goToStepTwo = (payload, setStep, setLayout) => {
    setLayout(payload)
    setStep(2)
}

const goToStepThree = (title, color, icon, setStep, setTitle, setColor, setIcon) => {
    setTitle(title)
    setColor(color)
    setIcon(icon)
    setStep(3)
}

export default CreatePanel

