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

    console.log(client)
    if (account) return client
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
