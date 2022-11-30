import React from 'react'

// import styles 
import styled from './home.module.scss'
/// import MUI 
import { Box, Typography, Grid } from '@mui/material'
import { Container } from '@mui/material'

const Home = () => {
  return (
    <>
      <Box component={"main"} className={styled.mainBlock}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} alignItems="center" height={"80vh"}>
              <Typography component={"h1"} variant='h1' color={"white"}>
                Официальный
                дистрибьютор
              </Typography>
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home