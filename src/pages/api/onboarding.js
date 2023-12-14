import { createRouter } from 'next-connect'

import { updateOboarding } from '@/controllers/onboarding'
import middlewareToken from '@/middlewares/token'

const router = createRouter()

router.use(middlewareToken).put(updateOboarding)
export default router.handler()
export const config = {
  api: {
    externalResolver: true,
  },
}
