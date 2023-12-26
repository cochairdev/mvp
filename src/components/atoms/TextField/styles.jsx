import { OutlinedInput, TextField } from '@mui/material'
import { styled } from '@mui/system'

export const StyledButtonContainer = styled(TextField)({
  '& label.Mui-focused': {
    color: 'red',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#CCCCCC',
    },
    '&:hover fieldset': {
      borderColor: '#777777',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3F51B5',
    },
  },
  '& .MuiInputBase-input': {
    color: '#333333', // This will change the text color
  },
  '& .MuiInputLabel-root': {
    color: '#999999', // This will change the placeholder/label text color
    fontSize: '16px',
    letterSpacing: '-0.3px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#3F51B5', // This will keep the placeholder/label text color green when focused
  },
  marginBottom: '16px',
  marginTop: '0px',
})

export const StyledOutlinedInput = styled(OutlinedInput)({
  '& .MuiInputBase-input': {
    // This component is used on Password field
    color: '#333333', // This will change the text color
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#CCCCCC', // This will change the border color
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#777777', // This will change the border color on hover
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#3F51B5', // This will change the border color when focused
  },
  marginBottom: '0px',
  marginTop: 'px',
})
