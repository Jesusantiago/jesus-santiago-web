import { Container, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const HeroSection = () => {
  return (
    <Container
      maxWidth='xl'
    >

      <Grid container spacing={2} sx={{
        maxWidth:'100vw',
        paddingTop:20,  
        borderRadius:6,
        boxSizing:'content-box'
      }}>
        <Grid xs={12} sm={6}> 
            <Typography
              variant='h2'
              >
              Hola yo soy Jesus Santiago
            </Typography>
        </Grid>
        <Grid xs={12} sm={6}> 
          <picture>
            <source srcSet='contenido-pequeña.png' media='(max-width:600px)' type='image/png'/>
            <source srcSet='contenido-grande.png' media='(max-width:1080px)' type='image/png'/>
            <img src='contenido-grande.png' alt='imagen de presentaación del hero de Jesús Santiago' />
            </picture>
          {/* <Typography
              variant='h2'
              >
              Hola yo soy Jesus Santiago
            </Typography> */}
          
        </Grid>

      </Grid>
      
    </Container>
  )
}

export default HeroSection

