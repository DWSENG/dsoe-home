import { Btn, Text, Title } from '../styles/items'
import { Page } from '../styles/containers'
import { useProxy } from 'valtio'
import store, { signout, toggleAdmin } from '../store'
import { logout } from '../utils/msalConfig'

export default () => {
  const { userAccount } = useProxy(store)
  const firstMiddle = userAccount?.name?.split(',')[1]
  const firstName = firstMiddle?.split(' ')[1]

  const handleLogout = async (userAccount) => {
    if (confirm('Are you sure you want to logout?')) {
      const logoutSuccessful = logout(userAccount) // loutout user from azureAD

      if (logoutSuccessful) {
        signout(userAccount) // delete user from state
      }
    }
  }
  return (
    <Page column justifyContent="center">
      <Title>{firstName}</Title>
      <Text margin="1rem" fontSize=".75rem">
        {userAccount.username}
      </Text>
      <Btn tertiary onClick={toggleAdmin}>
        switch modes
      </Btn>
      <Btn invert onClick={(userAccount) => handleLogout(userAccount)}>
        logout
      </Btn>
    </Page>
  )
}
