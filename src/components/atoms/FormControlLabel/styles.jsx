import { FormControlLabel } from '@mui/material'
import { styled } from '@mui/system'

import { colors } from '@theme'

export const StyledFormControlLabel = styled(FormControlLabel)({
  marginRight: '0px',
  marginBottom: '0px',
  '& .MuiTypography-root': {
    color: colors.grays.info,
    fontSize: '14px',
    letterSpacing: '-0.3px',
  },
})
