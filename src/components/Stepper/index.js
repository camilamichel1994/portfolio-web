import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import {
    StepperStyled,
    Step,
    BackStep,
    Divisor,
    BackIcon,
    LinkStyled,
} from './StepperStyled'

const Stepper = props => {
    const [activeStep, setActiveStep] = useState(props.activeStep)

    useEffect(() => {
        setActiveStep(props.activeStep)
    }, [props.activeStep])

    return (
        <Fragment>
            <StepperStyled>
                {props.hasBackButton &&
                    <LinkStyled to={props.backTo ? props.backTo : '/'}>
                        <BackStep theme={props.theme}>
                            <BackIcon icon={faAngleLeft} theme={props.theme} />
                        </BackStep>
                    </LinkStyled>
                }
                { renderSteps(props.steps, props.theme, activeStep, setActiveStep, props.onStepClick) }
            </StepperStyled>
            <Divisor theme={props.theme} />
        </Fragment>
    )
}

const renderSteps = (steps, theme, activeStep, setActiveStep, onStepClick) => {
    const stepList = []
    for (let i = 1; i <= steps; i++) {
        const isActive = activeStep == i
        stepList.push(
            <Step theme={theme} key={i} isActive={isActive} activeStep={activeStep} onClick={() => setNewStep(i < activeStep, i, setActiveStep, onStepClick)}>{i}</Step>
        )
    }
    return stepList
}

const setNewStep = (isEnabled, newStep, setActiveStep, onStepClick) => {
    if (isEnabled) {
        setActiveStep(newStep)
        onStepClick(newStep)
    }
}

Stepper.propTypes = {
    theme: PropTypes.object.isRequired,
    steps: PropTypes.number.isRequired,
    backTo: PropTypes.string,
    hasBackButton: PropTypes.bool,
    activeStep: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onStepClick: PropTypes.func.isRequired,
}

Stepper.defaultProps = {
    backTo: '/',
    hasBackButton: false,
    activeStep: 1,
}

export default Stepper

