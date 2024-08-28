'use client'
import { Circle } from '@mui/icons-material'
import { Box, Button, Container, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const HeroSection = () => {
  return (
    <Grid
      container
      // className='container'
      sx={{
        minHeight: '90svh',
        borderRadius: 4,
        backgroundColor: (theme) => theme.palette.card.main,
        backgroundImage: (theme) => `linear-gradient(32deg, ${theme.palette.card.shadowSecondary} 30px, transparent)`,
        backgroundSize: '100px 100px',
        backgroundPosition: '-5px -5px',
        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
        pt: 20,
        mt: 2,
        mx: { xs: 2, sm: 4 },
        alignItems: {xs: 'end', md: 'center'},
        justifyContent: {xs:'center', md: 'center'}
      }}>
      <Grid xs={12} md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // background:'green',
          mx: { xs: 2, md: 4 }
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
          textAlign='left'
          fontWeight='700'
        >
          Soy Jesus Santiago
        </Typography>
        <Typography
          variant='h4'
          textAlign='left'
        >
          Y soy Desarrollador Front-End
        </Typography>
      </Grid>

      <Grid xs={12} md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <picture>
          <source srcSet='contenido-pequeña.png' media='(max-width:1000px)' type='image/png' />
          <source srcSet='contenido-grande.png' media='(max-width:1080px)' type='image/png' />
          <img src='contenido-grande.png' alt='imagen de presentaación del hero de Jesús Santiago' className='object' />
        </picture>
        {/* <Typography
              variant='h2'
              >
              Hola yo soy Jesus Santiago
            </Typography> */}

      </Grid>

    </Grid>
  )
}

export default HeroSection

