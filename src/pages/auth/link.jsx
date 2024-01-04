import { useEffect, useRef } from 'react'
import { useAuth } from 'reactfire'

import { EmailSuccess } from '@/components/organisms'
import { useAxios } from '@/lib/axios/useAxios'
import { isBrowser } from '@/lib/generic/isBrowser'
import { useRequestState } from '@/lib/hooks/useRequestState'

const EmailLinkAuthPage = () => {
  const auth = useAuth()
  const axios = useAxios()

  const requestExecutedRef = useRef()
  const { state, setError, setState } = useRequestState()

  // in this effect, we execute the functions to log the user in
  useEffect(() => {
    // let's prevent duplicate calls (which should only happen in dev mode)
    if (requestExecutedRef.current) {
      return
    }

    const href = getOriginHref()

    // do not run on the server
    if (!href) {
      setError('generic')

      return
    }

    void (async () => {
      requestExecutedRef.current = true

      try {
        await axios.post('/api/login', {
          email: auth?.currentUser?.email,
        })

        setState({ success: true })
      } catch (e) {
        if (e) {
          setError(e.code)
        } else {
          setError('generic')
        }
      }
    })()
  }, [auth])

  return (
    <>
      <EmailSuccess />
      {/* {state.success && <EmailSuccess />} */}
      {state.error && <>Error: {state.error} </>}
    </>
  )
}

function getOriginHref() {
  if (!isBrowser()) {
    return
  }

  return window.location.href
}

export default EmailLinkAuthPage
