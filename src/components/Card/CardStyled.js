import styled from 'styled-components'
import TYPOGRAPHY from '../../constants/typography'
import { COLORS, THEME_NAME } from '../../constants/theme'

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.CARD_BACKGROUND};
    padding: ${({ spaced }) => spaced ? '0px' : '20px'};
    box-shadow: ${({elevation}) => elevation};
    border-radius: 10px;
    flex: 1;
    border: ${({ theme }) => `2px ${theme.NAME === THEME_NAME.MIDNIGHT ? COLORS.DARK : 'none'} solid` };
    height: ${({ height }) => height ? height : ''};
`

export const CardTitle = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    font-weight: bold;
    color: ${({ theme }) => theme.TITLE};
    padding: ${({ spaced }) => spaced ? '20px' : '0px 0px 20px 0px'};
`