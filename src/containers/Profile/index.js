import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import { getProfile } from '../../reducers/profile-reducer'
import { getUser } from '../../reducers/user-reducer'
import ProfileCard from '../../components/ProfileCard'
import QuickChat from '../../components/QuickChat'
import ELEVATION from '../../constants/elevation'
import TYPOGRAPHY from '../../constants/typography'
import PROFILE from '../../constants/profile'
import ProfileTab from '../../components/ProfileTab'
import ContactsTab from '../../components/ContactsTab'
import PostsTab from '../../components/PostsTab'
import {
    ProfileStyled,
    ChatWrapper,
    ProfileWrapper,
    MainView,
    Tabs,
    Tab,
    TabContent,
} from './ProfileStyled'

const renderSelectedTab = (index, theme) => {
    switch (index) {
        case PROFILE.TABS.PROFILE:
            return <ProfileTab theme={theme} />
        case PROFILE.TABS.POSTS:
            return <PostsTab theme={theme} />
        case PROFILE.TABS.CONTACTS:
            return <ContactsTab theme={theme} />
        default:
            return <ProfileTab theme={theme} />
    }
}

const Profile = () => {
    const { value: theme } = useSelector(getTheme)
    const { style: profileStyle } = useSelector(getProfile)
    const user = useSelector(getUser)
    const [selectedTab, setSelectedTab] = useState(PROFILE.TABS.PROFILE)

    return (
        <ProfileStyled theme={theme}>
            <ProfileWrapper>
                <ProfileCard theme={theme} elevation={ELEVATION[1]} data={user} typography={TYPOGRAPHY} model={profileStyle} />
                <MainView>
                    <Tabs>
                        <Tab theme={theme} isSelected={selectedTab === PROFILE.TABS.PROFILE} onClick={() => setSelectedTab(PROFILE.TABS.PROFILE)}>Profile</Tab>
                        <Tab theme={theme} isSelected={selectedTab === PROFILE.TABS.POSTS} onClick={() => setSelectedTab(PROFILE.TABS.POSTS)}>Posts</Tab>
                        <Tab theme={theme} isSelected={selectedTab === PROFILE.TABS.CONTACTS} onClick={() => setSelectedTab(PROFILE.TABS.CONTACTS)}>Contacts</Tab>
                    </Tabs>
                    <TabContent>
                        { renderSelectedTab(selectedTab, theme) }
                    </TabContent>
                </MainView>
            </ProfileWrapper>
            <ChatWrapper>
                <QuickChat theme={theme} elevation={ELEVATION[1]} />
            </ChatWrapper>
        </ProfileStyled>
    )
}

export default Profile
