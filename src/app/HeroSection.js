'use client'
import { Circle } from '@mui/icons-material'
import { Box, Button, Container, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const HeroSection = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: '80svh',
        width:'.9',
        maxWidth: '1620px',
        borderRadius: 4,
        backgroundColor: (theme) => theme.palette.card.main,
        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
        pt: {xs: 14, md: 10},
        px:2,
        mt: 2,
        alignItems: {xs: 'end', md: 'center'},
        justifyContent: {xs:'center', md: 'space-between'}
      }}>

      <Grid xs={12} lg={6} 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb:4
        }}
      >
        <Button
          variant='contained'
          color='secondary'
          sx={{
            mb: 2
          }}
          startIcon={
            <Circle color='success' />
          }
        >
          DISPONIBLE
        </Button>

        <Typography
          variant='h1'
          textAlign='center'
          fontWeight='700'
          sx={{width:1, textWrap: 'balance'}}
        >
          Jesus Santiago
        </Typography>

        <Typography
          variant='h4'
          textAlign='center'
          sx={{width:1, textWrap: 'balance'}}
        >
          Desarrollador Front-End
        </Typography>
      </Grid>

      <Grid xs={12} lg={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <picture className='object'>
          <source srcSet='contenido-pequeña.png' media='(max-width:1000px)' type='image/png'/>
          <source srcSet='contenido-grande.png' media='(max-width:1080px)' type='image/png'/>
          <img src='contenido-grande.png' alt='imagen de presentaación del hero de Jesús Santiago' className='object'/>
        </picture>
      </Grid>

    </Grid>
  )
}

export default HeroSection

