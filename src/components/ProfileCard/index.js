import React from 'react'
import PropTypes from 'prop-types'
import PROFILE from '../../constants/profile'
import {
    ProfileCardStyled,
    Gradient,
    ProfileImage,
    ProfileImageMini,
    InfoWrapper,
    Name,
    Occupation,
    HeartIcon,
    LikeRow,
    LikeCount,
    Row,
} from './ProfileCardStyled'

const ProfileCard = props => {
    
    return (
        <ProfileCardStyled elevation={props.elevation} theme={props.theme} image={props.data.backgroundImage.url}>
            { renderCard(props) }
        </ProfileCardStyled>
    )
}

const renderCard = ({ data, model, theme }) => {
    switch (model) {
        case PROFILE.PROFILE_STYLES.DEFAULT_CENTER:
        case PROFILE.PROFILE_STYLES.DEFAULT_LEFT_ALIGNED:
        case PROFILE.PROFILE_STYLES.COVER_ONLY_CENTER:
        case PROFILE.PROFILE_STYLES.COVER_ONLY_LEFT_ALIGNED:
            return (
                <Gradient theme={theme} model={model}>
                    {(model === PROFILE.PROFILE_STYLES.DEFAULT_CENTER || model === PROFILE.PROFILE_STYLES.DEFAULT_LEFT_ALIGNED) && 
                        <ProfileImage model={model} image={data.profileImage.url} />
                    }
                    <InfoWrapper model={model}>
                        <Name theme={theme}>{data.name.first}</Name>
                        <Name theme={theme}>{data.name.last}</Name>
                        <Occupation theme={theme}>{data.occupation}</Occupation>
                        <LikeRow>
                            <HeartIcon size="lg" theme={theme} />
                            <LikeCount theme={theme}>{data.likes}</LikeCount>
                        </LikeRow>
                    </InfoWrapper>
                </Gradient>
            )
        case 5:
            return (
                <Gradient theme={theme} model={model}>
                    <Row>
                        <ProfileImageMini model={model} image={data.profileImage.url} />
                        <InfoWrapper model={model}>
                            <Name theme={theme}>{data.name.first} {data.name.last}</Name>
                            <Occupation theme={theme}>{data.occupation}</Occupation>
                            <LikeRow model={model}>
                                <HeartIcon model={model} size="lg" theme={theme} />
                                <LikeCount theme={theme}>{data.likes}</LikeCount>
                            </LikeRow>
                        </InfoWrapper>
                    </Row>
                </Gradient>
            )
        default:
            break;
    }
}

ProfileCard.propTypes = {
    theme: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    model: PropTypes.number,
}

ProfileCard.defaultProps = {
    model: 1,
}

export default ProfileCard

