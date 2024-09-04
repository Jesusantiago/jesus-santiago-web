import GitHub from '@mui/icons-material/GitHub'
import Build from '@mui/icons-material/Build'
import Done from '@mui/icons-material/Done'
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Box, Button, Card, CardMedia, Chip, Divider, Typography } from '@mui/material';
import { useTranslations } from 'next-intl'

const Portfolio = () => {
    const t = useTranslations('Home.experience')

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
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 6,
            }}
        >
            <Typography
                variant='h2'
                width='1'
                textAlign='center'
                fontWeight='500'
                color={'primary.main'}
                sx={{
                    fontFamily: (theme) => theme.typography.lexend.fontFamily,
                }}
            >
                {t('title')}
            </Typography>

            <Box
                component='section'
                sx={{
                    width: { xs: 0.95, lg: 0.8 },
                    maxWidth: '1620px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}
            >
                {/* nebula wear */}
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}>
                    <CardMedia
                        component='img'
                        image='portfolio/nebulaWear1-1.png'
                        alt='Imagen representativa del Proyecto de NebulaWear'
                        sx={{
                            height: 400,
                            width: { xs: 1, lg: 345 },
                            objectPosition: 'bottom'
                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            gap: 1,
                            py: 2,
                            px: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems : 'center'
                            }}
                        >
                            <Typography
                                variant='h6'
                                width={1/2}
                            >
                                {t('proyectNebula.name')}
                            </Typography>
                            <Typography
                                variant='button'
                                width={1/2}
                                textAlign={'right'}
                            >
                                {t('proyectNebula.date')}
                            </Typography>

                        </Box>

                        <Divider />

                        <Typography
                            variant='body1'
                            color='primary.transparent'
                            fontWeight='500'
                        >
                            {t('proyectNebula.myRole')}
                        </Typography>

                        <Typography variant='body1' >
                            {t('proyectNebula.description')}
                        </Typography>

                        <Typography>
                            {t('proyectNebula.technologies')}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Chip
                            variant='filled'
                            color='primary'
                            label='GitHub'
                            icon={<GitHub />}
                            sx={{
                                minWidth: 120,
                                width: 1 / 6
                            }}
                        />
                    </Box>

                </Card>

                {/* agiliza */}
                <Button
                    href='https://agiliza-sa.com/'
                    target='_black'
                >
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
                        <CardMedia
                            component='img'
                            image='portfolio/agiliza1-1.png'
                            alt='Imagen presentativa de Agiliza'
                            sx={{
                                height: 320,
                                width: { xs: 1, lg: 345 },
                                objectPosition: 'center'
                            }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                gap: 1,
                                pt: 2,
                                px: 4,
                                pb: { xs: 2, lg: 10 },
                                // mb: {xs:2, lg:0}
                            }}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography
                                    variant='h6'
                                    width={1/2}
                                >
                                    {t('proyectAgiliza.name')}
                                </Typography>
                                <Typography
                                    variant='button'
                                    width={1/2}
                                    textAlign={'right'}
                                >
                                    {t('proyectAgiliza.date')}
                                </Typography>

                            </Box>
                            <Divider />
                            <Typography
                                variant='body1'
                                color='primary.transparent'
                                fontWeight='500'
                            >
                                {t('proyectAgiliza.myRole')}
                            </Typography>

                            <Typography variant='body1'>
                                {t('proyectAgiliza.description')}
                            </Typography>
                
                            <Typography>
                                {t('proyectAgiliza.technologies')}

                            </Typography>
                        </Box>
                    </Card>
                </Button>

                {/* Moorishville */}
                <Button>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
                        <CardMedia
                            component='img'
                            image='portfolio/moorishville.png'
                            alt='Imagen presentativa de Moorishville'
                            sx={{
                                height: 300,
                                width: { xs: 1, lg: 345 },
                                objectPosition: 'center'
                            }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                gap: 1,
                                pt: 2,
                                px: 4,
                                pb: { xs: 2, lg: 10 }
                            }}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems : 'center'
                                }}
                            >
                                <Typography
                                    variant='h6'
                                    width={1/2}
                                >
                                    {t('proyectMoorishville.name')}
                                </Typography>
                                <Typography
                                    variant='button'
                                    width={1/2}
                                    textAlign={'right'}
                                >
                                    {t('proyectMoorishville.date')}
                                </Typography>

                            </Box>

                            <Divider />
                            <Typography
                                variant='body1'
                                color='primary.transparent'
                                fontWeight='500'
                                textAlign='left'
                            >
                                {t('proyectMoorishville.myRole')}
                            </Typography>
                            <Typography variant='body1' textAlign='left'>
                                {t('proyectMoorishville.description')}
                            </Typography>
                
                            <Typography
                                textAlign='left'
                            >
                                {t('proyectMoorishville.technologies')}
                            </Typography>
                        </Box>
                    </Card>
                </Button>
            </Box>
        </Box>
    )
}

export default Portfolio
// 