import styled from 'styled-components'
import Link from 'next/link'
import { colors } from '@theme'

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

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

export const StyledLink = styled(Link)`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  letter-spacing: -0.2px;
  color: #3F51B5;
  text-decoration: none;
  &:hover,
  &:active,
  &:visited {
    text-decoration: underline;
    color: #3F51B5;
  }
`
