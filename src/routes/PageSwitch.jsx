// this file contains all of the routes within the application

import { Route, Switch } from 'react-router-dom'

import About from '../Pages/About'
import Error from '../Pages/Error'
import Courses from '../Pages/Courses'
import Course from '../Pages/Course'
import Dashboard from '../Pages/Dashboard'
import Plan from '../Pages/Plan'
import Students from '../Pages/Students'
import Terms from '../Pages/Terms'
import Term from '../Pages/Term'

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/courses/:id" component={Course} />
    <Route exact path="/plan" component={Plan} />
    <Route exact path="/students" component={Students} />
    <Route exact path="/terms" component={Terms} />
    <Route exact path="/terms/:id" component={Term} />
    <Route exact path="/about" component={About} />
    <Route path="/" component={Error} />
  </Switch>
)
