import { createSlice } from '@reduxjs/toolkit'
import PROFILE from '../constants/profile'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      style: PROFILE.PROFILE_STYLES.MINIFIED,
    },
    reducers: {
      setProfileStyle: (state, action) => state.profile.style = action.payload,
    },
})

export const { setProfileStyle } = profileSlice.actions

export const getProfile = state => state.profile

export default profileSlice.reducer