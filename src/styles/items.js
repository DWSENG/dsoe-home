import styled from 'styled-components'

export const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 5em;
  margin: 1em;
`
export const Btn = styled.button`
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
export const Heading = styled.h1`
  color: ${({ main }) => (main ? 'var(--dark)' : 'var(--light)')};
  font-size: 3em;
`
export const Login = styled.section`
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
    justify-content: space-evenly;
  }
`
export const NavBtn = styled.button`
  color: var(--light);
  background: transparent;
  border: none;
  padding: 0.75em 1em;
  margin-bottom: 3em;
  border-radius: 0.75em;
  transition: transform 350ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    color: var(--main);
    background: var(--light);
    -webkit-box-shadow: var(--shadow-icon);
    -moz-box-shadow: var(--shadow-icon);
    box-shadow: var(--shadow-icon);
  }
  h3 {
    margin-left: 1em;
    font-size: 13px;
  }
  @media (max-width: 768px) {
    transition: all 500ms ease;
    margin: 0 1em;
  }
`
export const SelectBtn = styled(NavBtn)`
  cursor: pointer;
  color: var(--main);
  background: var(--light);
  transition: transform 350ms;
  margin-bottom: 3em;
  -webkit-box-shadow: var(--shadow-icon);
  -moz-box-shadow: var(--shadow-icon);
  box-shadow: var(--shadow-icon);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    margin: 0 1em;
  }
`
export const Logo = styled.img`
  height: 30px;
  margin: 1em 1em 2em 1em;
  transition: transform 350ms;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin: 0.5em;
  }
`
