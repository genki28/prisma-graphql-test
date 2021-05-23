import { PrismaClient } from '@prisma/client'
import { UserInputError } from 'apollo-server-errors'
import { QueryUserArgs } from '../@types/graphql'
const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    users: async() => {
      const users = await prisma.user.findMany({
        include: {
          posts: true
        }
      })
      return users
    },
    user: (_: any, query: QueryUserArgs) => {
      const id = query?.id
      if (!id || id < 1) {
        throw new UserInputError('Invalid argument valueeeeeee', {
          argumentName: 'id'
        })
      }
    }
  }
}