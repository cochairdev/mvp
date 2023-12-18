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
  border-radius: 12px;
  height: fit-content;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`
export const EmailContainer = styled.span`
  color: ${colors.brand.primary};
  font-weight: 400;
`
export const ResendEmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`
export const ResendEmailButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
`
