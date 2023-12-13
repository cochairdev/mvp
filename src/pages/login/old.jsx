'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { Login } from '@components'
import FullscreenLoading from '@components/molecules/FullscreenLoading'

const IndexPage = () => {
  const router = useRouter()
  const { status } = useSession()
  // const status = 'unauthenticated'

  if (status === 'loading')
    return (
      <FullscreenLoading
        subTitle="Please wait while we redirect you..."
        imgSrc="/images/svg/spinner.svg"
      />
    )

  if (status === 'unauthenticated')
    return (
      <>
        <Login callbackUrl={router.query?.callbackUrl} />
      </>
    )

  router.push('/')
}

export default IndexPage
