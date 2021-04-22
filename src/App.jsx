import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { useProxy } from 'valtio'
import store from './store'
import { ThemeProvider } from 'styled-components'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { AppContainer } from './styles/containers'

import StudentNav from './components/StudentNav'

import Landing from './Pages/Landing'
import PageSwitch from './routes/PageSwitch'
import GlobalStyles from './theme/globalStyles'
import theme from './theme/theme'
import AdminNav from './components/AdminNav'

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`graphel error :( -> ${message} @ ${location} / ${path}`)
    })
  }
  if (networkErrors) {
    networkErrors.map(({ message, location, path }) => {
      alert(`network error :( -> ${message} @ ${location} / ${path}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://127.0.0.1:4000/graphql' }),
])

// connect to graphql API
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export const App = () => {
  const { isAuthenticated, isAdmin } = useProxy(store)

  return isAuthenticated ? (
    <AppContainer>
      {isAdmin ? <AdminNav /> : <StudentNav />}
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
