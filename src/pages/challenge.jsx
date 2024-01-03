import { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from 'styled-components'

export const getServerSideProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const beers = await res.json()
  return {
    props: {
      beers,
    },
  }
}

const FlexContianer = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100%;
`

const Beers = ({ beers }) => {
  const [beersShown, setBeersShown] = useState([])
  useEffect(() => {
    // get first 10 beers, add them to beersShown
    const firstBeers = beers.slice(0, 10)
    setBeersShown(firstBeers)
  }, [beers])
  return (
    <FlexContianer>
      {beersShown.map(beer => (
        <Card
          key={beer.id}
          sx={{
            maxWidth: 250,
            minHeight: '100%',
            padding: 2,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '-webkit-fill-available',
            }}
          >
            <div>
              <CardMedia
                component="img"
                image={beer.image_url}
                alt={beer.name}
                sx={{ width: 100 }}
                height={200}
                objectFit="cover"
              />
              <Typography variant="h5">{beer.name}</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {beer.description}
              </Typography>
            </div>
            <div>
              <Typography variant="body2">Food Pairing</Typography>
              <Typography variant="body2" color="text.secondary">
                {beer.food_pairing.join(', ')}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </FlexContianer>
  )
}

export default Beers
