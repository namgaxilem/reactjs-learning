const config = {
  localStorage: {
    userKey: 'auth_user'
  },
  catalogURL: process.env.REACT_APP_CATALOG_URL || 'http://localhost:8080/v1/catalog'
}

const AADConfig = {
  appId: 'dc8f3d14-355c-4223-80cb-23e938c26027',
  redirectUri: 'http://localhost:3000',
  scopes: [
      'user.read'
  ],
  authority: 'https://login.microsoftonline.com/d400665f-0274-46fe-899b-38ed0885144a'
}

export { config, AADConfig }