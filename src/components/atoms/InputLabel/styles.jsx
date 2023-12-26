import { InputLabel } from '@mui/material'
import { styled } from '@mui/system'

import { colors } from '@theme'

export const StyledInputLabel = styled(InputLabel)({
  color: colors.neutrals.x900,
  '.MuiInputLabel-outlined': {
    color: colors.neutrals.x900,
  },
  '&.MuiInputLabel-shrink': {
    color: colors.neutrals.x900, // This will change the color when the label is shrunk (at the top of the input box)
  },
})
