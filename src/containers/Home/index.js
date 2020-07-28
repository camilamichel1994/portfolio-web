import React from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import PostsTab from '../../components/PostsTab'
import THEME from   '../../constants/theme'
import {
    HomeStyled
} from './HomeStyled'

const Home = () => {
    const { value: theme } = useSelector(getTheme)

    return (
        <HomeStyled theme={theme}>
            A Camila está mexendo aqui!

            <PostsTab  theme={THEME.LIGHT} />
        </HomeStyled>
    )
}

export default Home
