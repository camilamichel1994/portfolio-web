import React from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from '../../reducers/theme-reducer'
import Card from '../../components/Card'
import QuickChat from '../../components/QuickChat'
import ELEVATION from '../../constants/elevation'
import {
    HomeStyled,
    LeftWrapper,
    RightWrapper,
    CenterWrapper,
} from './HomeStyled'

const Home = () => {
    const { value: theme } = useSelector(getTheme)
    const elevationLevel = 0

    return (
        <HomeStyled theme={theme}>
            <LeftWrapper>
                <Card theme={theme} elevation={ELEVATION[elevationLevel]}>foo</Card>
            </LeftWrapper>
            <CenterWrapper>
                <Card theme={theme} elevation={ELEVATION[elevationLevel]}>new post</Card>
            </CenterWrapper>
            <RightWrapper>
                <QuickChat theme={theme} elevation={ELEVATION[elevationLevel]} />
            </RightWrapper>
        </HomeStyled>
    )
}

export default Home
