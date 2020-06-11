import styled from 'styled-components'
import TYPOGRAPHY from '../../constants/typography'

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.CARD_BACKGROUND};
    padding: 20px;
    box-shadow: ${({elevation}) => elevation};
    border-radius: 5px;
    flex: 1;
    border: ${({ theme }) => `1px ${theme.NAME === 'MIDNIGHT' ? theme.TEXT : 'none'} solid` };
    height: ${({ height }) => height ? height : ''};
`

export const CardTitle = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    font-weight: bold;
    color: ${({ theme }) => theme.TITLE};
    margin-bottom: 20px;
`