import Image from 'next/image'
import styled from 'styled-components'

import { colors } from '@theme'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colors.neutrals.x200};
  justify-content: center;
  align-items: center;
`
export const SectionContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 640px;
  border-radius: 100px;
`
export const FormSection = styled.section`
  width: 100%;
  height: 90%;
  min-width: 400px;
  max-width: 400px;
  padding: 64px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px 0 0 12px;
  background-color: ${colors.neutrals.x100};
`
export const CarouselSection = styled.div`
  width: 100%;
  height: 90%;
  max-width: 400px;
  padding: 64px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 12px 12px 0;
  background-color: ${colors.brand.indigo};
`

export const CarrouselContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0;
  position: relative;
`
export const CarrouselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;
  align-items: center;
  height: 350px;
  text-align: -webkit-center;
`
export const Logo = styled(Image)``
export const CarouselImage = styled(Image)`
  margin-bottom: 24px;
`

export const StepsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 32px;
`
