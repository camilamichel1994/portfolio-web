import styled from 'styled-components'
import SCREEN from '../../constants/screen'
import TYPOGRAPHY from '../../constants/typography'
import ELEVATION, { ELEVATION_COLORED } from '../../constants/elevation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CreatePanelStyled = styled.div`
    padding: 80px 25px 25px 25px;
    width: 1100px;
    display: flex;
    flex-direction: row;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        padding: 25px;
        flex-direction: column;
    }
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
    margin: 5px 5px 0px 0px;
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
    flex-wrap: wrap;
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

export const SideWrapper = styled.div`
    width: 320px;
    padding-right: 15px;
    display: flex;
    flex-direction: column;
`

export const IconPanelWrapper = styled.div`
    margin-top: 15px;
`

export const Icon = styled(FontAwesomeIcon).attrs({ size: '1x' })`
    color: ${({ theme, maintile }) => maintile ? theme.CARD_BACKGROUND : theme.TEXT};
`

export const IconTile = styled.div`
    width: 30px;
    height: 30px;
    border: ${({ theme, isActive }) => `3px ${isActive ? theme.TEXT : theme.BACKGROUND} solid`};
    border-radius: 10px;
    background: ${({ theme }) => theme.CARD_BACKGROUND};
    color: ${({ theme }) => theme.TEXT};
    margin: 10px 10px 0px 0px;
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

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    max-width: 500px;
`

export const MainWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const TitleCardWrapper = styled.div`
    height: max-content;
    margin-bottom: 15px;
`

export const DescriptionWrapper = styled.div`
    margin-top: 15px;
`

export const Bold = styled.span`
    font-weight: bold;
`

export const StylesList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    max-width: 300px;
`

export const CardListItem = styled.div`
    padding: 10px;
    cursor: pointer;
    background: ${({ isActive, theme }) => isActive ? theme.PRIMARY : theme.CARD_BACKGROUND};
    color: ${({ isActive, theme }) => isActive ? theme.CARD_BACKGROUND : theme.TEXT};
    transition: all 0.1s ease 0s;
    border-radius: 5px;

    &:hover{
        background: ${({ isActive, theme }) => isActive ? theme.PRIMARY : theme.DIMMED};
    }
`