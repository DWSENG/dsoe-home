import { PublicClientApplication } from '@azure/msal-browser'

import { msal } from '../../config'

const msalInstance = new PublicClientApplication(msal)
const loginRequest = {
  scopes: ['user.read'],
}

export const useLogin = async () => {
  try {
    const { account } = await msalInstance.loginPopup(loginRequest)
    // TODO: query internal db to see if user is registered
    if (account) return account
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
