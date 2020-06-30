import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TYPOGRAPHY from '../../constants/typography'

export const PanelItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 15px 0px;
    align-items: center;
    cursor: pointer;
`

export const IconBox = styled.div`
    width: 65px;
    height: 65px;
    background: ${({ color }) => color || 'grey'};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled(FontAwesomeIcon).attrs({ size: '2x' })`
    color: ${({ theme }) => theme.CARD_BACKGROUND};
`

export const ArrowIcon = styled(FontAwesomeIcon).attrs({ size: 'lg' })`
    color: ${({ theme }) => theme.TEXT};
    -webkit-transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform;
    ${({ isopen }) => {
        if (isopen === 'true') return "-webkit-transform:rotate(180deg);"
    }}
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 15px;
`

export const Title = styled.div`
    color: ${({ theme }) => theme.TITLE};
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    font-weight: bold;
`

export const Description = styled.div`
    color: ${({ theme }) => theme.TEXT};
    font-size: ${TYPOGRAPHY.SIZE.SUBTEXT};
    margin-top: 5px;
`

export const AreaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ContentArea = styled.div`
    padding: 20px;
    border-bottom: ${({ theme }) => `1px ${theme.DISABLED} solid`};
`