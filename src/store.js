import { proxy } from 'valtio'

const store = proxy({
  isAuthenticated: false,
  user: {},
})

export const authenticate = (account) => {
  store.isAuthenticated = true
  addUser(account)
}
export const signout = () => {
  store.isAuthenticated = false
  store.user = {}
}
const addUser = ({ name, username }) => {
  store.user.firstName = name.split(' ')[1]
  store.user.lastName = name.split(' ')[0].split(',')[0]
  store.user.middleName = name.split(' ')[2]
  store.user.username = username.split('@')[0]
  store.user.email = username
}

export default store
