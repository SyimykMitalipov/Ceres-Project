import React from 'react'

// import styles 
import styled from './home.module.scss'
/// import MUI 
import { Box, Typography, Grid } from '@mui/material'
import { Container } from '@mui/material'

// import assets
import icon1 from 'assets/icons/iconMain1.svg'
import icon2 from 'assets/icons/iconMain2.svg'
import icon3 from 'assets/icons/iconMain3.svg'
import icon4 from 'assets/icons/iconMain4.svg'
import icon5 from 'assets/icons/iconMain5.svg'
import icon6 from 'assets/icons/iconMain6.svg'


const cardData = [
  {
    id:1,
    text: 'Питомники',
    img: icon1
  },
  {
    id: 2,
    text: 'Теплицы',
    img: icon2
  },
  {
    id: 3,
    text: 'Ягодоводство',
    img: icon3
  },
  {
    id: 4,
    text: 'Грибоводство',
    img: icon4
  },
  {
    id: 5,
    text: 'Ландшафтный дизайн',
    img: icon5
  },
  {
    id: 6,
    text: 'Магазины',
    img: icon6
  },
]
const Home = () => {
  return (
    <>
      <Box component={"main"} className={styled.mainBlock}>
        <Container>
          <Grid container spacing={12} justifyContent="space-between">
            <Grid item xs={4} alignItems={'flex-end'} display={"flex"} height={"75vh"}>
              <Box component={"div"} className={styled.mainText}>
                <Typography component={"h1"} variant='h1'>
                  Официальный
                  дистрибьютор
                </Typography>
                <Typography variant='h3' component={"h3"}>В Украине</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} className={styled.rightBlock} ali>
              <Box className={styled.mainCategories}>
                {cardData.map((card) => <Box key={card.id} component={"div"} className={styled.category}>
                  <Box>
                      <Box component={"img"} src={card.img}></Box>
                  </Box>
                  <Box>
                    <Typography component={'p'}>{card.text}</Typography>
                  </Box>
                </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home