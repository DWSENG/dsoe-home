import { useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { useProxy } from 'valtio'
import store from './store'
import PageSwitch from './routes/PageSwitch'

import Nav from './components/Nav'
import styled from 'styled-components'

export const App = () => {
  const [page, setPage] = useState('landing')
  const { isAuthenticated } = useProxy(store)

  return (
    <AppContainer>
      {/* if they're authenticated show the nav bar */}
      {isAuthenticated && <Nav page={page} setPage={setPage} />}
      <PageSwitch />
    </AppContainer>
  )
}

const AppContainer = styled.main`
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
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
