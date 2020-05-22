import styled from 'styled-components'

export const QuickChatStyled = styled.div`
    display: flex;
    flex-direction: row;
    background: ${({theme}) => theme.CARD_BACKGROUND};
    height: 65px;
    align-items: center;
    padding: 0px 15px;
    box-shadow: ${({elevation}) => elevation};
    border-radius: 5px;
    flex: 1;
    border: ${({ theme }) => `1px ${theme.NAME === 'MIDNIGHT' ? theme.TEXT : 'none'} solid` };
`