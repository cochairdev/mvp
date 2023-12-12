import * as S from './styles'

export const Button = ({ size = 'default', variant = 'primary', ...props }) => {
  const ButtonComponent = (
    <S.Button
      {...props}
      $variant={variant}
      $size={size}
      $disabled={props.disabled}
    >
      {props.children}
    </S.Button>
  )

  return props.href ? (
    <S.Link href={props.href} target={props.target}>
      {ButtonComponent}
    </S.Link>
  ) : (
    ButtonComponent
  )
}
