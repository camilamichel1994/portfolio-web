import styled from 'styled-components'
import SCREEN from '../../constants/screen'

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 80px 25px 25px 25px;
    width: 1100px;
    
    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        flex: 1;
    }
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        flex: 1;
        padding: 65px 0px 0px 0px;
    }
`