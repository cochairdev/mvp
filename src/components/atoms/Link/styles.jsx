import Link from 'next/link'
import styled from 'styled-components'

import { colors } from '@/theme'

export const StyledLink = styled(Link)`
  color: ${colors.brand.indigo};
  text-decoration: underline;
  cursor: pointer;
`
