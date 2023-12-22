import Slider from 'react-slick'

import { Text } from '@components/atoms'

import * as S from './styles'

import { colors } from '@/theme'

export const LoginLayout = ({ step, children, subtitle, footer }) => (
  <S.MainContainer>
    <S.SectionContainers>
      <S.FormSection>
        <S.Logo
          width={168}
          height={38}
          alt="Cochair Logo"
          src="images/logo.svg"
        />
        <div>
          <Text variant="title">Welcome to Cochair</Text>
          <Text variant="body" color={colors.grays.text}>
            {subtitle}
          </Text>
          <S.StepsContainer>
            {step && <Text variant="body"> {step} </Text>}
            {step && (
              <Text variant="body" color={colors.brand.primary}>
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
                Simplify Networking
              </Text>
            </S.CarrouselItem>
          </Slider>
        </S.CarrouselContainer>
      </S.CarouselSection>
    </S.SectionContainers>
  </S.MainContainer>
)
