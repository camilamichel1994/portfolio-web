import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import { getProfile } from '../../reducers/profile-reducer'
import { getUser } from '../../reducers/user-reducer'
import ProfileCard from '../../components/ProfileCard'
import QuickChat from '../../components/QuickChat'
import ELEVATION from '../../constants/elevation'
import PROFILE from '../../constants/profile'
import ProfileTab from '../../components/ProfileTab'
import ContactsTab from '../../components/ContactsTab'
import PostsTab from '../../components/PostsTab'
import Card from '../../components/Card'
import {
    ProfileStyled,
    SideWrapper,
    ProfileWrapper,
    MainWrapper,
    Tabs,
    Tab,
    TabContent,
    PhotosWrapper,
    PhotosRow,
    PhotosColumn,
    Photo,
} from './ProfileStyled'

const renderSelectedTab = (index, theme) => {
    switch (index) {
        case PROFILE.TABS.PROFILE:
            return <ProfileTab panels={panels} theme={theme} />
        case PROFILE.TABS.POSTS:
            return <PostsTab theme={theme} />
        case PROFILE.TABS.CONTACTS:
            return <ContactsTab theme={theme} />
        default:
            return <ProfileTab theme={theme} />
    }
}

const renderPhotos = theme => {
    return (
        <PhotosColumn>
            <PhotosRow>
                <Photo image="https://dummyimage.com/100x100/e12f5e/ffffff.png" />
                <Photo image="https://dummyimage.com/100x100/129A7D/ffffff.png" />
                <Photo image="https://dummyimage.com/100x100/726A95/ffffff.png" />
            </PhotosRow>
            <PhotosRow>
                <Photo image="https://dummyimage.com/100x100/0E9AA7/ffffff.png" />
                <Photo image="https://dummyimage.com/100x100/BBEAA6/ffffff.png" />
            </PhotosRow>
        </PhotosColumn>
    )
}

const Profile = () => {
    const { value: theme } = useSelector(getTheme)
    const { style: profileStyle } = useSelector(getProfile)
    const user = useSelector(getUser)
    const [selectedTab, setSelectedTab] = useState(PROFILE.TABS.PROFILE)

    return (
        <ProfileStyled theme={theme}>
            <ProfileWrapper>
                <ProfileCard theme={theme} data={user} model={profileStyle} elevation={ELEVATION[1]} />
                <MainWrapper>
                    <Card theme={theme} elevation={ELEVATION[1]}>
                        <Tabs>
                            <Tab theme={theme} isSelected={selectedTab === PROFILE.TABS.PROFILE} onClick={() => setSelectedTab(PROFILE.TABS.PROFILE)}>Profile</Tab>
                            <Tab theme={theme} isSelected={selectedTab === PROFILE.TABS.POSTS} onClick={() => setSelectedTab(PROFILE.TABS.POSTS)}>Updates</Tab>
                            <Tab theme={theme} isSelected={selectedTab === PROFILE.TABS.CONTACTS} onClick={() => setSelectedTab(PROFILE.TABS.CONTACTS)}>Contacts</Tab>
                        </Tabs>
                        <TabContent>
                            { renderSelectedTab(selectedTab, theme) }
                        </TabContent>
                    </Card>
                </MainWrapper>
            </ProfileWrapper>
            <SideWrapper>
                <QuickChat theme={theme} elevation={ELEVATION[1]} />
                <PhotosWrapper>
                    <Card theme={theme} elevation={ELEVATION[1]} title="Photos">
                        { renderPhotos(theme) }
                    </Card>
                </PhotosWrapper>
            </SideWrapper>
        </ProfileStyled>
    )
}

const panels = [
    {
        icon: 'faUser',
        color: '#D92027',
        title: 'About me',
        description: 'Basic information about myself',
        content: 'Lorem ipsum dolor sit amet',
        id: 1,
    },
    {
        icon: 'faFolder',
        color: '#129A7D',
        title: 'Projects',
        description: 'A collection of Github repositories',
        content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: 2,
    },
    {
        icon: 'faGripHorizontal',
        color: '#D1A958',
        title: 'Skills',
        description: 'Things I can do',
        content: 'Ut enim ad minim veniam.',
        id: 3,
    },
    {
        icon: 'faCubes',
        color: '#E12F5F',
        title: 'Career',
        description: "Where I've worked at",
        content: 'Duis aute irure dolor enim ad minim veniam.',
        id: 4,
    },
]

export default Profile
