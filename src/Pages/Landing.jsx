import { authenticate } from '../store'
import { Btn, Title, SubHeading } from '../styles/items'
import { LandingContainer } from '../styles/containers'
import { useLogin } from '../utils/msalConfig'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()

  const handleLogin = async () => {
    const account = await useLogin()
    if (account) {
      authenticate(account)
    }
    history.push('/')
  }

  return (
    <LandingContainer>
      <Title landing xl>
        Dunwoody
        <b />
        <SubHeading landing>school of</SubHeading>
        <b />
        Engineering
      </Title>
      <Btn secondary onClick={handleLogin}>
        login
      </Btn>
    </LandingContainer>
  )
}
