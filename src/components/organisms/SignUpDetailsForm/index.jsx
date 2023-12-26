import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@components/atoms'

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
      <TextField
        label="Company"
        variant="outlined"
        fullWidth
        name="company"
        margin={'normal'}
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
      <TextField
        label="Position"
        variant="outlined"
        fullWidth
        margin={'normal'}
        name="position"
      />
      <S.StyledButtonContainer>
        <Button color="primary" type="submit" fullWidth>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          fullWidth
        >
          Sign Up
        </Button>
      </S.StyledButtonContainer>
    </form>
  )
}
