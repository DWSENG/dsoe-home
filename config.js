// config file that exports a config object for simplier access throughout the app

const NODE_ENV = 'development'
const MSAL_CLIENT_ID = 'bb72efbb-2629-49d9-b101-d2c8055237dc'
const MSAL_AUTHORITY =
  'https://login.microsoftonline.com/33b985f1-1b99-4741-b69c-46b9998d9b18'
const MSAL_PROD_REDIRECT_URI = 'https://dsoe.netlify.app/'
const MSAL_DEV_REDIRECT_URI = 'http://localhost:8000/'

const redirectPath =
  NODE_ENV === 'production' ? MSAL_PROD_REDIRECT_URI : MSAL_DEV_REDIRECT_URI

module.exports = {
  publicPath: redirectPath,
  mode: NODE_ENV,
  msal: {
    auth: { clientId: MSAL_CLIENT_ID, authority: MSAL_AUTHORITY },
    redirectUri: redirectPath,
    postLogoutRedirectUri: redirectPath,
  },
}
