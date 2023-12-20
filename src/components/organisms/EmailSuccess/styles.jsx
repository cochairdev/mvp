import { colors } from '@theme'
import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 100%;
  z-index: 1;
  background-color: ${colors.neutrals.x200};
  justify-content: center;
  align-items: center;
`

export const SectionContainers = styled.section`
  padding: 32px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 640px;
  border-radius: 20px;
  height: fit-content;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`
