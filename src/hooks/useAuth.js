// Auth hook that returns the user object

import { PublicClientApplication } from '@azure/msal-browser'
import { useQuery } from '@apollo/client'

import { msal } from '../../config'
import { GET_USER_BY_AZURE_TOKEN } from '../api/queries'

const msalInstance = new PublicClientApplication(msal)
const loginRequest = {
  scopes: ['user.read'],
}

export const useLogin = async () => {
  try {
    const { account } = await msalInstance.loginPopup(loginRequest)
    const {
      name,
      username: email,
      idTokenClaims: { aud },
    } = account
    const firstMiddle = name.split(',')[1]
    const lastName = name.split(',')[0]
    const firstName = firstMiddle.split(' ')[1]

    const client = {
      first: firstName,
      last: lastName,
      email: email,
      azureToken: aud,
    }

    localStorage.setItem('azureToken', aud)
    return client
  } catch (err) {
    console.log(err)
  }
}

export const logout = (account) => {
  try {
    msalInstance.logout({ account: account })
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
