import prisma from '@prisma'
export const getUsers = async (req, res) => {
  const users = await prisma.users.findMany()
  res.json(users)
}
