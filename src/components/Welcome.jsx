import { Welcome, Btn, Heading } from '../styles/items'
import { useProxy } from 'valtio'
import store, { signout } from '../store'
import { logout } from '../utils/msalConfig'

export default () => {
  const { user } = useProxy(store)

  const handleLogout = () => {
    logout() // loutout user from azureAD
    signout() // delete user from state
  }
  return (
    <Welcome>
      <Heading dark>{user.firstName}</Heading>
      <Btn onClick={handleLogout}>Logout</Btn>
    </Welcome>
  )
}
