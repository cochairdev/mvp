// import prisma from '@prisma'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUser = async (req, res) => {
  const { email } = req.body
  const user = await prisma.users.findFirst({
    where: {
      email: email || '-',
    },
  })
  if (!user) {
    const newUser = await prisma.users.create({
      data: {
        email: email,
      },
    })
    // return res.status(401).json({ message: 'User not found' })
    return res.json(newUser)
  } else {
    return res.json(user)
  }
}

export const verifyEmail = async (req, res) => {
  const { email } = req.body
  const user = await prisma.users.findFirst({
    where: { email },
  })
  const updatedUser = await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      isEmailVerified: true,
    },
  })
  res.json(updatedUser)
}
