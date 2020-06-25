import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import TYPOGRAPHY from '../../constants/typography'
import PROFILE from '../../constants/profile'
import { COLORS, THEME_NAME } from '../../constants/theme'

export const ProfileCardStyled = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    height: 480px;
    border-radius: 5px;
    box-shadow: ${({ elevation }) => elevation};
    border: ${({ theme }) => `2px ${theme.NAME === THEME_NAME.MIDNIGHT ? COLORS.DARK : 'none'} solid` };
`

export const Gradient = styled.div`
    background-image: ${({theme}) => `linear-gradient(transparent, ${theme.BACKGROUND})`};
    display: flex;
    flex-direction: column;
    align-items: ${({ model }) => {
        switch (model) {
            case PROFILE.PROFILE_STYLES.DEFAULT_LEFT_ALIGNED:
            case PROFILE.PROFILE_STYLES.COVER_ONLY_LEFT_ALIGNED:
            case PROFILE.PROFILE_STYLES.MINIFIED:
                return 'flex-start'
            case PROFILE.PROFILE_STYLES.DEFAULT_CENTER:
            case PROFILE.PROFILE_STYLES.COVER_ONLY_CENTER:
                return 'center'
            default:
                break
        }
    }};
    justify-content: flex-end;
    padding: 0px 20px;
    height: 480px;
    border-radius: 5px;
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

export const ProfileImageMini = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
    margin-left: 0px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ model }) => model === 2 || model === 4 || model === 5 ? 'flex-start' : 'center'};
    margin-left: ${({ model }) => model === 2 || model === 4 || model === 5 ? '20px' : '0px'};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Name = styled.div`
    color: ${({theme}) => theme.TITLE};
    font-size: ${TYPOGRAPHY.SIZE.TITLE};
    font-weight: 600;
`

export const Occupation = styled.div`
    color: ${({theme}) => theme.TEXT};
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
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
    margin: ${({ model }) => model !== PROFILE.PROFILE_STYLES.MINIFIED ? '10px 0px' : '0px'};
`

export const LikeCount = styled.div`
    color: ${({theme}) => theme.TEXT};
    font-weight: bold;
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    margin-left: 10px;
`