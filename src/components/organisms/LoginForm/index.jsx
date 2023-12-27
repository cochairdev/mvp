import { useCallback, useState } from 'react'
import { useAuth } from 'reactfire'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FormControl, IconButton, InputAdornment } from '@mui/material'
import { sendSignInLinkToEmail } from 'firebase/auth'

import { Button, InputLabel, OutlinedInput, TextField } from '@components/atoms'

import * as S from './styles'

import { EmailVerify } from '@/components/organisms'
import { useRequestState } from '@/lib/hooks/useRequestState'

export const LoginForm = () => {
  const auth = useAuth()
  const { state, setLoading, setData, setError } = useRequestState()

  const [inputEmail, setInputEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

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
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          name="email"
          type="email"
          margin={'normal'}
        />

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            required
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <S.StyledButtonContainer>
          <Button
            type="submit"
            loading={state.loading}
            variant="contained"
            fullWidth
          >
            {state.loading && <>Sending Email Link...</>}
            {!state.loading && <>Log in</>}
          </Button>
        </S.StyledButtonContainer>
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
