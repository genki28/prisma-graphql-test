import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function main() {
  const bob = await prisma.user.upsert({
    where: {
      id: 1
    },
    update: {},
    create: {
      name: 'Bob',
      email: 'bob@gmail.com',
      posts: {
        create: [
          {
            title: 'Hey!',
            content: 'hello world!'
          }
        ]
      }
    }
  })
  const alia = await prisma.user.upsert({
    where: {
      id: 2
    },
    update: {},
    create: {
      name: 'alia',
      email: 'alia@gmail.com',
      posts: {
        create: [
          {
            title: 'hey, bob',
            content: 'play!'
          }
        ]
      }
    }
  })
  console.log({alia: alia, bob: bob})
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    prisma.$disconnect()
    process.exit()
  })