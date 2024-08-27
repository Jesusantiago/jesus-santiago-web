import { Container, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const HeroSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight:'100svh',
        background:'background.default'
      }}
    >
      <Grid container spacing={2} sx={{height:'100svh',minWidth:1, paddingY: {xs: 20, md:20}}}>
        <Grid xs={12} md={6}> 
            <Typography
              variant='h1'
            >
              Hola yo soy Jesus Santiago
            </Typography>
        </Grid>
        <Grid xs={12} md={6}> 
            <Typography
              variant='h1'
            >
              Hola yo soy Jesus Santiago
            </Typography>
        </Grid>

      </Grid>
      
    </Container>
  )
}

export default HeroSection
