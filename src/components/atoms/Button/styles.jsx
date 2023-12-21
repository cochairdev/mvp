import styled from 'styled-components'

import { borders, colors } from '@theme'

export const Button = styled.button`
  font-family: 'Roboto';
  height: 2.87em;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  text-transform: none;
  font-weight: 500;
  font-size: 14px;
  background-color: ${({ variant }) =>
    variant === 'contained' ? colors.brand.primary : colors.neutrals.x100};
  border: ${borders.outlinedButton};
  border-radius: 20px;
  padding: 0 1em;
  color: ${({ variant }) =>
    variant === 'contained' ? colors.neutrals.white : colors.brand.primary};
  cursor: pointer;

  &:disabled,
  &:hover {
    background-color: ${({ variant }) =>
      variant === 'contained'
        ? colors.brandSunDisabled
        : colors.grays.buttonDisabled};
  }
`
export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`
