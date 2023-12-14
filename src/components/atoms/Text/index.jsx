import styled from 'styled-components'
import { colors } from '@theme'
import { createElement } from 'react'

export const baseTypographyStyles = {
  titleL: {
    fontSize: '24px',
    fontFamily: 'Montserrat',
    fontWeight: 700,
  },
  title: {
    fontSize: '20px',
    fontFamily: 'Montserrat',
    fontWeight: 700,
  },
  body: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
}

const getComponentName = variant => {
  switch (variant) {
    case 'titleL':
      return 'h1'
    case 'title':
      return 'h1'
    case 'bodyMedium':
    case 'bodyRegular':
    case 'bodyRegularBold':
    case 'bodySmall':
    case 'bodySmallBold':
    case 'bodyXSmall':
    case 'bodyXSmallBold':
    case 'bodyMicro':
    case 'bodyMicroBold':
    default:
      return 'p'
  }
}

export const Text = styled(({ children, ...props }) =>
  createElement(props.as || getComponentName(props.variant), props, children),
)`
  color: ${({ color }) => color || colors.neutrals.x900};
  letter-spacing: 0;
  line-height: 1.375;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  text-align: ${({ align }) => align || 'left'};
  ${({ variant }) => variant && baseTypographyStyles[variant]}
`
