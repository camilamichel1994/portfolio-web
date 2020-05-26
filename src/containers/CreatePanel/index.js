import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import SetCard from './steps/SetCard'
import SetBasic from './steps/SetBasic'
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
    
    return (
        <CreatePanelStyled>
            <StepperWrapper>
                <Stepper theme={theme} steps={4} backTo="/profile" hasBackButton activeStep={step} />
            </StepperWrapper>
            <ContentWrapper>
                { renderStep(step, theme, setStep, setLayout) }
            </ContentWrapper>
        </CreatePanelStyled>
    )
}

const renderStep = (step, theme, setStep, setLayout) => {
    switch (step) {
        case 1:
            return <SetCard theme={theme} onSelect={card => goToStepTwo(card, setStep, setLayout)} />
        case 2:
            return <SetBasic theme={theme} />
        default:
            return ''
    }
}

const goToStepTwo = (payload, setStep, setLayout) => {
    setLayout(payload)
    setStep(2)
}

export default CreatePanel

