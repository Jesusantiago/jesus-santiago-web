'use client'

import { ParallaxBanner } from 'react-scroll-parallax'
import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

const EffectHero = () => {

    const backgroung = {
        opacity: [1, 1.3],
        scale:[1.05, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <Box color='background' className='bg-c'></Box>
    }

    const gradientOverlay = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: 
        <Box
            className='inset'
            sx={{
                background: 'linear-gradient(#F2EA7760 10%, #070707 97%);'
            }}
        >
        </Box>
    };

    const text = {
        translateY: [0, 20],
        scale: [1, 1.2, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
        <Box 
            className="inset center" 
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='1'
        >
            <Container>
                <Typography component='h2' variant='h1' textAlign='center' color='primary' sx={{fontSize: {xs: 34, lg: 76}}} >
                    ¿Tus clientes dependen de encontrar tu negocio en redes sociales?
                </Typography>
                <Typography component='h3'variant='h3' fontWeight='700' sx={{mt:5, textAlign:'center'}}>
                    ¿Qué pasa si pierdes acceso a tus cuentas?
                </Typography>

                <Box
                    display='flex'
                    justifyContent='space-evenly'
                    textAlign='center'
                    flexWrap='wrap'
                    width='1'
                    sx={{mt:7,}}
                >
                <Button
                    variant='text'
                    className='btnHero'
                    size='large'
                    href='#'
                    sx={{
                        color: '#212426',
                        fontWeight:700,
                        paddingX: { xs:2, md:7 },
                        paddingY: { xs:2, md:2},
                        marginBottom: { xs: 4, md: 0},
                        borderRadius:10,
                        width: {xs: 1, md: 1/3}
                    }}
                >
                    Primer asesoramiento gratuito
                </Button>

                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    sx={{
                        fontWeight:700,
                        paddingX: { xs:2, md:8 },
                        paddingY: { xs:2, md:2},
                        borderRadius:10,
                        width: {xs: 1, md: 1/3}
                    }}
                >
                    Descubre como trabajamos
                </Button>
                </Box> 
            </Container>

        </Box>
        )
    }

    const textLine = {
        translateY: [40, 55],
        scale: [1.5, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
        <Box 
            className="inset center" 
            flexDirection='column'
            alignItems='center'
            width='1'
            sx={{display: {xs: 'none', md: 'flex'}}}
        >
            <Container>
                <Typography component='h1' variant='h5' textAlign='center' color='primary' fontWeight='700'>
                Olvidate de depender de plataformas externas. <span className='spanHero'>Nosotros construimos tu página web.</span>
                </Typography>            
            </Container>

        </Box>
        )
    }
    

  return (
    <ParallaxBanner
        layers={[
            gradientOverlay, 
            backgroung, 
            textLine,
            text, 
        ]}
        className='hfull'
        >

    </ParallaxBanner>
  )
}

export default EffectHero
