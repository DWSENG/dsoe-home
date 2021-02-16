import { PublicClientApplication } from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: 'bb72efbb-2629-49d9-b101-d2c8055237dc',
    authority:
      'https://login.microsoftonline.com/33b985f1-1b99-4741-b69c-46b9998d9b18',
  },
  redirectUri: 'https://dsoe.netlify.app/',
  postLogoutRedirectUri: 'https://dsoe.netlify.app/',
}

var loginRequest = {
  scopes: ['user.read'],
}

const msalInstance = new PublicClientApplication(msalConfig)

export const useLogin = async () => {
  try {
    const { account } = await msalInstance.loginPopup(loginRequest)
    console.log(account)
    if (account) return account
  } catch (err) {
    console.log(err)
  }
}
export const logout = async () => {
  try {
    msalInstance.logout(/*{ account: currentAccount }*/)
  } catch (err) {
    console.log(err)
  }
}
