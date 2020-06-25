import styled from 'styled-components'
import TYPOGRAPHY from '../../constants/typography'

export const MessageItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    cursor: pointer;
`

export const ProfileImage = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    width: 45px;
    height: 45px;
    border-radius: 25px;
`

export const NameImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
`

export const Name = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    color: ${({ theme }) => theme.TITLE};
    margin-left: 10px;
`

export const Online = styled.div`
    background: ${({ theme }) => theme.FIELDS.SUCCESS};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
`