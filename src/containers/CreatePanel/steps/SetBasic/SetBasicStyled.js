import styled from 'styled-components'
import TYPOGRAPHY from '../../../../constants/typography'
import SCREEN from '../../../../constants/screen'
import ELEVATION from '../../../../constants/elevation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SetBasicStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        flex-direction: column;
    }
`

export const RightWrapper = styled.div`
    display: flex;
    margin-left: 15px;
    max-width: 500px;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        margin: 15px 0px;
    }
`

export const InputWrapper = styled.div`
    margin-bottom: 10px;
`

export const Title = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TITLE};
    color: ${({ theme }) => theme.TITLE};
    font-weight: 500;
    margin-bottom: 30px;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    }
`

export const Subtitle = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    color: ${({ theme }) => theme.TITLE};
    font-weight: 500;
    margin: 30px 0px;
`

export const ColorTile = styled.div`
    width: 50px;
    height: 50px;
    border: ${({ theme, color, isActive }) => `3px ${isActive ? theme.TEXT : color} solid`};
    border-radius: 15px;
    background: ${({ color }) => color};
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
        box-shadow: 0px 7px 13px -5px ${({ color }) => color};
        -webkit-box-shadow: 0px 7px 13px -5px ${({ color }) => color};
        transform: translateY(-4px);
    }
`

export const Colors = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        width: 100%;
    }
`

export const ButtonWrapper = styled.div`
    margin: 35px 0px;
`

export const Icon = styled(FontAwesomeIcon).attrs({ size: '2x' })`
    color: ${({theme}) => theme.TEXT};
`

export const IconTile = styled.div`
    width: 50px;
    height: 50px;
    border: ${({ theme, isActive }) => `3px ${isActive ? theme.TEXT : theme.BACKGROUND} solid`};
    border-radius: 15px;
    background: ${({ theme }) => theme.BACKGROUND};
    color: ${({ theme }) => theme.TEXT};
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${ELEVATION[1]};

    &:hover {
        box-shadow: ${ELEVATION[2]};
        transform: translateY(-4px);
    }
`