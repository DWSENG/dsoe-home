import { PublicClientApplication } from '@azure/msal-browser'

export const msalConfig = {
  auth: {
    clientId: 'bb72efbb-2629-49d9-b101-d2c8055237dc',
    authority:
      'https://login.microsoftonline.com/33b985f1-1b99-4741-b69c-46b9998d9b18',
  },
  redirectUri: 'https://dsoe.netlify.app/',
  postLogoutRedirectUri: 'https://dsoe.netlify.app/',
}

export const loginRequest = {
  scopes: ['user.read'],
}

const msalInstance = new PublicClientApplication(msalConfig)

export const useLogin = async () => {
  try {
    const { account } = await msalInstance.loginPopup(loginRequest)
    console.log(account)
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
