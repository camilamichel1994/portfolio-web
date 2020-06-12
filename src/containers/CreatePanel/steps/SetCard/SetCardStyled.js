import styled from 'styled-components'
import TYPOGRAPHY from '../../../../constants/typography'
import SCREEN from '../../../../constants/screen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SetCardStyled = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        flex-direction: column;
    }
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        flex: 1;
    }
`

export const CardAreaWrapper = styled.div`
    display: flex;
    flex: 1;
    min-width: 310px;
`

export const ListCardWrapper = styled.div`
    margin: 0px;
`

export const ListWrapper = styled.div`
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
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    font-weight: bold;
    color: ${({ theme }) => theme.TITLE};
`

export const CardTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        margin-top: 20px;
    }
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20px;

    @media (min-width: ${SCREEN.SIZES.DESKTOP}) {
        width: 250px;
    }
`

export const ArrowIcon = styled(FontAwesomeIcon).attrs({ size: '2x' })`
    color: ${({ theme }) => theme.TEXT};
    cursor: pointer;
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
    background: ${({ isActive, theme }) => isActive ? theme.PRIMARY : theme.CARD_BACKGROUND};
    color: ${({ isActive, theme }) => isActive ? theme.CARD_BACKGROUND : theme.TEXT};
    transition: all 0.1s ease 0s;

    &:hover{
        background: ${({ isActive, theme }) => isActive ? theme.PRIMARY : theme.DIMMED};
    }
`

export const ChoosePanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px 0px;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        flex-direction: column;
        align-items: center;
    }
`