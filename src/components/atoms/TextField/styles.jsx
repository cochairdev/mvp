import { OutlinedInput, TextField } from '@mui/material'
import { styled } from '@mui/system'

export const StyledButtonContainer = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
  '& .MuiInputBase-input': {
    color: 'blue', // This will change the text color
  },
})

export const StyledOutlinedInput = styled(OutlinedInput)({
  '& .MuiInputBase-input': {
    // This component is used on Password field
    color: 'blue', // This will change the text color
  },
  marginBottom: '20px',
})
