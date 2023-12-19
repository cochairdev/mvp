import { useCallback, useState } from 'react'
import { useAuth } from 'reactfire'
import { Button, TextField } from '@mui/material'
import { sendSignInLinkToEmail } from 'firebase/auth'

import { EmailVerify } from '@/components/organisms'
import { useRequestState } from '@/lib/hooks/useRequestState'

const EmailLinkAuth = () => {
  const auth = useAuth()
  const { state, setLoading, setData, setError } = useRequestState()

  const [inputEmail, setInputEmail] = useState('')

  const onSubmit = useCallback(
    async event => {
      event.preventDefault()

      // read the email field of the form
      const email = event.target[0].value
      setInputEmail(email)

      setLoading(true)

      // set up return URL (where we will redirect the user)
      const settings = {
        url: getAuthUrl(),
        handleCodeInApp: true,
      }

      try {
        // send sign in link
        await sendSignInLinkToEmail(auth, email, settings)

        // save email in storage, so we can compare
        // it when the user uses the link from the email
        storeEmailInStorage(email)

        // success (turns state.success to "true")
        setData()
      } catch (error) {
        setError(error)
      }
    },
    [auth, setData, setError, setLoading],
  )

  {
    /* SUCCESS! */
  }
  if (state.success) {
    return (
      <EmailVerify
        email={inputEmail}
        sendEmail={() => {
          sendSignInLinkToEmail(auth, email, settings)
        }}
      />
    )
  }
  return (
    <form className={'w-full'} onSubmit={onSubmit}>
      <div className={'flex flex-col space-y-2'}>
        <TextField></TextField>

        <Button type="submit" loading={state.loading}>
          {state.loading && <>Sending Email Link...</>}
          {!state.loading && <>Send Email Link</>}
        </Button>
      </div>

      {state.error && <span>Sorry, we encountered an error</span>}
    </form>
  )
}

function getAuthUrl() {
  const origin = window.location.origin
  const path = '/auth/link'

  return [origin, path].join('')
}

function storeEmailInStorage(email) {
  window.localStorage.setItem('emailForSignIn', email)
}

export default EmailLinkAuth
