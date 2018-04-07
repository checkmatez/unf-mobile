import { ApolloClient } from 'apollo-client'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'

import { GRAPHQL_ENDPOINT, GRAPHQL_WEBSOCKET_ENDPOINT } from './appConfig'

const configureApollo = () => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  })

  const wsLink = new WebSocketLink({
    uri: GRAPHQL_WEBSOCKET_ENDPOINT,
    options: {
      reconnect: true,
    },
  })

  const link = split(
    // subscriptions over websockets, queries and mutations over http
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
  )

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })

  return { client }
}

export default configureApollo
