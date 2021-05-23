import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema/schema'
import { resolvers } from './resolvers/resolvers'
import path from 'path'
import dotenv from 'dotenv'

const app = express()
const PORT = 8080

const NODE_ENV = process.env.NODE_ENV
dotenv.config({ path: path.resolve(__dirname, `./config/.env.${NODE_ENV}`)})

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