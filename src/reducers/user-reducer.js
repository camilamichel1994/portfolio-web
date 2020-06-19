import { createSlice } from '@reduxjs/toolkit'

const mock = {
  name: { first: 'Rachel', last: 'McAdams' },
  backgroundImage: { url: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' },
  profileImage: { url: 'https://www.rbsdirect.com.br/imagesrc/24943251.jpg?w=700' },
  occupation: 'Actress',
  likes: 2137,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      ...mock,
    },
    reducers: {
      setUserName: (state, action) => state.user.name = action.payload,
      setBackgroundImage: (state, action) => state.user.backgroundImage = action.payload,
      setProfileImage: (state, action) => state.user.profileImage = action.payload,
      setOccupation: (state, action) => state.user.occupation = action.payload,
      setLikes: (state, action) => state.user.likes = action.payload,
    },
})

export const { setUserName, setBackgroundImage, setProfileImage, setOccupation, setLikes } = userSlice.actions

export const getUser = state => state.user

export default userSlice.reducer