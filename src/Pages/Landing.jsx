import { useProxy } from 'valtio'
import store from '../store'
import Welcome from '../components/Welcome'
import Login from '../components/Login'

export default () => {
  const { isAuthenticated } = useProxy(store)

  return isAuthenticated ? <Welcome /> : <Login />
}
