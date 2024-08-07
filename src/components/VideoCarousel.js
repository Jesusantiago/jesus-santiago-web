'use client'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const dataVideo = [{
  id: 1,
  url: 'videos/cenital-manos.mp4',
  // alt: "en Jesus Santiago Web creamos tu página web"
  }, {
    id: 2,
    url: 'videos/picada-completo.mp4',
    // alt: "En Jesus Santiago Web trabajamos para que tengas tu Landing Page profesional",
  }, {
    id: 3,
    url: 'videos/picada-manos.mp4',
    // alt: "En Jesus Santiago Web" 
  }
]

const VideoCarousel = () => {

  return (
    <Swiper 
      autoplay
      navigation
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
    >
      {dataVideo.map((item) => (
        <SwiperSlide key={item.id} >
              <video autoPlay width="100%" className='hfull' playsInline>
                <source src={item.url} type='video/mp4'/>  
              </video>
        </SwiperSlide>
      ))
      }
      
    </Swiper>
  )
}

export default VideoCarousel;