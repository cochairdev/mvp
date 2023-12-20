import styled from 'styled-components'
import { colors } from '@/theme'
import Link from 'next/link'

export const StyledLink = styled(Link)`
  color: ${colors.brand.indigo};
  text-decoration: underline;
  cursor: pointer;
`
