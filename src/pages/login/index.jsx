import { useCallback } from 'react'
import { useAuth } from 'reactfire'
import { useRequestState } from '@/lib/hooks/useRequestState'
import { TextField, Button } from '@mui/material'
import { sendSignInLinkToEmail } from 'firebase/auth'

const EmailLinkAuth = () => {
  const auth = useAuth()
  const { state, setLoading, setData, setError } = useRequestState()

  const onSubmit = useCallback(
    async event => {
      event.preventDefault()

      // read the email field of the form
      const email = event.target[0].value

      setLoading(true)

      // set up return URL (where we will redirect the user)
      const settings = {
        url: getAuthUrl(),
        handleCodeInApp: true,
      }

      try {
        // send sign in link
        console.log(email)
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
    return <span>Yay, link successfully sent!</span>
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
