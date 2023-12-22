import Slider from 'react-slick'

import { Text } from '@components/atoms'

import * as S from './styles'

import { colors } from '@/theme'

export const LoginLayout = ({ step, children }) => (
  <S.MainContainer>
    <S.SectionContainers>
      <S.FormSection>
        <div>
          <S.Logo
            width={168}
            height={38}
            alt="Cochair Logo"
            src="images/logo.svg"
          />
          <Text variant="title">Welcome to Cochair</Text>
          <S.StepsContainer>
            {step === 2 && <Text variant="body"> {step} </Text>}
            {step === 2 && (
              <Text variant="body" color={colors.brand.primary}>
                /2
              </Text>
            )}
          </S.StepsContainer>
        </div>
        {children}
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
