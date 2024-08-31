import GitHub from '@mui/icons-material/GitHub'
import Build from '@mui/icons-material/Build'
import Done from '@mui/icons-material/Done'
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Box, Card, CardMedia, Chip, Divider, Typography } from '@mui/material'
import React from 'react'

const Portfolio = () => {
    return (
        <Box
            component='section'
            sx={{
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
                alignItems:'center',
                justifyContent: 'space-between',
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
                    width: {xs: 0.95, lg: 0.8},
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
                        component='img'
                        image='portfolio/nebulaWear1-1.png'
                        alt='Imagen representativa del Proyecto de NebulaWear'
                        sx={{
                            height : 300,
                            width: {xs: 1, lg: 345},
                            objectPosition:'bottom'
                        }}
                    />

                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-around', 
                            gap:1,
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
                            <b>Nebula Wear</b> es una marca de ropa de lujo y plataforma de comercio electrónico enfocada en crear una solución robusta y escalable. Lidero el equipo técnico, guiando el desarrollo y aplicando nuestras habilidades especializadas en cada área. Mi enfoque es llevar este proyecto a su máximo potencial.
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
                        image='portfolio/agiliza1-1.png'
                        alt='Imagen presentativa de Agiliza'
                        sx={{ 
                            height: 300,
                            width: {xs: 1, lg: 345}, 
                            objectPosition: 'center' 
                        }}
                    />
  
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-around', 
                            gap:1,
                            pt: 2, 
                            px: 4,
                            pb: {xs:2, lg: 10}, 
                            // mb: {xs:2, lg:0}
                        }}>

                        <Chip 
                            variant='filled' 
                            color='secondary' 
                            label='Actualmente' 
                            size='small' 
                            icon={<EngineeringIcon />} 
                            sx={{ 
                                minWidth: 130,
                                width:1/6,
                                mb:2
                            }} />
                        <Typography variant='body1'>
                            <b>Agiliza</b> es una startup dedicada a la centralización y presentación de datos empresariales. Lideré la creación de la app, desarrollando la interfaz que muestra gráficos BI y gestionando la autenticación, control de usuarios y permisos.
                        </Typography>
                        <Typography>
                            <b>Mi rol:</b>Desarrollador Front-End.
                        </Typography>
                        <Typography>
                            <b>Tecnologías:</b> React.

                        </Typography>
                    </Box>
                </Card>

                {/* Moorishville */}
                <Card 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: {xs:'column', lg: 'row'},
                        borderRadius: 4, 
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                }}>
                    <CardMedia
                        component='img'
                        image='portfolio/moorishville.png'
                        alt='Imagen presentativa de Moorishville'
                        sx={{ 
                            height: 300,
                            width: {xs: 1, lg: 345}, 
                            objectPosition: 'center' 
                        }}
                    />
  
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-around', 
                            gap:1,
                            pt: 2, 
                            px: 4,
                            pb: {xs:2, lg: 10} 
                        }}>

                        <Chip 
                            variant='filled' 
                            color='secondary' 
                            label='Finalizado' 
                            size='small' 
                            icon={<Done />} 
                            sx={{ 
                                minWidth: 130,
                                width:1/6,
                                mb:2
                            }} />
                        <Typography variant='body1'>
                            <b>Moorishville</b> es un condado en los Estados Unidos para el que he trabajado como freelancer. Mi proyecto más destacado para ellos fue el desarrollo de un sistema de búsqueda de archivos en una base de datos local.
                        </Typography>
                        <Typography>
                            <b>Mi rol:</b>Desarrollador Front-End.
                        </Typography>
                        <Typography>
                            <b>Tecnologías:</b> HTML, CSS, JavaScript Vanilla.

                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Portfolio
