import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { useProxy } from 'valtio'
import store from './store'
import { ThemeProvider } from 'styled-components'

import { AppContainer } from './styles/containers'
import Nav from './components/Nav'
import Landing from './Pages/Landing'
import PageSwitch from './routes/PageSwitch'

import GlobalStyles from './theme/globalStyles'
import theme from './theme/theme'

export const App = () => {
  const { isAuthenticated } = useProxy(store)

  return isAuthenticated ? (
    <AppContainer>
      <Nav />
      <PageSwitch />
    </AppContainer>
  ) : (
    <AppContainer>
      <Landing />
    </AppContainer>
  )
}

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
