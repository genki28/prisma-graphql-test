import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema/schema'
import { resolvers } from './resolvers/resolvers'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const graphQLServer = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
})
graphQLServer.applyMiddleware({ app })

const server = app.listen(PORT, () => {
  console.log(`🚀Runnning graphQL: http://localhost:${PORT}/graphql`)
})

export { app, server }