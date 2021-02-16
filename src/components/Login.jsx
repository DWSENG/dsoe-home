import { Login, Btn, Heading, SubHeading } from '../styles/items'
import { useLogin } from '../utils/msalConfig'
import { useHistory } from 'react-router-dom'
import { authenticate } from '../store'

export default () => {
  const history = useHistory()

  const handleLogin = async () => {
    const account = await useLogin()
    authenticate(account)
    history.push('/')
  }

  return (
    <Login>
      <Heading>
        Dunwoody
        <b />
        <SubHeading>School of </SubHeading>
        <b />
        Engineering
      </Heading>
      <Btn big light onClick={handleLogin}>
        Log in
      </Btn>
    </Login>
  )
}
