import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import styled from 'styled-components'

import About from '../Pages/About'
import Courses from '../Pages/Courses'
import Dashboard from '../Pages/Dashboard'
import Landing from '../Pages/Landing'
import Plan from '../Pages/Plan'

export default () => (
  <PageSwitch>
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
  </PageSwitch>
)
const PageSwitch = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
