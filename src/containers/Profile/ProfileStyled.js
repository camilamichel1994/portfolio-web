import styled from 'styled-components'
import SCREEN from '../../constants/screen'
import TYPOGRAPHY from '../../constants/typography'

export const ProfileStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 80px 25px 25px 25px;
    width: 1100px;
    
    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        flex: 1;
    }
    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        flex: 1;
        padding: 0px 0px 65px 0px;
    }
`

export const SideWrapper = styled.div`
    width: 320px;
    padding-left: 15px;

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        display: none;
    }
`

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const MainWrapper = styled.div`
    padding-top: 15px;
`

export const Tabs = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
`

export const SelectedTab = styled.div`
    border-bottom: ${({ theme }) => `3px ${theme.PRIMARY} solid`};
`

export const Tab = styled.div`
    display: flex;
    justify-content: center;
    padding: 7px 20px 7px 0px;
    cursor: pointer;
    color: ${({ theme }) => theme.TITLE};
    font-size: ${() => TYPOGRAPHY.SIZE.SUBTITLE};
    font-weight: ${({ isSelected }) => isSelected ? `bold` : 'normal'};
`

export const TabContent = styled.div`
    display: flex;
    margin: 30px 0px;
    flex: 1;
`

export const PhotosWrapper = styled.div`
    margin-top: 15px;
`

export const PhotosRow = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`

export const PhotosColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const Photo = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    border-radius: 10px;
    margin: 2px;
    min-width: 90px;
    height: 90px;
    cursor: pointer;
`