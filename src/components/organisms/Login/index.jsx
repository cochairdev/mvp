import { signIn } from 'next-auth/react'

import { Text, Button } from '@components/atoms'
import { colors } from '@/theme'

import * as S from './styles'

const Login = ({ callbackUrl }) => (
  <S.MainContainer>
    <S.FormContainer>
      <S.Logo
        width={168}
        height={38}
        alt="Cochair Logo"
        src="images/logo.svg"
      />
      <Text variant="title">Welcome to Cochair</Text>
      <Text variant="body"> Select method to sign up </Text>
      <Text variant="body"> 1 </Text>
      <Text variant="body" color={colors.brand.primary}>
        /2
      </Text>
      <Button variant="primary" onClick={() => true}>
        <S.Logo
          width={18}
          height={18}
          alt="Google Logo"
          src="images/googleLogo.svg"
        />
        Google
      </Button>
      <Button variant="primary" onClick={() => true}>
        <S.Logo
          width={18}
          height={18}
          alt="Linkedin Logo"
          src="images/linkedinLogo.svg"
        />
        Linkeidn
      </Button>
    </S.FormContainer>
    <S.CarrouselContainer></S.CarrouselContainer>
  </S.MainContainer>
)

export default Login
