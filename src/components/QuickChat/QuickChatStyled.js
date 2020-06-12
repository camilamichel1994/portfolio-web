import styled from 'styled-components'
import TYPOGRAPHY from '../../constants/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { COLORS, THEME_NAME } from '../../constants/theme'

export const QuickChatStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.CARD_BACKGROUND};
    padding: 20px;
    box-shadow: ${({elevation}) => elevation};
    border-radius: 5px;
    flex: 1;
    border: ${({ theme }) => `2px ${theme.NAME === THEME_NAME.MIDNIGHT ? COLORS.DARK : 'none'} solid` };
`

export const CardTitle = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    font-weight: bold;
    color: ${({ theme }) => theme.TITLE};
    margin-bottom: 20px;
`

export const SeeMore = styled.div`
    margin-top: 20px;
    color: ${({ theme }) => theme.PRIMARY};
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    cursor: pointer;
`

export const SeeMoreIcon = styled(FontAwesomeIcon).attrs({ icon: faEnvelope })`
    color: ${({theme}) => theme.PRIMARY};
    margin-right: 10px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`