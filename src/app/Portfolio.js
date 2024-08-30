import { GitHub } from '@mui/icons-material'
import { Build } from '@mui/icons-material'
import { Box, Card, CardMedia, Chip, Divider, Typography } from '@mui/material'
import React from 'react'

const Portfolio = () => {
    return (
        <Box
            component='section'
            sx={{
                // minHeight: '80svh',
                width: '.9',
                maxWidth: '1620px',
                borderRadius: 4,
                backgroundColor: (theme) => theme.palette.card.main,
                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                py: { xs: 14, md: 10 },
                px: 2,
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'end', md: 'center' },
                justifyContent: { xs: 'center', md: 'space-between'},
                gap:6,
            }}
        >
            <Typography
                variant='h2'
                width='1'
                textAlign='center'
            >
                Portfolio
            </Typography>

            <Box
                component='section'
                sx={{
                    width: '.9',
                    maxWidth: '1620px',
                    display:'flex',
                    flexDirection: 'column',
                    gap:4
                }}
            >
                {/* nebula wear */}
                <Card 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: {xs:'column', lg: 'row'},
                        borderRadius: 4, 
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                }}>
                    <CardMedia
                        component='picture'
                        sx={{ 
                            height: 300,
                            width: {xs: 1, lg: 345}, 
                            objectFit: 'cover',
                            
                        }}
                    >
                        <source src='portfolio/nebulaWear.png' media='(max-width:1000px)' type='image/png'/>
                        <img src='portfolio/nebulaWear.png' className='object'/>
                    {/* <source src='portfolio/nebulaWear.png' media='(max-width:1000px)' type='image/png'/>
                    <source src='portfolio/nebulaWear.png' media='(max-width:1000px)' type='image/png'/> */}
                    </CardMedia>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-around', 
                            py: 2, 
                            px: 4,
                        }}
                    >
                        <Chip 
                            variant='filled' 
                            color='secondary' 
                            label='En desarrollo' 
                            size='small' 
                            icon={<Build />} 
                            sx={{ 
                                minWidth: 130,
                                width:1/6,
                                mb:2
                            }} 
                            />
                        <Typography variant='body1'>
                            <b>Nebula Wear</b> es una plataforma de comercio electrónico enfocada en crear una solución robusta y escalable. Lidero el equipo técnico, guiando el desarrollo y aplicando nuestras habilidades especializadas en cada área. Mi enfoque es llevar este proyecto a su máximo potencial.
                        </Typography>
                        <Typography>
                            <b>Mi rol:</b> Líder técnico y desarrollador Front-End.
                        </Typography>
                        <Typography>
                            <b>Tecnologías:</b> React, Material UI (estilos), Firebase (autenticación).
                        </Typography>
                        <Divider sx={{ my:2}}/>
                        <Chip 
                            variant='filled'
                            color='primary'
                            label='GitHub'
                            icon={<GitHub/>}
                            sx={{
                                minWidth:120,
                                width:1/6
                            }}
                        />
                    </Box>
                </Card>

                {/* agiliza */}
                <Card 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: {xs:'column', lg: 'row'},
                        borderRadius: 4, 
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                }}>
                    <CardMedia
                        component='img'
                        image='portfolio/agiliza2.png'
                        alt='Imagen de un articulo'
                        sx={{ 
                            height: 300,
                            width: {xs: 1, lg: 345}, 
                            objectFit: 'cover' 
                        }}
                    />
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-around', 
                            py: 2, 
                            px: 4, 
                        }}>

                        <Chip 
                            variant='filled' 
                            color='secondary' 
                            label='Actualmente' 
                            size='small' 
                            icon={<Build />} 
                            sx={{ 
                                minWidth: 130,
                                width:1/6,
                                mb:2
                            }} />
                        <Typography variant='body1'>
                            <b>Agiliza</b> es una startup dedicada a la centralización y presentación de datos empresariales. Lideré la creación de la app, desarrollando la interfaz que muestra gráficos BI y gestionando la autenticación, control de usuarios y permisos.
                        </Typography>
                        <Typography>
                            <b>Mi rol:</b>Desarrollador Front-End
                        </Typography>
                        <Typography>
                            <b>Tecnologías:</b> React.

                        </Typography>
                        <Divider sx={{ my:2}}/>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Portfolio
