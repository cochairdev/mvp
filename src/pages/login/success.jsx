import { useEffect } from 'react'
import { useAuth } from 'reactfire'
import { onAuthStateChanged } from 'firebase/auth'

import { EmailSuccess } from '@components/organisms'

import { useAxios } from '@/lib/axios/useAxios'

const Verify = () => {
  const auth = useAuth()
  const axios = useAxios()

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        try {
          await axios.put('/api/login', {
            email: auth?.currentUser?.email,
          })
        } catch (e) {
          console.error(e)
        }
      }
    })
  }, [])

  return <EmailSuccess />
}

export default Verify
