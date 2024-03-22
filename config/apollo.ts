import { graphqlEndpoint } from './cms';
import { defineApolloClient } from '@nuxtjs/apollo'

const isProd = process.env.NETLIFY_ENV === 'production'

export default defineApolloClient({
  httpEndpoint: graphqlEndpoint,
  httpLinkOptions: {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(!isProd && {'X-Include-Drafts': 'true'})
    }
  },
  websocketsOnly: false,
  connectToDevTools: true,
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: 'apollo:my-app.token',
  tokenStorage: 'cookie',
  authType: 'Bearer',
  authHeader: 'Authorization'
})
