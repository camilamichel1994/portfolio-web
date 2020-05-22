import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../reducers/theme-reducer'
import profileReducer from '../reducers/profile-reducer'
import userReducer from '../reducers/user-reducer'

export default configureStore({
  reducer: {
    theme: themeReducer,
    profile: profileReducer,
    user: userReducer,
  },
})
