import React from 'react';
import THEME, { COLORS } from '../constants/theme'
import PostsTab from '../components/PostsTab'
import ELEVATION from '../constants/elevation'


export default {
    title: 'PostTabs',
    component: PostsTab,
}


export const Default = () => 

<PostsTab theme={THEME.LIGHT}  elevation={ELEVATION[4]} />