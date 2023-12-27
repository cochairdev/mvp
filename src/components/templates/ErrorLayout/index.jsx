import Button from '@mui/material/Button'
import Image from 'next/image'

import * as S from './styles'

import { Text } from '@/components/atoms/Text'

export const ErrorLayout = ({
  title,
  description,
  imageSrc,
  primaryActionText,
  onClick = () => null,
}) => (
  <S.ContentContainer>
    <div>
      {imageSrc && (
        <S.ImageContainer>
          <Image alt="error-image" src={imageSrc} width="570" height="380" />
        </S.ImageContainer>
      )}
      <S.PageTitle>{title}</S.PageTitle>
      <Text>{description}</Text>
      <div>
        <Button variant="contained" color="primary" onClick={onClick}>
          &larr; {primaryActionText}
        </Button>
      </div>
    </div>
  </S.ContentContainer>
)
