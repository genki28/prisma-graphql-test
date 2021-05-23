import { createApolloServerForTesting } from './setup/apollo-server'
import { setUpDatabase, resetDatabase } from './setup/database'
import { PrismaClient } from '@prisma/client'
import { gql } from 'apollo-server-express'

const prisma = new PrismaClient()
const testClient = createApolloServerForTesting()
const GET_USERS = gql`
  query {
    users {
      id
      email
      name
    }
  }
`

// TODO: この辺もう少し考えたいなぁ・・・
// TODO: いったん力技で
// beforeAll(async (done) => {
//   await setUpDatabase()
//   done()
// })

// afterAll(async (done) => {
//   await prisma.$disconnect()
//   await resetDatabase()
//   done()
// })

describe("テストのテスト", () => {
  it("graphqlテストのテスト", async (done) => {
    console.log(process.env.DATABASE_URL)
    const result = await testClient?.query({
      query: GET_USERS
    })

    const resData = result.data.users[0]
    expect(resData.name).toBe('Bob')
    expect(resData.email).toBe('bob@gmail.com')
    done()
  })
})