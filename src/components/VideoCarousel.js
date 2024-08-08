'use client'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Box, Button, Typography } from '@mui/material';

const dataVideo = [{
    id: 1,
    url: 'videos/cenital-manos.webm',
  }, {
    id: 2,
    url: 'videos/picada-completo.webm',
  }, {
    id: 3,
    url: 'videos/picada-manos.webm',
  }
]

const VideoCarousel = () => {

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay:5000
      }}
      // onSlideChange={() => console.log('slide change')}
      modules={[Autoplay]}
    >
      {dataVideo.map((item) => (
        <SwiperSlide key={item.id} >
          <video autoPlay  width="100%" className='hfull' playsInline>
            <source src={item.url} type='video/webm' />
          </video>
        </SwiperSlide>
      ))
      }

      <Box
        component="article"
        className='bg-c'
        sx={{ position: 'absolute', 
          top:1/2, 
          zIndex: 10000000, 
          height: 1, 
          width: 1, 
          overflow: "visible", 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        <Typography variant='h3' component='h1' sx={{display:'inline', marginBottom: 5, fontWeight: {xs:400, md:700}, textWrap:'balance', textShadow: '#000 2px 2px'}} color='#d9d9d9' textAlign='center'>
          Sé el dueño absoluto de tu presencia en la web.
        </Typography>

        <Typography variant='body2' component='h2' sx={{display:'inline', width: 3/4, fontWeight: {xs: 700, md:400}, fontSize:{xs:25, md:32}, mb:15, textWrap:'balance', textShadow: '#000 2px 2px'}} color='secondary.main' textAlign='center'>
          Olvídate de depender de plataformas externas. Construye tu página web personalizada y ten el control total de tu negocio en línea.
        </Typography>

        <Button color='secondary' href='#' size='large' variant='contained' sx={{fontSize: {xs: 20, md: 23}, fontWeight: 700, textAlign:'center', textWrap:'balance', maxWidth:{ xs: 300, md:650}}}>
          Solicita una consulta GRATUITA
        </Button>
      </Box>

    </Swiper>
  )
}

export default VideoCarousel;