'use client'

import Box from "@mui/material/Box";
import {useRouter} from "next/navigation";
import {Button, Card, CardMedia, Divider, Typography} from "@mui/material";
import {ComputerRounded, DateRange, DoneRounded, LocationOnRounded, SchoolRounded} from "@mui/icons-material";
import BrushIcon from "@mui/icons-material/Brush";
import {useTranslations} from "next-intl";
import ButtonChange from "@/components/ButtonChange";

export default function Education() {
    const router = useRouter();
    const t = useTranslations('Education')


    return (
        <>
            <ButtonChange/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pb: 10,
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
                        pt: {xs: 14, lg: 20},
                        // px: {xs: 2, lg: 6},
                        pb: 6,
                        px: {xs: 2, lg: 8},
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {xs: 'end', lg: 'center'},
                        justifyContent: {xs: 'center', lg: 'space-between'}
                    }}
                >

                    <Box component="section" sx={{py: 8, textAlign: 'center'}}>
                        <Typography variant="h3" sx={{fontWeight: 600}}>
                            {t('title')}
                        </Typography>
                        <Typography variant="subtitle1" sx={{color: 'text.secondary', mt: 2}}>
                            {t('subtitle')}
                        </Typography>
                    </Box>

                    <Divider/>

                    <Box
                        sx={{
                            paddingY: 5,
                            gap: 5,
                            display: 'grid',
                            gridTemplateColumns: {xs: '1fr', lg: '1fr 1fr'},
                        }}
                    >

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
                                image='/institute/codoAcodo.png'
                                alt='Imagen presentativa de Moorishville'
                                sx={{
                                    height: 150,
                                    width: 1,
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
                                    gap: {xs: 2, lg: 1},
                                    py: 2,
                                    px: {xs: 2, lg: 4},
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},

                                    }}
                                >
                                    <Typography
                                        color={({palette}) => palette.primary.main}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontSize: "18px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <ComputerRounded/> {t('react.title')}
                                    </Typography>
                                    <Typography
                                        color='text.neutral'
                                        sx={{display: 'flex', gap: 1, fontSize: "16px"}}
                                    >
                                        <DateRange/> {t('react.date')}
                                    </Typography>
                                </Box>
                                <Divider/>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},

                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1, fontWeight: '800'}}
                                    >
                                        <SchoolRounded/> {t('react.institute')}
                                    </Typography>
                                    <Typography
                                        color='text.secondary'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontSize: "15px",
                                            fontWeight: "regular"
                                        }}
                                    >
                                        <LocationOnRounded/> {t('react.location')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},

                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                                    >
                                        <DoneRounded/> {t('react.description')}
                                    </Typography>
                                </Box>

                            </Box>


                        </Card>

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
                                    gap: {xs: 2, lg: 1},
                                    py: 2,
                                    px: {xs: 2, lg: 4},
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color={({palette}) => palette.primary.main}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontSize: "18px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <BrushIcon/> {t('sass.title')}
                                    </Typography>
                                    <Typography
                                        color='text.neutral'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                                    >
                                        <DateRange/> {t('sass.date')}
                                    </Typography>
                                </Box>
                                <Divider/>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1, fontWeight: '600'}}
                                    >
                                        <SchoolRounded/> {t('sass.institute')}
                                    </Typography>
                                    <Typography
                                        color='text.secondary'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontSize: "15px",
                                            fontWeight: "regular"
                                        }}
                                    >
                                        <LocationOnRounded/> {t('sass.location')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontSize: "16px",
                                            fontWeight: "Regular"
                                        }}
                                    >
                                        <DoneRounded/> {t('sass.description')}
                                    </Typography>
                                </Box>

                            </Box>


                        </Card>

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
                                image='/institute/codoAcodo.png'
                                alt='Imagen representativa del logo de codo a codo'
                                sx={{
                                    height: 150,
                                    width: 1,
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
                                    gap: {xs: 2, lg: 1},
                                    py: 2,
                                    px: {xs: 2, lg: 4},
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color={({palette}) => palette.primary.main}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontSize: "18px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <BrushIcon/> {t('node.title')}
                                    </Typography>
                                    <Typography
                                        color='text.neutral'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                        <DateRange/> {t('node.date')}
                                    </Typography>
                                </Box>
                                <Divider/>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1, fontWeight: '600'}}
                                    >
                                        <SchoolRounded/> {t('node.institute')}
                                    </Typography>
                                    <Typography
                                        color='text.secondary'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                                    >
                                        <LocationOnRounded/> {t('node.location')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'Regular'}}
                                    >
                                        <DoneRounded/> {t('node.description')}
                                    </Typography>
                                </Box>

                            </Box>


                        </Card>

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
                                    objectFit: 'contain',

                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    width: 1,
                                    gap: {xs: 2, lg: 1},
                                    py: 2,
                                    px: {xs: 2, lg: 4},
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color={({palette}) => palette.primary.main}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontSize: '18px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        <BrushIcon/> {t('alura.title')}
                                    </Typography>
                                    <Typography
                                        color='text.neutral'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                                    >
                                        <DateRange/> {t('alura.date')}
                                    </Typography>
                                </Box>
                                <Divider/>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1, fontWeight: '600'}}
                                    >
                                        <SchoolRounded/> {t('alura.institute')}
                                    </Typography>
                                    <Typography
                                        color='text.secondary'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                                    >
                                        <LocationOnRounded/> {t('alura.location')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: {xs: 'start', lg: 'center'},
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        gap: {xs: 2, lg: 0},
                                    }}
                                >
                                    <Typography
                                        color='text.main'
                                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                                    >
                                        <DoneRounded/> {t('alura.description')}
                                    </Typography>
                                </Box>

                            </Box>


                        </Card>

                    </Box>

                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => router.push("/")}
                        sx={{
                            fontWeight: 'Bold',
                            alignSelf: 'center'
                        }}
                    >
                        {t('button')}
                    </Button>
                </Box>
            </Box>
        </>
    )
}