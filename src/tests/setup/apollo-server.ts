import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server-express'
import { schema } from '../../schema/schema'
import { resolvers } from '../../resolvers/resolvers'
import path from 'path'
import dotenv from 'dotenv'

export const createApolloServerForTesting = (): ApolloServerTestClient => {
  const NODE_ENV = process.env.NODE_ENV
  dotenv.config({ path: path.resolve(__dirname, `../../config/.env.${NODE_ENV}`)})

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
  })
  const testClient = createTestClient(server)
  return testClient
}