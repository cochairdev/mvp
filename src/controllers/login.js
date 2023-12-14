import prisma from '@prisma'

export const getUser = async (req, res) => {
  const { email } = req.body
  const user = await prisma.users.findFirst({
    where: {
      email: email || '-',
    },
  })
  if (!user) {
    return res.status(401).json({ message: 'User not found' })
  } else {
    return res.json(user)
  }
}
