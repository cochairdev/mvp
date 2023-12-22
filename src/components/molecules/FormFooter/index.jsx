import * as S from './styles'

import { Text } from '@/components/atoms'
import { colors } from '@/theme'

export const FormFooter = ({ text, actionText, callback }) => (
  <S.MainContainer>
    <Text variant="info" color={colors.grays.info}>
      {text}
    </Text>
    <S.ActionText onClick={callback}>
      {
        <Text variant="info" color={colors.brand.primary}>
          {actionText}
        </Text>
      }
    </S.ActionText>
  </S.MainContainer>
)
