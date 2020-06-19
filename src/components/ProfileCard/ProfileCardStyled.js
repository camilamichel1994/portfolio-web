import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const ProfileCardStyled = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    height: 480px;
    border-radius: 5px;
`

export const Gradient = styled.div`
    background-image: ${({theme}) => `linear-gradient(transparent, ${theme.BACKGROUND})`};
    display: flex;
    flex-direction: column;
    align-items: ${({ model }) => model === 2 || model === 4 ? 'flex-start' : 'center'};
    justify-content: flex-end;
    padding: 0px 20px;
    height: 480px;
`

export const ProfileImage = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    border-radius: 50%;
    width: 115px;
    height: 115px;
    margin-bottom: 20px;
    margin-left: ${({ model }) => model === 2 || model === 4 ? '20px' : '0px'};
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ model }) => model === 2 || model === 4 ? 'flex-start' : 'center'};
    margin-left: ${({ model }) => model === 2 || model === 4 ? '20px' : '0px'};
`

export const Name = styled.div`
    color: ${({theme}) => theme.TITLE};
    font-size: ${({typography}) => typography.SIZE.TITLE};
    font-weight: 600;
`

export const Occupation = styled.div`
    color: ${({theme}) => theme.TEXT};
    font-size: ${({typography}) => typography.SIZE.SUBTITLE};
    margin-top: 10px;
`

export const HeartIcon = styled(FontAwesomeIcon).attrs({ icon: faHeart })`
    color: ${({theme}) => theme.PRIMARY};
    margin: 15px 0px;
`

export const LikeRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0px;
`

export const LikeCount = styled.div`
    color: ${({theme}) => theme.TEXT};
    font-weight: bold;
    font-size: ${({typography}) => typography.SIZE.TEXT};
    margin-left: 10px;
`