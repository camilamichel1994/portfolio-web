import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const colorSwitcher = (theme, isActive, currentStep, activeStep) => {
    if (isActive) return { background: theme.PRIMARY, color: theme.BACKGROUND }
    if (currentStep < activeStep) return { background: theme.PRIMARY, color: theme.BACKGROUND }
    return { background: theme.BACKGROUND, color: theme.TEXT }
}

export const StepperStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Step = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme, isActive, children, activeStep }) => colorSwitcher(theme, isActive, children, activeStep).background};
    border: ${({ theme }) => `2.5px ${theme.PRIMARY} solid`};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme, isActive, children, activeStep }) => colorSwitcher(theme, isActive, children, activeStep).color};
    font-weight: bold;
    z-index: 2;
    cursor: ${({ children, activeStep }) => children > activeStep ? 'default' : 'pointer'};
    transition: all 0.3s ease 0s;
`

export const BackStep = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme }) => theme.PRIMARY};
    border: ${({ theme }) => `2.5px ${theme.PRIMARY} solid`};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    z-index: 2;
    cursor: pointer;
    transition: all 0.3s ease 0s;
`

export const Divisor = styled.div`
    border: ${({ theme }) => `1.5px ${theme.PRIMARY} solid`};
    transform: translateY(-16px);
    z-index: 1;
`

export const BackIcon = styled(FontAwesomeIcon).attrs({ size: 'lg' })`
    color: ${({ theme }) => theme.BACKGROUND};
    padding-right: 3px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
    z-index: 2;
`