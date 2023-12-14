import prisma from '@prisma'

export const updateOboarding = async (req, res) => {
  const { id } = req.body

  const update = await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      didCompleteOnboarding: true,
    },
  })
  return res.json(update)
}
