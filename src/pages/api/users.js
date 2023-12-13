import { createRouter } from 'next-connect'

import { getUsers } from '@/controllers/users'
import middlewareToken from '@/middlewares/token'

const router = createRouter()

router.use(middlewareToken).get(getUsers)
export default router.handler()
export const config = {
  api: {
    externalResolver: true,
  },
}
