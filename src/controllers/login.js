import prisma from '@prisma'

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
