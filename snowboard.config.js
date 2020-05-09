module.exports = {
  html: {
    basePath: './',
    sidebar: {
      groupOrder: 'auto'
    },
    playground: {
      enabled: true,
      env: 'production',
      environment: {
        production: {
          url: 'https://kitsu.io/api/edge',
          auth: {
            name: 'oauth2',
            options: {
              tokenUrl: 'https://kitsu.io/api/oauth/token',
              callbackUrl: 'https://kitsu.io',
              clientId: ''
            }
          }
        }
      }
    }
  }
}
