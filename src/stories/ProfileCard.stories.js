import React from 'react'
import ProfileCard from '../components/ProfileCard'
import THEME from '../constants/theme'
import TYPOGRAPHY from '../constants/typography'
import ELEVATION from '../constants/elevation'
import PROFILE from '../constants/profile'

export default {
  title: 'ProfileCard',
  component: ProfileCard,
}

const userMock = {
  name: { first: 'Rachel', last: 'McAdams' },
  backgroundImage: { url: 'https://images.unsplash.com/photo-1518672703296-e3022657f7b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
  profileImage: { url: 'https://www.rbsdirect.com.br/imagesrc/24943251.jpg?w=700' },
  occupation: 'Actress',
  likes: 2137,
}

export const lightThemeDefaultCenter = () => <ProfileCard  theme={THEME.LIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.DEFAULT_CENTER} />
export const lightThemeDefaultLeftAligned = () => <ProfileCard  theme={THEME.LIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.DEFAULT_LEFT_ALIGNED} />
export const lightThemeCoverOnlyCenter = () => <ProfileCard  theme={THEME.LIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.COVER_ONLY_CENTER} />
export const lightThemeCoverOnlyLeftAligned = () => <ProfileCard  theme={THEME.LIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.COVER_ONLY_LEFT_ALIGNED} />

export const darkThemeDefaultCenter = () => <ProfileCard  theme={THEME.DARK} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.DEFAULT_CENTER} />
export const darkThemeDefaultLeftAligned = () => <ProfileCard  theme={THEME.DARK} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.DEFAULT_LEFT_ALIGNED} />
export const darkThemeCoverOnlyCenter = () => <ProfileCard  theme={THEME.DARK} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.COVER_ONLY_CENTER} />
export const darkThemeCoverOnlyLeftAligned = () => <ProfileCard  theme={THEME.DARK} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.COVER_ONLY_LEFT_ALIGNED} />

export const midnightThemeDefaultCenter = () => <ProfileCard  theme={THEME.MIDNIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.DEFAULT_CENTER} />
export const midnightThemeDefaultLeftAligned = () => <ProfileCard  theme={THEME.MIDNIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.DEFAULT_LEFT_ALIGNED} />
export const midnightThemeCoverOnlyCenter = () => <ProfileCard  theme={THEME.MIDNIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.COVER_ONLY_CENTER} />
export const midnightThemeCoverOnlyLeftAligned = () => <ProfileCard  theme={THEME.MIDNIGHT} elevation={ELEVATION[1]} data={userMock} typography={TYPOGRAPHY} model={PROFILE.PROFILE_STYLES.COVER_ONLY_LEFT_ALIGNED} />
