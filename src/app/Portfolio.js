import { Build } from '@mui/icons-material'
import { Box, Card, CardMedia, Chip, Typography } from '@mui/material'
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
                        borderRadius: 4, 
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                }}>
                    <CardMedia
                        component='img'
                        height='300'
                        image='linkedin/guiaFrontEnd1.png'
                        alt='Imagen de un articulo'
                        sx={{ width: 345, objectFit: 'cover' }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', py: 2, px: 4, width: 1 }}>
                        <Chip variant='contained' color='secondary' label='En desarrollo' size='small' icon={<Build />} sx={{ width: 1 / 6 }} />
                        <Typography variant='body1'>
                            <b>Nebula Wear</b> es una plataforma de comercio electrónico enfocada en crear una solución robusta y escalable. Lidero el equipo técnico, guiando el desarrollo y aplicando nuestras habilidades especializadas en cada área. Mi enfoque es llevar este proyecto a su máximo potencial.
                        </Typography>
                        <Typography>
                            <b>Mi rol:</b> Líder técnico y desarrollador Front-End.
                        </Typography>
                        <Typography>
                            <b>Tecnologías:</b> React, Material UI (estilos), Firebase (autenticación).

                        </Typography>
                    </Box>
                </Card>

                {/* agiliza */}
                <Card 
                    sx={{ 
                        display: 'flex', 
                        borderRadius: 4, 
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                }}>
                    <CardMedia
                        component='img'
                        height='300'
                        image='linkedin/guiaFrontEnd1.png'
                        alt='Imagen de un articulo'
                        sx={{ width: 345, objectFit: 'cover' }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', py: 2, px: 4, width: 1 }}>
                        <Chip variant='contained' color='secondary' label='En desarrollo' size='small' icon={<Build />} sx={{ width: 1 / 6 }} />
                        <Typography variant='body1'>
                            <b>Agiliza</b> es una startup dedicada a la centralización y presentación de datos empresariales. Lideré la creación de la app, desarrollando la interfaz que muestra gráficos BI y gestionando la autenticación, control de usuarios y permisos.
                        </Typography>
                        <Typography>
                            <b>Mi rol:</b>Desarrollador Front-End
                        </Typography>
                        <Typography>
                            <b>Tecnologías:</b> React.

                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Portfolio
