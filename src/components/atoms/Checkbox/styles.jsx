import { Checkbox } from '@mui/material'
import { styled } from '@mui/system'

import { colors } from '@theme'

export const StyledCheckbox = styled(Checkbox)({
  borderRadius: '100px',
  color: colors.brand.primary,
  '&.Mui-checked': {
    color: colors.brand.primary,
  },
  '& svg': {
    borderRadius: '100px', // This will apply border radius to the svg element
  },
})
