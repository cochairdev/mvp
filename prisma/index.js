import { PrismaClient } from '@prisma/client'

// https://github.com/prisma/prisma/issues/1983#issuecomment-620621213
let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }

  prisma = global.prisma
}

export default prisma
