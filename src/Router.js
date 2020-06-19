import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTheme } from './reducers/theme-reducer'
import { getUser } from './reducers/user-reducer'
import styled, { createGlobalStyle } from 'styled-components'
import Home from './containers/Home'
import Profile from './containers/Profile'
import CreatePanel from './containers/CreatePanel'
import Navbar from './components/Navbar'
import ELEVATION from './constants/elevation'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.BACKGROUND};
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Router = () => {
    const { value: theme } = useSelector(getTheme)
    const user = useSelector(getUser)

    return (
        <BrowserRouter>
            <GlobalStyle theme={theme} />
            <Navbar theme={theme} elevation={ELEVATION[1]} user={user} />
            <Wrapper>
              <Switch>
                  <Route component={Home} path="/" exact />
                  <Route component={Profile} path="/profile" exact />
                  <Route component={CreatePanel} path="/new-panel" exact />
              </Switch>
            </Wrapper>
        </BrowserRouter>
    )
}

export default Router