import * as S from './styles'

export const FormControlLabel = props => (
  <S.StyledFormControlLabel {...props}>
    {props.children}
  </S.StyledFormControlLabel>
)
