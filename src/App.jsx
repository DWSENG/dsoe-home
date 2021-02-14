import { useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import { useProxy } from 'valtio'
import store from './store'
import PrivateRoute from './routes/PrivateRoute'

import Nav from './components/Nav'
import Dashboard from './Pages/Dashboard'
import Landing from './Pages/Landing'
import Courses from './Pages/Courses'
import Plan from './Pages/Plan'
import About from './Pages/About'
import styled from 'styled-components'

export const App = () => {
  const [selected, setSelected] = useState('dashboard')
  const { isAuthenticated } = useProxy(store)

  return (
    <AppContainer>
      {/* if they're authenticated show the nav bar */}
      {isAuthenticated && <Nav selected={selected} setSelected={setSelected} />}
      <PageContianer>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/courses">
            <Courses />
          </PrivateRoute>
          <PrivateRoute path="/plan">
            <Plan />
          </PrivateRoute>
          <Route path="/about" component={About} />
        </Switch>
      </PageContianer>
    </AppContainer>
  )
}

const AppContainer = styled.main`
  background: var(--light);
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: scroll;
`
const PageContianer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
