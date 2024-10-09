import { Box, Card, CardMedia, Divider, Typography } from '@mui/material'
import BrushIcon from '@mui/icons-material/Brush';
import { useTranslations } from 'next-intl'
import { DateRange } from '@mui/icons-material';
import { SchoolRounded } from '@mui/icons-material';
import { LocationOnRounded } from '@mui/icons-material';
import { DoneRounded } from '@mui/icons-material';
import { ComputerRounded } from '@mui/icons-material';

const Education = () => {
    const t = useTranslations('Home.education')

    return (
        <Box
            component='section'
            id='education'
            sx={{
                width: '.9',
                maxWidth: '1620px',
                borderRadius: 4,
                backgroundColor: (theme) => theme.palette.card.main,
                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                py: { xs: 6, md: 10 },
                px: 2,
                mt: 10,
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
                sx={{
                    background: (theme) => `linear-gradient(282deg, ${theme.palette.text.secondary} 0%, ${theme.palette.text.main} 53%, ${theme.palette.text.secondary} 108%)`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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
                {/* eep-igroup */}
                <Card
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,


                    }}>

                    <CardMedia
                        component='img'
                        image='institute/logo_eepigroup.png'
                        alt='Imagen presentativa de Moorishville'
                        sx={{
                            height: 150,
                            width: { xs: 1, lg: 265 },
                            objectPosition: 'center',
                            objectFit: 'contain',

                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: 1,
                            gap: 1,
                            py: 2,
                            px: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BrushIcon /> {t('eep.title')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DateRange /> {t('eep.date')}
                            </Typography>
                        </Box>
                        <Divider />

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <SchoolRounded /> {t('eep.institute')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnRounded /> {t('eep.location')}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DoneRounded /> {t('eep.description')}
                            </Typography>
                        </Box>

                    </Box>


                </Card>

                {/* react course */}
                <Card
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                    }}>

                    <CardMedia
                        component='img'
                        image='institute/codoAcodo.jpg'
                        alt='Imagen presentativa de Moorishville'
                        sx={{
                            height: 150,
                            width: { xs: 1, lg: 345 },
                            objectPosition: 'center',
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: 1,
                            gap: 1,
                            py: 2,
                            px: 4, 
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <ComputerRounded /> {t('react.title')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DateRange /> {t('react.date')}
                            </Typography>
                        </Box>
                        <Divider />

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <SchoolRounded /> {t('react.institute')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnRounded /> {t('react.location')}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DoneRounded /> {t('react.description')}
                            </Typography>
                        </Box>

                    </Box>
                   

                </Card>

                {/* sass course */}
                <Card
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                    }}>

                    <CardMedia
                        component='img'
                        image='institute/codigoFacilito.png'
                        alt='Imagen presentativa de Moorishville'
                        sx={{
                            height: 150,
                            width: { xs: 1, lg: 345 },
                            objectPosition: 'center',
                            objectFit: 'contain'
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: 1,
                            gap: 1,
                            py: 2,
                            px: 4, 
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BrushIcon /> {t('sass.title')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DateRange /> {t('sass.date')}
                            </Typography>
                        </Box>
                        <Divider />

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <SchoolRounded /> {t('sass.institute')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnRounded /> {t('sass.location')}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DoneRounded /> {t('sass.description')}
                            </Typography>
                        </Box>

                    </Box>
                   

                </Card>

                {/* Full Stack Node course */}
                <Card
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                    }}>

                    <CardMedia
                        component='img'
                        image='institute/codoAcodo.jpg'
                        alt='Imagen representativa del logo de codo a codo'
                        sx={{
                            height: 150,
                            width: { xs: 1, lg: 345 },
                            objectPosition: 'center',
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: 1,
                            gap: 1,
                            py: 2,
                            px: 4, 
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BrushIcon /> {t('node.title')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DateRange /> {t('node.date')}
                            </Typography>
                        </Box>
                        <Divider />

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <SchoolRounded /> {t('node.institute')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnRounded /> {t('node.location')}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DoneRounded /> {t('node.description')}
                            </Typography>
                        </Box>

                    </Box>
                   

                </Card>

                {/* Full Stack Java course */}
                <Card
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                    }}>

                    <CardMedia
                        component='img'
                        image='institute/aluraLatam.png'
                        alt='Imagen representativa del logo de codo a codo'
                        sx={{
                            height: 150,
                            width: { xs: 1, lg: 345 },
                            objectPosition: 'center',
                            objectFit: 'contain'
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: 1,
                            gap: 1,
                            py: 2,
                            px: 4, 
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BrushIcon /> {t('alura.title')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DateRange /> {t('alura.date')}
                            </Typography>
                        </Box>
                        <Divider />

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <SchoolRounded /> {t('alura.institute')}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnRounded /> {t('alura.location')}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DoneRounded /> {t('alura.description')}
                            </Typography>
                        </Box>

                    </Box>
                   

                </Card>

            </Box>
        </Box>
    )
}

export default Education
