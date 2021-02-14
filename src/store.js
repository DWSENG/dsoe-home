import { proxy } from 'valtio'

const store = proxy({
  isAuthenticated: false,
  user: {},
})

export const authenticate = () => {
  store.isAuthenticated = true
}
export const signout = () => {
  store.isAuthenticated = false
}

export default store
