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

export const ChatWrapper = styled.div`
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

export const MainView = styled.div`
    padding: 0px 20px;
`

export const Tabs = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
`

export const SelectedTab = styled.div`
    border-bottom: ${({ theme }) => `3px ${theme.PRIMARY} solid`};
`

export const Tab = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 7px;
    cursor: pointer;
    color: ${({ theme }) => theme.TEXT};
    font-size: ${() => TYPOGRAPHY.SIZE.TEXT};
    font-weight: bold;
    border-bottom: ${({ isSelected, theme }) => isSelected ? `4px ${theme.PRIMARY} solid` : 'none'};
    &:hover {
        border-bottom: ${({ isSelected, theme }) => isSelected ? `4px ${theme.PRIMARY} solid` : `4px ${theme.DIMMED} solid`};
    }
`

export const TabContent = styled.div`
    display: flex;
    margin: 30px 0px;
    flex: 1;
`