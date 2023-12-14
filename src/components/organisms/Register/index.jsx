import { Text } from '@components/atoms'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import Slider from 'react-slick'
import { colors } from '@/theme'

import * as S from './styles'

export const Register = ({ email }) => {
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    for (let pair of data.entries()) {
      console.log(pair[0] + ': ' + pair[1])
    }
  }
  return (
    <S.MainContainer>
      <S.SectionContainers>
        <S.FormSection>
          <S.Logo
            width={168}
            height={38}
            alt="Cochair Logo"
            src="images/logo.svg"
          />
          <Text variant="title">Welcome to Cochair</Text>
          <Text variant="body"> Select method to sign up </Text>
          <S.StepsContainer>
            <Text variant="body"> 2 </Text>
            <Text variant="body" color={colors.brand.primary}>
              /2
            </Text>
          </S.StepsContainer>
          <form onSubmit={handleSubmit}>
            <S.NonFullWidthInputContainer>
              <TextField name="name" label="Name" variant="outlined" />
              <TextField name="lastName" label="Last Name" variant="outlined" />
            </S.NonFullWidthInputContainer>
            <TextField
              label="Company"
              variant="outlined"
              fullWidth
              name="company"
              margin={'normal'}
            />

            <TextField
              label="Position"
              variant="outlined"
              fullWidth
              margin={'normal'}
              name="position"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I am an employee of this company."
              name="IsEmployee"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I am going to manage the Cochair platform for my company."
              name="IsManager"
            />
            <TextField
              label="Email"
              value={email || ''}
              variant="filled"
              fullWidth
              disabled={email}
              margin={'normal'}
              name="email"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              onClick={() => {
                console.log('clicked')
              }}
            >
              Next
            </Button>
          </form>
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
}
