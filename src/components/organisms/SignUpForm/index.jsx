import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FormControl, IconButton, InputAdornment } from '@mui/material'

import { Button, InputLabel, OutlinedInput, TextField } from '@components/atoms'

import * as S from './styles'

export const SignUpForm = () => {
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    const values = Object.fromEntries(data.entries())
    return values
    // for (let pair of data.entries()) {
    //   console.log(pair[0] + ': ' + pair[1])
    // }
  }
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <S.InputsContainer>
        <S.NonFullWidthInputContainer>
          <TextField name="name" label="Name" variant="outlined" required />
          <TextField
            name="lastName"
            label="Last name"
            variant="outlined"
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
        />
        <S.NonFullWidthInputContainer>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              required
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
              id="outlined-adornment-rePassword"
              type={showPassword ? 'text' : 'password'}
              required
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
    </form>
  )
}
