import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    // users: async() => {
    //   const users = await prisma.user.findMany({
    //     include: {
    //       posts: true
    //     }
    //   })
    //   return users
    // }
    hello: () => 'hello, world'
  }
}