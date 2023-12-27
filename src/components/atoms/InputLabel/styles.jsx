import { InputLabel } from '@mui/material'
import { styled } from '@mui/system'

import { colors } from '@theme'

export const StyledInputLabel = styled(InputLabel)({
  color: '#999999', // This will change the placeholder/label text color
  fontSize: '16px',
  letterSpacing: '-0.3px',
  '.MuiInputLabel-outlined': {
    color: 'red',
  },
  '&.MuiInputLabel-shrink': {
    color: '#999999', // This will change the color when the label is shrunk (at the top of the input box)
  },
  '&.MuiInputLabel-root.Mui-focused': {
    color: colors.brand.primary, // This will keep the placeholder/label text color green when focused
  },
  marginBottom: '16px',
  marginTop: '0px',
})
