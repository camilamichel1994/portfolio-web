import styled from 'styled-components'
import SCREEN from '../../constants/screen'
import TYPOGRAPHY from '../../constants/typography'
import { ELEVATION_COLORED } from '../../constants/elevation'

export const CreatePanelStyled = styled.div`
    padding: 80px 25px 25px 25px;
    width: 1100px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        padding: 25px;
    }
`

export const Title = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TITLE};
    font-weight: bold;
    color: ${({ theme }) => theme.TITLE};
    margin-bottom: 15px;
`

export const SectionDescription = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    color: ${({ theme }) => theme.TEXT};
    margin-top: 7px;
`

export const Tile = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    box-shadow: ${({ color }) => ELEVATION_COLORED(color)};
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    color: ${({ theme }) => theme.BACKGROUND};
    transition: all 0.4s ease 0s;
    background: ${({ image, color }) => image ? `url(${image})` : color};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const TileMini = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: ${({ color }) => color};
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.4s ease 0s;
    &:hover {
        box-shadow: ${({ color }) => ELEVATION_COLORED(color)};
        transform: translateY(-3px);
    }
`

export const TileMiniRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const ColorPickText = styled.div`
    color: ${({ theme, color }) => color ? color : theme.TEXT};
    font-size: ${TYPOGRAPHY.SIZE.SUBTEXT};
    font-weight: bold;
    margin-bottom: 10px;
`

export const TileImageRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 20px 0px;
`