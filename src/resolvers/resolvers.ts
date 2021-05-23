import PrismaTypes, { PrismaClient } from '@prisma/client'
import { UserInputError } from 'apollo-server-errors'
import { QueryUserArgs } from '../@types/graphql'
const prisma = new PrismaClient()

// TODO: 型綺麗にしておく
export const resolvers = {
  Query: {
    users: async(): Promise<PrismaTypes.User[]> => {
      return await prisma.user.findMany({
        include: {
          posts: true
        }
      })
    },
    user: async(_: any, query: QueryUserArgs): Promise<PrismaTypes.User | null> => {
      const id = query?.id
      if (!id || id < 1) {
        throw new UserInputError('Invalid argument valueeeeeee', {
          argumentName: 'id'
        })
      }
      return await prisma.user.findFirst({
        where: {
          id: id
        }
      })
    }
  }
}