import { authenticate } from '../store'
import { Btn, Title, SubHeading } from '../styles/items'
import { LandingContainer, Wrapper } from '../styles/containers'
import { useLogin } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()

  const handleLogin = async () => {
    const client = await useLogin()
    if (client) {
      authenticate(client)
    }
    history.push('/')
  }
  const handleGuestLogin = () => {
    const client = { name: ' , Guest' }
    if (client) {
      authenticate(client)
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
      <Wrapper
        column
        width="max-content"
        alignItems="center"
        justifyContent="center"
      >
        <Btn secondary onClick={handleLogin}>
          login
        </Btn>
        <br />
        <Btn link onClick={handleGuestLogin}>
          continue as guest...
        </Btn>
      </Wrapper>
    </LandingContainer>
  )
}
