import { useEffect } from 'react'
import { useAuth } from 'reactfire'
import { sendEmailVerification } from 'firebase/auth'

import { EmailVerify } from '@components/organisms/EmailVerify'

import { useAxios } from '@/lib/axios/useAxios'

const Verify = () => {
  const user = useAuth()
  const axios = useAxios()

  useEffect(() => {
    axios.post('/api/login', {
      email: user?.currentUser?.email,
    })
    if (user.currentUser) sendEmailVerification(user.currentUser)
  }, [user])
  return (
    <EmailVerify
      email={'example@mail.com'}
      sendEmail={() => {
        sendEmailVerification(user.currentUser)
      }}
    />
  )
}

export default Verify
