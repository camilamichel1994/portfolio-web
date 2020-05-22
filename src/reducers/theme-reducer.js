import { createSlice } from '@reduxjs/toolkit'
import THEME, { THEME_NAME } from '../constants/theme'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      value: THEME[THEME_NAME.LIGHT],
    },
    reducers: {
      setDarkTheme: state => state.theme = THEME[THEME_NAME.DARK],
      setLightTheme: state => state.theme = THEME[THEME_NAME.LIGHT],
      setMidnightTheme: state => state.theme = THEME[THEME_NAME.MIDNIGHT],
    },
})

export const { setDarkTheme, setLightTheme, setMidnightTheme } = themeSlice.actions

export const getTheme = state => state.theme

export default themeSlice.reducer