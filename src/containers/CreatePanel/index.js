import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import SetCard from './steps/SetCard'
import SetBasic from './steps/SetBasic'
import SetData from './steps/SetData'
import Stepper from '../../components/Stepper'
import {
    CreatePanelStyled,
    ContentWrapper,
    StepperWrapper,
} from './CreatePanelStyled'

const CreatePanel = () => {
    const { value: theme } = useSelector(getTheme)
    const [layout, setLayout] = useState()
    const [step, setStep] = useState(1)
    const [title, setTitle] = useState()
    const [color, setColor] = useState()
    const [icon, setIcon] = useState()
    
    return (
        <CreatePanelStyled>
            <StepperWrapper>
                <Stepper theme={theme} steps={4} backTo="/profile" hasBackButton activeStep={step} onStepClick={step => setStep(step)}/>
            </StepperWrapper>
            <ContentWrapper>
                { renderStep(step, theme, setStep, setLayout, setTitle, setColor, setIcon) }
            </ContentWrapper>
        </CreatePanelStyled>
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

