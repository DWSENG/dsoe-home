// user dashboard page component

import { Btn, Text, Title } from '../styles/items'
import { Page } from '../styles/containers'
import { useProxy } from 'valtio'
import store, { signout, toggleAdmin } from '../store'
import { logout } from '../hooks/useAuth'

export default () => {
  const {
    client: { first, last, email },
    isAdmin,
  } = useProxy(store)

  const handleLogout = async (client) => {
    if (confirm('Are you sure you want to logout?')) {
      const logoutSuccessful = logout(client) // loutout user from azureAD

      if (logoutSuccessful) {
        signout(client) // delete user from state
      }
    }
  }
  return (
    <Page column justifyContent="center">
      <Title>
        {first} {last}
      </Title>
      <Text margin="1rem" fontSize=".75rem">
        {email}
      </Text>
      <Btn tertiary onClick={toggleAdmin}>
        {isAdmin ? 'student' : 'admin'} mode
      </Btn>
      <Btn invert onClick={(client) => handleLogout(client)}>
        logout
      </Btn>
    </Page>
  )
}
