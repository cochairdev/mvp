import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FormControl, IconButton, InputAdornment } from '@mui/material'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'

import { Button, InputLabel, OutlinedInput, TextField } from '@components/atoms'

import * as S from './styles'

import { useRequestState } from '@/lib/hooks/useRequestState'

export const SignUpForm = () => {
  const router = useRouter()
  const { state, setData, setError } = useRequestState()
  const onSubmit = () => {
    const { email, password } = formik.values
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setData(userCredential)
        router.push('/login/verify')
      })
      .catch(error => {
        setError(error)
      })
  }
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
    rePassword: yup
      .string('Re-type your password')
      .min(8)
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password is required'),
    name: yup.string('Enter your name').min(1).required('Name is required'),
    lastName: yup
      .string('Enter your last name')
      .min(1)
      .required('Last name is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rePassword: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  })

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <S.InputsContainer>
        <S.NonFullWidthInputContainer>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            required
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
          />
          <TextField
            name="lastName"
            label="Last name"
            variant="outlined"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            onBlur={formik.handleBlur}
            required
          />
        </S.NonFullWidthInputContainer>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          margin={'normal'}
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <S.NonFullWidthInputContainer>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
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

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-rePassword">
              Re-type password
            </InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              name="rePassword"
              required
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              error={
                formik.touched.rePassword && Boolean(formik.errors.rePassword)
              }
              helperText={formik.touched.rePassword && formik.errors.rePassword}
              onBlur={formik.handleBlur}
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
              label="Re-type password"
            />
          </FormControl>
        </S.NonFullWidthInputContainer>
      </S.InputsContainer>

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Next
      </Button>
      {state.error && <span>Seems like you already have an account</span>}
    </form>
  )
}
