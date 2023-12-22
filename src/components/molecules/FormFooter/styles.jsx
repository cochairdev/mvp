import styled from 'styled-components'

import { colors } from '@theme'

export const ActionText = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  color: ${colors.brand.primary};
`

export const MainContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`
