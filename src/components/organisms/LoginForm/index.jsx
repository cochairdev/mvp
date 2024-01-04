import { useState } from 'react'
import { useAuth } from 'reactfire'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FormControl, IconButton, InputAdornment } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'

import { Button, InputLabel, OutlinedInput, TextField } from '@components/atoms'

import * as S from './styles'

import { useRequestState } from '@/lib/hooks/useRequestState'

export const LoginForm = ({ forgotPasswordCallback }) => {
  const auth = useAuth()
  const { state, setLoading, setData, setError } = useRequestState()
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8)
      .required('Password is required'),
  })

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const onSubmit = async event => {
    event.preventDefault()

    // read the email field of the form
    const email = formik.values.email
    const password = formik.values.password

    setLoading(true)

    try {
      // send sign in link
      await signInWithEmailAndPassword(auth, email, password)

      // save email in storage, so we can compare
      // it when the user uses the link from the email
      storeEmailInStorage(email)
      router.push('login/verify')

      // success (turns state.success to "true")
      setData()
    } catch (error) {
      setError(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  })

  {
    /* SUCCESS! */
  }

  return (
    <form className={'w-full'} onSubmit={onSubmit}>
      <div className={'flex flex-col space-y-2'}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          name="email"
          type="email"
          margin={'normal'}
        />

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
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
        <S.StyledPasswordResetButton onClick={forgotPasswordCallback}>
          Forgot password?
        </S.StyledPasswordResetButton>
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
function storeEmailInStorage(email) {
  window.localStorage.setItem('emailForSignIn', email)
}
