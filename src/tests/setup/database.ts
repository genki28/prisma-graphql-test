import { PrismaClient } from '@prisma/client'
import util from 'util'
import childProcess from 'child_process'
const exec = util.promisify(childProcess.exec)
const prisma = new PrismaClient()

export const setUpDatabase = async(): Promise<void> => {
  await exec('npx run test-migrate')
  await exec('npx run test-generate')
  await exec('npx run test-seed')

  prisma.$disconnect()
}

export const resetDatabase = async(): Promise<void> => {
  // resetを無理やりするとseed走るため全て削除するが・・・
  await exec('npx run test-reset')

  prisma.$disconnect()
}