import Image from 'next/image'

import {
  ImageContainer,
  LoadingContainer,
  SubTitle,
  Title,
} from '@components/molecules/FullscreenLoading/styles'

export const FullscreenLoading = ({
  title,
  subTitle,
  imgSrc,
  extraContent,
}) => (
  <LoadingContainer>
    <div>
      {imgSrc && (
        <ImageContainer>
          <Image src={imgSrc} width="24" height="24" alt="Loading" />
        </ImageContainer>
      )}
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {typeof extraContent === 'function' ? extraContent() : extraContent}
    </div>
  </LoadingContainer>
)
