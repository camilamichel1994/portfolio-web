import React from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import {
    HomeStyled
} from './HomeStyled'

const Home = () => {
    const { value: theme } = useSelector(getTheme)

    return (
        <HomeStyled>
            hello home
        </HomeStyled>
    )
}

export default Home
