import styled from 'styled-components'

import colors from '@/theme/colors'

export const StyledButtonContainer = styled.div`
  margin-top: 20px;
  border-radius: 100px;
`

export const StyledPasswordResetButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: right;
  margin-left: auto;
  width: -webkit-fill-available;
  color: ${colors.brand.primary};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
