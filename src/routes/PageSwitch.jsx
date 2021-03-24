import { Route, Switch } from 'react-router-dom'

import About from '../Pages/About'
import Error from '../Pages/Error'
import Courses from '../Pages/Courses'
import Course from '../Pages/Course'
import CourseEdit from '../Pages/CourseEdit'
import Dashboard from '../Pages/Dashboard'
import Plan from '../Pages/Plan'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/:id" component={Course} />
      <Route exact path="/courses/:id/edit" component={CourseEdit} />
      <Route exact path="/plan" component={Plan} />
      <Route exact path="/about" component={About} />
      <Route path="/" component={Error} />
    </Switch>
  )
}
