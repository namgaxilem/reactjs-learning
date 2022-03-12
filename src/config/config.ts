const config = {
  localStorage: {
    userKey: 'user_token'
  },
  catalogURL: process.env.REACT_APP_CATALOG_URL || 'http://localhost:8080/v1/catalog'
}

export { config }