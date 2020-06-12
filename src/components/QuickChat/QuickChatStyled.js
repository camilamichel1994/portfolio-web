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
    box-shadow: ${({elevation}) => elevation};
    border-radius: 5px;
    flex: 1;
    border: ${({ theme }) => `2px ${theme.NAME === THEME_NAME.MIDNIGHT ? COLORS.DARK : 'none'} solid` };
`

export const CardTitle = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    font-weight: bold;
    color: ${({ theme }) => theme.TITLE};
    padding: 20px;
`

export const SeeMore = styled.div`
    color: ${({ theme }) => theme.PRIMARY};
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    cursor: pointer;
    padding: 20px;
`

export const SeeMoreIcon = styled(FontAwesomeIcon).attrs({ icon: faEnvelope })`
    color: ${({theme}) => theme.PRIMARY};
    margin-right: 10px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const MessageWrapper = styled.div`
    padding: 12px 20px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
        background: ${({ theme }) => theme.DIMMED};
    }
`