'use client'

import Box from "@mui/material/Box";
import {useRouter} from "next/navigation";
import {Card, CardMedia, Divider, Typography} from "@mui/material";
// import MyEducationSvg from "educationCard.svg";
import Image from "next/image";
import {ComputerRounded, DateRange, DoneRounded, LocationOnRounded, SchoolRounded} from "@mui/icons-material";
import BrushIcon from "@mui/icons-material/Brush";
import {useTranslations} from "next-intl";

export default function Education() {
    const router = useRouter();
    const t = useTranslations('Home.education')


    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Box
                component='main'
                id='education'
                sx={{
                    minHeight: '80svh',
                    width: '.9',
                    maxWidth: '1620px',
                    borderRadius: 4,
                    backgroundColor: (theme) => theme.palette.card.main,
                    boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    pt: {xs: 14, md: 20},
                    px: 8,
                    // pl: {xs: 2, md: 8},
                    mt: 2,
                    alignItems: {xs: 'end', md: 'center'},
                    justifyContent: {xs: 'center', md: 'space-between'}
                }}
            >
                <Box
                    width='1'
                    display='flex'
                    flexDirection='column'
                    alignItems='end'
                    sx={{
                        paddingBottom:5
                    }}
                >

                    <Typography
                        color='primary.main'
                        fontSize='32px'
                        fontWeight='bold'
                        textAlign='start'
                        width='1'
                    >
                        Cursos y formaciones complementarias
                    </Typography>

                    <Typography
                        fontSize='22px'
                        fw='medium'
                        width='.8'
                        sx={{
                            paddingTop: 6,
                            textAlign: 'end',
                        }}
                    >
                        Estos cursos han sido claves para complementar mi formación técnica, explorando nuevas herramientas,
                        metodologías y enfoques prácticos en desarrollo.
                    </Typography>

                </Box>

                <Divider/>

                <Box
                    sx={{
                        paddingTop: 5,
                        display: 'flex',
                        flexWrap: 'Wrap',
                        gap: 4
                    }}
                >

                    {/* REACT COURSE */}
                    <Card
                        sx={{
                            height: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
    
                        <CardMedia
                            component='img'
                            image='/institute/codoAcodo.jpg'
                            alt='Imagen presentativa de Moorishville'
                            sx={{
                                height: 150,
                                width: 1,
                                objectPosition: 'center',
                                overflow: 'hidden',
                                objectFit: 'cover',
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
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <ComputerRounded/> {t('react.title')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DateRange/> {t('react.date')}
                                </Typography>
                            </Box>
                            <Divider/>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <SchoolRounded/> {t('react.institute')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <LocationOnRounded/> {t('react.location')}
                                </Typography>
                            </Box>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DoneRounded/> {t('react.description')}
                                </Typography>
                            </Box>
    
                        </Box>
    
    
                    </Card>
    
                    {/* sass course */}
                    <Card
                        sx={{
                            height: 1,
                            display: 'flex',
                            flexDirection:'column',
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
    
                        <CardMedia
                            component='img'
                            image='/institute/codigoFacilito.png'
                            alt='Imagen presentativa de Moorishville'
                            sx={{
                                height: 150,
                                width: 1,
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
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <BrushIcon/> {t('sass.title')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DateRange/> {t('sass.date')}
                                </Typography>
                            </Box>
                            <Divider/>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <SchoolRounded/> {t('sass.institute')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <LocationOnRounded/> {t('sass.location')}
                                </Typography>
                            </Box>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DoneRounded/> {t('sass.description')}
                                </Typography>
                            </Box>
    
                        </Box>
    
    
                    </Card>
    
                    {/* Full Stack Node course */}
                    <Card
                        sx={{
                            height: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
    
                        <CardMedia
                            component='img'
                            image='/institute/codoAcodo.jpg'
                            alt='Imagen representativa del logo de codo a codo'
                            sx={{
                                height: 150,
                                width: 1,
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
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <BrushIcon/> {t('node.title')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DateRange/> {t('node.date')}
                                </Typography>
                            </Box>
                            <Divider/>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <SchoolRounded/> {t('node.institute')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <LocationOnRounded/> {t('node.location')}
                                </Typography>
                            </Box>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DoneRounded/> {t('node.description')}
                                </Typography>
                            </Box>
    
                        </Box>
    
    
                    </Card>
    
                    {/* Full Stack Java course */}
                    <Card
                        sx={{
                            height: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
    
                        <CardMedia
                            component='img'
                            image='/institute/aluraLatam.png'
                            alt='Imagen representativa del logo de codo a codo'
                            sx={{
                                height: 150,
                                width: 1,
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
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <BrushIcon/> {t('alura.title')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DateRange/> {t('alura.date')}
                                </Typography>
                            </Box>
                            <Divider/>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <SchoolRounded/> {t('alura.institute')}
                                </Typography>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <LocationOnRounded/> {t('alura.location')}
                                </Typography>
                            </Box>
    
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <DoneRounded/> {t('alura.description')}
                                </Typography>
                            </Box>
    
                        </Box>
    
    
                    </Card>

                </Box>



                <button
                    onClick={() => router.push("/")}>
                    Ir a la raiz
                </button>
            </Box>
        </Box>
    )
}