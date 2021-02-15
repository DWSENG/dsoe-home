import styled from 'styled-components'

export default () => (
  <Welcome>
    <Heading main>welcome</Heading>
    <Btn>Logout</Btn>
  </Welcome>
)

const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 5em;
  margin: 1em;
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
const Heading = styled.h1`
  color: ${({ main }) => (main ? 'var(--dark)' : 'var(--light)')};
  font-size: 3em;
`
