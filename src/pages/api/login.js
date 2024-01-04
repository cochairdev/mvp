import { createRouter } from 'next-connect'

import { getUser, verifyEmail } from '@/controllers/login'
import middlewareToken from '@/middlewares/token'

const router = createRouter()

router.use(middlewareToken).post(getUser).put(verifyEmail)
export default router.handler()
export const config = {
  api: {
    externalResolver: true,
  },
}
