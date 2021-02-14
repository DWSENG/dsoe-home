import styled from 'styled-components'
import { useProxy } from 'valtio'
import store, { authenticate, signout } from '../store'

const LandingP = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 5em;
  margin: 1em;
`

export default () => {
  const { isAuthenticated } = useProxy(store)

  return isAuthenticated ? (
    <LandingP>
      welcome
      <p>logout</p>
      <button onClick={signout}>Logout</button>
    </LandingP>
  ) : (
    <LandingP>
      welcome
      <p>login to begin</p>
      <button onClick={authenticate}>Log in</button>
    </LandingP>
  )
}
