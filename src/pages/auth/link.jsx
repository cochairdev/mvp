import { useAuth } from 'reactfire'
import { useRouter } from 'next/router'
import { useEffect, useRef, useCallback } from 'react'
import { useRequestState } from '@/lib/hooks/useRequestState'
import { isBrowser } from '@/lib/generic/isBrowser'
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'

const EmailLinkAuthPage = () => {
  const auth = useAuth()
  const router = useRouter()
  const requestExecutedRef = useRef()
  const { state, setError, loading } = useRequestState()

  const redirectToAppHome = useCallback(() => {
    // const appHome = '/login'
    // return router.push(appHome)
  }, [router])

  // in this effect, we execute the functions to log the user in
  useEffect(() => {
    console.log(auth?.currentUser?.email)

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

        // redirect user to the home page
        await redirectToAppHome()
      } catch (e) {
        if (e) {
          setError(e.code)
        } else {
          setError('generic')
        }
      }
    })()
  }, [auth, loading, redirectToAppHome, setError])

  return (
    <>
      {loading && <>Loading...</>}
      {state.success && <>Success! Redirecting...</>}
      {state.error && <>Error: {state.error} </>}
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
