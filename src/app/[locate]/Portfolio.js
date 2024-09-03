import GitHub from '@mui/icons-material/GitHub'
import Build from '@mui/icons-material/Build'
import Done from '@mui/icons-material/Done'
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Box, Card, CardMedia, Chip, Divider, Typography } from '@mui/material';
import { useTranslations } from 'next-intl'

const Portfolio = () => {
    const t = useTranslations('Home.proyect')

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
                fontWeight='500'
            >
                {t('title')}
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
                            label={t('proyectNebula.status')}
                            size='small' 
                            icon={<Build />} 
                            sx={{ 
                                minWidth: 130,
                                width:1/6,
                                mb:2
                            }} 
                            />
                        <Typography variant='body1' >
                            {t('proyectNebula.description')}
                        </Typography>
                        <Typography>
                            {t('proyectNebula.myRole')}
                        </Typography>
                        <Typography>
                        {t('proyectNebula.technologies')}
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
                            label={t('proyectAgiliza.status')} 
                            size='small' 
                            icon={<EngineeringIcon />} 
                            sx={{ 
                                minWidth: 130,
                                width:1/6,
                                mb:2
                            }} />
                        <Typography variant='body1'>
                            {t('proyectAgiliza.description')} 
                        </Typography>
                        <Typography>
                            {t('proyectAgiliza.myRole')} 
                        </Typography>
                        <Typography>
                            {t('proyectAgiliza.technologies')} 

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
                            label={t('proyectMoorishville.status')} 
                            size='small' 
                            icon={<Done />} 
                            sx={{ 
                                minWidth: 130,
                                width:1/6,
                                mb:2
                            }} />
                        <Typography variant='body1'>
                            {t('proyectMoorishville.description')} 
                        </Typography>
                        <Typography>
                            {t('proyectMoorishville.myRole')} 
                        </Typography>
                        <Typography>
                            {t('proyectMoorishville.technologies')} 
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Portfolio
// 