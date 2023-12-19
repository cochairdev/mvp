import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'

import * as S from './styles'

export const SignUpDetails = () => {
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    const values = Object.fromEntries(data.entries())
    return values
    // for (let pair of data.entries()) {
    //   console.log(pair[0] + ': ' + pair[1])
    // }
  }
  return (
    <form onSubmit={handleSubmit}>
      <S.NonFullWidthInputContainer>
        <TextField name="name" label="Name" variant="outlined" />
        <TextField name="lastName" label="Last Name" variant="outlined" />
      </S.NonFullWidthInputContainer>
      <TextField
        label="Company"
        variant="outlined"
        fullWidth
        name="company"
        margin={'normal'}
      />

      <TextField
        label="Position"
        variant="outlined"
        fullWidth
        margin={'normal'}
        name="position"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="I am an employee of this company."
        name="IsEmployee"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="I am going to manage the Cochair platform for my company."
        name="IsManager"
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Next
      </Button>
    </form>
  )
}
