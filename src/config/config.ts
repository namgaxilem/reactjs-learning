const config = {
  localStorage: {
    userKey: 'auth_user'
  },
  catalogURL: process.env.REACT_APP_CATALOG_URL || 'http://localhost:8080/v1/catalog'
}

const AADConfig = {
  appId: 'dc8f3d14-355c-4223-80cb-23e938c26027',
  redirectUri: 'http://localhost:3000',
  logoutRedirectUri: 'http://localhost:3000/login',
  scopes: [
      'user.read',
      'api://9911dd89-b9c5-4de4-b3bb-265d5c214e91/read-test'
  ],
  authority: 'https://login.microsoftonline.com/d400665f-0274-46fe-899b-38ed0885144a'
}

export { config, AADConfig }