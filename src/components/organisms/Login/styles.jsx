import styled from 'styled-components'
import Image from 'next/image'

import { borders, breakpoints, colors } from '@theme'

export const MainContainer = styled.div`
  display: flex;
`
export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 64px;
`
export const CarrouselContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 1.5rem;
`
export const Logo = styled(Image)``
