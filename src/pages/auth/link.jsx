import { useAuth, useUser } from 'reactfire'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useRequestState } from '@/lib/hooks/useRequestState'
import { isBrowser } from '@/lib/generic/isBrowser'
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import axios from 'axios'
import { EmailSuccess } from '@/components/organisms'

const EmailLinkAuthPage = () => {
  const auth = useAuth()
  const user = useUser()
  const router = useRouter()
  const requestExecutedRef = useRef()
  const { state, setError, loading, setState } = useRequestState()

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

    // let's verify the auth method is email link
    if (!isSignInWithEmailLink(auth, href)) {
      setError('generic')

      return
    }

    const email = getStorageEmail()

    // let's get email used to get the link
    if (!email) {
      setError('generic')

      return
    }

    void (async () => {
      requestExecutedRef.current = true

      try {
        // sign in with link, and retrieve the ID Token
        await signInWithEmailLink(auth, email, href)

        // let's clear the email from the storage
        clearEmailFromStorage()

        setState({ success: true })
      } catch (e) {
        if (e) {
          setError(e.code)
        } else {
          setError('generic')
        }
      }
    })()
  }, [auth, loading])

  return (
    <>
      <EmailSuccess />
      {/* {state.success && <EmailSuccess />} */}
      {/* {state.error && <>Error: {state.error} </>} */}
    </>
  )
}

function getStorageEmail() {
  if (!isBrowser()) {
    return
  }

  return window.localStorage.getItem('emailForSignIn')
}

function clearEmailFromStorage() {
  window.localStorage.removeItem('emailForSignIn')
}

function getOriginHref() {
  if (!isBrowser()) {
    return
  }

  return window.location.href
}

export default EmailLinkAuthPage
