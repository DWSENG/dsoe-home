import { Login, Btn, Heading } from '../styles/items'

export default () => (
  <Login>
    <Heading>
      Dunwoody
      <b />
      <Span>School of </Span>
      <b />
      Engineering
    </Heading>
    <Btn big light onClick={() => login()}>
      Log in
    </Btn>
  </Login>
)
