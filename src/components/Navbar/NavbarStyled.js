import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { THEME_NAME } from '../../constants/theme'
import SCREEN from '../../constants/screen'
import TYPOGRAPHY from '../../constants/typography'
import { Link } from 'react-router-dom'
import { COLORS } from '../../constants/theme'

export const NavbarStyled = styled.div`
    display: flex;
    flex-direction: row;
    background: ${({theme}) => theme.CARD_BACKGROUND};
    width: 100%;
    height: 65px;
    align-items: center;
    box-shadow: ${({elevation}) => elevation};
    border-bottom: ${({ theme }) => `2px ${theme.NAME === THEME_NAME.MIDNIGHT ? COLORS.DARK : 'none'} solid` };
    justify-content: center;
    position: fixed;
    z-index: 1000;
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        bottom: 0px;
    }
`

export const Wrapper = styled.div`
    width: 1100px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 20px;
    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        flex: 1;
    }
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        flex: 1;
        padding: 0px;
        justify-content: center;
    }
`

export const Icon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.TEXT};
    padding: 20px;
    &:hover {
        color: ${({theme}) => theme.PRIMARY};
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Brand = styled.div`
    color: ${({theme}) => theme.PRIMARY};
    font-weight: bold;
    font-size: ${() => TYPOGRAPHY.SIZE.TEXT};
`

export const ProfileImage = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-left: 15px;
    cursor: pointer;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const LinkSearch = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: none;
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        display: block;
    }
`

export const BrandSearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        display: none;
    }
`

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SearchInput = styled.input`
    color: ${({theme}) => theme.DIMMED};
    font-size: ${() => TYPOGRAPHY.SIZE.TEXT};
    background-color: ${({theme}) => theme.CARD_BACKGROUND};
    border: none;
    font-weight: lighter;
    outline: none;
    color: ${({ theme }) => theme.TEXT};
`

export const SearchIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.DISABLED};
    padding: 0px 10px 0px 20px;
`