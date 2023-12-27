import * as S from './styles'

export const TextField = props => (
  <S.StyledButtonContainer {...props}>{props.children}</S.StyledButtonContainer>
)

export const OutlinedInput = props => (
  <S.StyledOutlinedInput {...props}>{props.children}</S.StyledOutlinedInput>
)
