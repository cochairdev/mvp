import Slider from 'react-slick'

import { Text } from '@components/atoms'

import * as S from './styles'

import { colors } from '@/theme'

export const LoginLayout = ({ step, children, subtitle, title, footer }) => (
  <S.MainContainer>
    <S.SectionContainers>
      <S.FormSection>
        <S.Logo
          width={149}
          height={24}
          alt="Cochair Logo"
          src="images/logo.svg"
        />
        <div>
          <Text variant="title">{title}</Text>
          <Text variant="info" color={colors.grays.text}>
            {subtitle}
          </Text>
          <S.StepsContainer>
            {step && (
              <Text variant="info" color={colors.brand.primary}>
                {step}
              </Text>
            )}
            {step && (
              <Text variant="info" color={colors.neutrals.x400}>
                /2
              </Text>
            )}
          </S.StepsContainer>
          {children}
        </div>
        {footer}
      </S.FormSection>
      <S.CarouselSection>
        <S.CarrouselContainer>
          <Slider
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
          >
            <S.CarrouselItem>
              <S.CarouselImage
                src={'/images/carouselPlaceholder.svg'}
                height={288}
                width={288}
              />
              <Text align="center" variant="titleL" color="white">
                Simplify Networking
              </Text>
            </S.CarrouselItem>
            <S.CarrouselItem>
              <S.CarouselImage
                src={'/images/carouselPlaceholder.svg'}
                height={288}
                width={288}
              />
              <Text align="center" variant="titleL" color="white">
                Amplify Collaborations
              </Text>
            </S.CarrouselItem>
            <S.CarrouselItem>
              <S.CarouselImage
                src={'/images/carouselPlaceholder.svg'}
                height={288}
                width={288}
              />
              <Text align="center" variant="titleL" color="white">
                Unlock Partnerships
              </Text>
            </S.CarrouselItem>
          </Slider>
        </S.CarrouselContainer>
      </S.CarouselSection>
    </S.SectionContainers>
  </S.MainContainer>
)
