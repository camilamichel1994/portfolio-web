import styled from 'styled-components'
import SCREEN from '../../constants/screen'

export const CreatePanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContentWrapper = styled.div`
    margin-top: 50px;
`

export const StepperWrapper = styled.div`
    padding: 20px 0px;
    width: 450px;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        width: 250px;
    }
`