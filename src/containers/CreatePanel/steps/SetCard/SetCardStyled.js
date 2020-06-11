import styled from 'styled-components'
import TYPOGRAPHY from '../../../../constants/typography'
import SCREEN from '../../../../constants/screen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SetCardStyled = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        flex: 1;
    }
`

export const CardAreaWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`

export const InfoCardWrapper = styled.div`
    margin: 10px 0px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex: 1;
    max-width: 400px;
    min-width: 310px;
    margin-left: 15px;
    flex-direction: column;

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        margin-top: 30px;
        margin-left: 0px;
    }
`

export const Title = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    font-weight: bold;
    color: ${({ theme }) => theme.TITLE};
    margin: 20px 0px 40px 0px;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    flex: 1;
`

export const ArrowIcon = styled(FontAwesomeIcon).attrs({ size: '4x' })`
    color: ${({ theme }) => theme.TEXT};
    cursor: pointer;
    margin: 0px 40px;

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        margin: 0px 10px;
    }
`

export const CardDescription = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    color: ${({ theme }) => theme.TEXT};
    font-weight: 300;
    margin-bottom: 30px;
`

export const CardList = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardListItem = styled.div`
    padding: 10px;
    cursor: pointer;
    color: ${({ isActive }) => isActive ? 'red' : 'black'};
`