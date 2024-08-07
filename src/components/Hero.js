import { Box } from '@mui/material'
import VideoCarousel from './VideoCarousel'

const Hero = () => {
  return (
    <Box
        component="section"
        minWidth={1}
        minHeight={1}
    >
      <VideoCarousel/>
    </Box>
  )
}

export default Hero
