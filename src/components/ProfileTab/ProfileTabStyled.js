import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProfileTabStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.CARD_BACKGROUND};
    border-radius: 5px;
    flex: 1;
`

export const SearchAddWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const AddPanelWrapper = styled.div`
    margin-left: 10px;
`

export const PanelArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`