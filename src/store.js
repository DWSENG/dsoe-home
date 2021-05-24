// this file contains the global state store
// using Valtio as the state library - https://github.com/pmndrs/valtio (basically a simplified version of a state system like redux or modx)

import { proxy } from 'valtio'

// store object that is accessible throughout the app
const store = proxy({
  isAuthenticated: true,
  client: { first: 'david', last: 'magnuson', email: 'magdavj@dunwoody.edu' },
  isAdmin: false,
  courseSearch: '',
  studentSearch: '',
  termSearch: '',
  plan: {},
})

// functions that mutate the state that are accessible throughout the app
export const authenticate = (client) => {
  store.isAuthenticated = true
  store.client = client
}
export const signout = () => {
  store.isAuthenticated = false
  store.client = {}
}
export const toggleAdmin = () => {
  store.isAdmin = !store.isAdmin
}

export const setCourseSearch = (search) => {
  store.courseSearch = search
}

export const setPlan = (plan) => {
  store.plan = plan
}

export default store
