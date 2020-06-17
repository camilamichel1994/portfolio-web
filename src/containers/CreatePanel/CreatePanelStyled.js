import styled from 'styled-components'
import { COLORS, THEME_NAME } from '../../constants/theme'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

export const CreatePanelStyled = styled.div`
    padding: 80px 25px 80px 25px;
    width: 1100px;
`

export const BottomNavigator = styled.div`
    display: flex;
    flex-direction: row;
    background: ${({theme}) => theme.CARD_BACKGROUND};
    width: 100%;
    align-items: center;
    box-shadow: ${({elevation}) => elevation};
    border-top: ${({ theme }) => `2px ${theme.NAME === THEME_NAME.MIDNIGHT ? COLORS.DARK : 'none'} solid` };
    justify-content: center;
    position: fixed;
    bottom: 0px;
    z-index: 1000;
    padding: 10px;
`

export const ButtonStyled = styled(Button)`
    margin: 0px 10px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`