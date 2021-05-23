import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server-express'
import { schema } from '../../schema/schema'
import { resolvers } from '../../resolvers/resolvers'

export const createApolloServerForTesting = (): ApolloServerTestClient => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
  })
  const testClient = createTestClient(server)
  return testClient
}