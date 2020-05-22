import React from 'react'
import PropTypes from 'prop-types'
import {
    ProfileCardStyled,
    Gradient,
    ProfileImage,
    InfoWrapper,
    Name,
    Occupation,
    HeartIcon,
    LikeRow,
    LikeCount,
} from './ProfileCardStyled'

const ProfileCard = props => {
    
    return (
        <ProfileCardStyled theme={props.theme} elevation={props.elevation} image={props.data.backgroundImage.url}>
            <Gradient theme={props.theme} model={props.model}>
                {(props.model === 1 || props.model === 2) && <ProfileImage model={props.model} image={props.data.profileImage.url} />}
                <InfoWrapper model={props.model}>
                    <Name theme={props.theme} typography={props.typography}>{props.data.name.first}</Name>
                    <Name theme={props.theme} typography={props.typography}>{props.data.name.last}</Name>
                    <Occupation theme={props.theme} typography={props.typography}>{props.data.occupation}</Occupation>
                    <LikeRow>
                        <HeartIcon size="lg" theme={props.theme} />
                        <LikeCount theme={props.theme} typography={props.typography}>{props.data.likes}</LikeCount>
                    </LikeRow>
                </InfoWrapper>
            </Gradient>
        </ProfileCardStyled>
    )
}

ProfileCard.propTypes = {
    theme: PropTypes.object.isRequired,
    typography: PropTypes.object.isRequired,
    elevation: PropTypes.string,
    data: PropTypes.object.isRequired,
    model: PropTypes.number,
}

ProfileCard.defaultProps = {
    elevation: '',
    model: 1,
}

export default ProfileCard

