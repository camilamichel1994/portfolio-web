import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TYPOGRAPHY from '../../constants/typography'
import SCREEN from '../../constants/screen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CreatePanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin: 10px 0px;
`

export const Title = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TITLE};
    color: ${({ theme }) => theme.TITLE};
    font-weight: 500;
    margin-top: 20px;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 35px 0px;
`

export const ArrowIcon = styled(FontAwesomeIcon).attrs({ size: '4x' })`
    color: ${({ theme }) => theme.TEXT};
    cursor: pointer;
    margin: 0px 40px;

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        margin: 0px 30px;
    }
`

export const CardName = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    color: ${({ theme }) => theme.TITLE};
    font-weight: 500;
`

export const CardDescription = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    color: ${({ theme }) => theme.TEXT};
    font-weight: 300;
    margin: 30px 0px;
    width: 300px;
    text-align: center;
`