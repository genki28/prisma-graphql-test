import { PrismaClient } from '@prisma/client'
import util from 'util'
import childProcess from 'child_process'
const exec = util.promisify(childProcess.exec)
const prisma = new PrismaClient()

export const setUpDatabase = async (): Promise<void> => {
  await exec('yarn test-migrate')
  await exec('yarn test-generate')
  await exec('yarn test-seed')

  prisma.$disconnect()
}

export const resetDatabase = async (): Promise<void> => {
  await exec('yarn test-reset')

  prisma.$disconnect()
}