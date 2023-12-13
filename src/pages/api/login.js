import { createRouter } from 'next-connect'

import { getUser } from '@/controllers/login'
import middlewareToken from '@/middlewares/token'

const router = createRouter()

router.use(middlewareToken).get(getUser)
export default router.handler()
export const config = {
  api: {
    externalResolver: true,
  },
}
