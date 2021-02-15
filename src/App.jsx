import { useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import { useProxy } from 'valtio'
import store from './store'
import PageSwitch from './routes/PageSwitch'
import { AppContainer } from './styles/containers'

import Nav from './components/Nav'

export const App = () => {
  const [page, setPage] = useState('landing')
  const { isAuthenticated } = useProxy(store)

  return (
    <AppContainer>
      {/* if authenticated show nav bar */}
      {isAuthenticated && <Nav page={page} setPage={setPage} />}
      <PageSwitch />
    </AppContainer>
  )
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
