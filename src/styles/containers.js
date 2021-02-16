import styled from 'styled-components'

export const AppContainer = styled.main`
  background: var(--light);
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: scroll;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const NavBar = styled.nav`
  height: 95vh;
  max-width: 95vh;
  background: var(--main);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 0.25em;
  margin: 0.5em 1em;
  box-shadow: var(--shadow-nav);
  transition: transform 350ms;
  &:hover {
    transform: scale(1.008);
  }
  @media (max-width: 768px) {
    height: min-content;
    flex-direction: row;
  }
`
export const IconsContainer = styled.nav`
  background: transparent;
  display: flex;
  flex: 0.25;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 0.5em;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`
export const SettingsContainer = styled.nav`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
`
export const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 5em;
  margin: 1em;
`
