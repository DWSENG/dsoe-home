import styled from 'styled-components'
import { useProxy } from 'valtio'
import store, { authenticate, signout } from '../store'

export default () => {
  const { isAuthenticated } = useProxy(store)

  return isAuthenticated ? (
    <LandingPage>
      <Heading main>hello</Heading>
      <Btn onClick={signout}>Logout</Btn>
    </LandingPage>
  ) : (
    <Login>
      <Heading>
        Dunwoody
        <b />
        <Span>School of </Span>
        <b />
        Engineering
      </Heading>
      <Btn big light onClick={authenticate}>
        Log in
      </Btn>
    </Login>
  )
}
const Login = styled.section`
  display: flex;
  background: var(--main);
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Heading = styled.h1`
  color: ${({ main }) => (main ? 'var(--dark)' : 'var(--light)')};
  font-size: 3em;
`
const Span = styled.h1`
  color: var(--light4);
  font-size: 0.75em;
  margin-left: 0.5em;
`
const Btn = styled.button`
  cursor: pointer;
  color: ${({ light }) => (light ? 'var(--main)' : 'var(--light)')};
  background: ${({ light }) => (light ? 'var(--light)' : 'var(--main)')};
  transition: transform 350ms;
  font-size: ${({ big }) => (big ? '1.25em' : '.75em')};
  border: none;
  padding: 0.75em 1em;
  border-radius: 0.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: var(--shadow-icon);
  -moz-box-shadow: var(--shadow-icon);
  box-shadow: var(--shadow-icon);
  &:hover {
    transform: scale(1.05);
  }
`
const LandingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 5em;
  margin: 1em;
`
