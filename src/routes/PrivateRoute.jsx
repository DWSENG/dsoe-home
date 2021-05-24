// this is a Route component checking if the user is authenticated
// NOT currently in use
const { Route, Redirect } = require('react-router-dom')
import { useProxy } from 'valtio'
import store from '../store'

export default ({ children, ...rest }) => {
  const { isAuthenticated } = useProxy(store)
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/" />)}
    />
  )
}
