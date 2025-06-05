'use client'

import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";
import ButtonChange from "@/components/ButtonChange";
import {Box, Button, Card, CardMedia, Chip, Divider, Typography} from "@mui/material";

export default function Project() {
    const router = useRouter();
    const t = useTranslations('Project')

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


                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'},
                            gap: 6,
                            px: 4,
                            mt: 6,
                        }}
                    >

                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                },
                            }}>
                            <CardMedia
                                component='img'
                                image='/PageQualiter.png'
                                alt={`Imagen representativa del projecto de ${t('pageQualifier')}`}
                                sx={{
                                    height: 300,
                                    width: 1,
                                    objectPosition: 'center',
                                    objectFit: 'fill',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    gap: 3,
                                    my: 2,
                                    px: {xs: 2, sm: 4},
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        width='1'
                                        fontWeight='800'
                                    >
                                        {t('pageQualifier')}
                                    </Typography>
                                </Box>


                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                                >
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>HTML</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>CSS</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>JAVASCRIPT</Typography>}
                                    />
                                </Box>

                                {/*<Divider/>*/}

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        href='https://jesusantiago.github.io/PageQualifier/'
                                        target='_black'
                                        variant='contained'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('live')}
                                    </Button>

                                    <Button
                                        href='https://github.com/Jesusantiago/PageQualifier'
                                        target='_black'
                                        variant='outlined'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('code')}
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                        {/* Page Qualifier */}

                        {/*-------------------------------------------------------------------*/}

                        {/* Product Card*/}
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                },
                            }}>
                            <CardMedia
                                component='img'
                                image='/ProductCard.png'
                                alt={`Imagen representativa del projecto de ${t('productCard')}`}
                                sx={{
                                    height: 300,
                                    width: 1,
                                    objectPosition: 'center',
                                    objectFit: 'fill',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    gap: 3,
                                    my: 2,
                                    px: {xs: 2, sm: 4},
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        width='1'
                                        fontWeight='800'
                                    >
                                        {t('productCard')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                                >
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>HTML</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>CSS</Typography>}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        href='https://jesusantiago.github.io/TarjetaPresertacion/'
                                        target='_black'
                                        variant='contained'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('live')}
                                    </Button>

                                    <Button
                                        href='https://github.com/Jesusantiago/Shop'
                                        target='_black'
                                        variant='outlined'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('code')}
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                        {/* Product Card*/}

                        {/*----------------------------------------------------------------*/}

                        {/* Order Summany */}
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                },
                            }}>
                            <CardMedia
                                component='img'
                                image='/OrderSummary.png'
                                alt='Imagen representativa del projecto de NebulaWear'
                                sx={{
                                    height: 300,
                                    width: 1,
                                    objectPosition: 'center',
                                    objectFit: 'fill',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    gap: 3,
                                    my: 2,
                                    px: {xs: 2, sm: 4},
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        width='1'
                                        fontWeight='800'
                                    >
                                        {t('orderSummary')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                                >
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>HTML</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>CSS</Typography>}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        href='https://jesusantiago.github.io/ResumenDeCompraCard/'
                                        target='_black'
                                        variant='contained'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('live')}
                                    </Button>

                                    <Button
                                        href='https://github.com/Jesusantiago/ResumenDeCompraCard'
                                        target='_black'
                                        variant='outlined'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('code')}
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                        {/* Order Summany*/}

                        {/*---------------------------------------------------------------------*/}

                        {/* QR */}
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                },
                            }}>
                            <CardMedia
                                component='img'
                                image='/QR.png'
                                alt='Imagen representativa del projecto de NebulaWear'
                                sx={{
                                    height: 300,
                                    width: 1,
                                    objectPosition: 'center',
                                    objectFit: 'fill',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    gap: 3,
                                    my: 2,
                                    px: {xs: 2, sm: 4},
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        width='1'
                                        fontWeight='800'
                                    >
                                        {t('pageQR')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                                >
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>HTML</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>CSS</Typography>}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        href='https://jesusantiago.github.io/Pagina-QR/'
                                        target='_black'
                                        variant='contained'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('live')}
                                    </Button>

                                    <Button
                                        href='https://github.com/Jesusantiago/Pagina-QR'
                                        target='_black'
                                        variant='outlined'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('code')}
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                        {/* QR */}

                        {/*------------------------------------------------------------------*/}

                        {/* Component Card */}
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                },
                            }}>
                            <CardMedia
                                component='img'
                                image='/ComponentCard.png'
                                alt='Imagen representativa del projecto de NebulaWear'
                                sx={{
                                    height: 300,
                                    width: 1,
                                    objectPosition: 'center',
                                    objectFit: 'fill',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    gap: 3,
                                    my: 2,
                                    px: {xs: 2, sm: 4},
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        width='1'
                                        fontWeight='800'
                                    >
                                        {t('componentCard')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                                >
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>HTML</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>CSS</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>SASS</Typography>}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        href='https://jesusantiago.github.io/LandingPage/'
                                        target='_black'
                                        variant='contained'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('live')}
                                    </Button>

                                    <Button
                                        href='https://github.com/Jesusantiago/LandingPage'
                                        target='_black'
                                        variant='outlined'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('code')}
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                        {/* Component Card */}

                        {/*---------------------------------------------------------------------*/}
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                },
                            }}>
                            <CardMedia
                                component='img'
                                image='/NftCard.png'
                                alt='Imagen representativa del projecto de NebulaWear'
                                sx={{
                                    height: 300,
                                    width: 1,
                                    objectPosition: 'center',
                                    objectFit: 'fill',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    gap: 3,
                                    my: 2,
                                    px: {xs: 2, sm: 4},
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        width='1'
                                        fontWeight='800'
                                    >
                                        {t('ntfCard')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                                >
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>HTML</Typography>}
                                    />
                                    <Chip
                                        label={<Typography variant='caption' color='text.accent'
                                                           fontWeight='500'>CSS</Typography>}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: {xs: 'column', lg: 'row'},
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        href='https://jesusantiago.github.io/NFT/'
                                        target='_black'
                                        variant='contained'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('live')}
                                    </Button>

                                    <Button
                                        href='https://github.com/Jesusantiago/NFT'
                                        target='_black'
                                        variant='outlined'
                                        sx={{
                                            width: {xs: '100%', lg: '1/2'}
                                        }}
                                    >
                                        {t('code')}
                                    </Button>
                                </Box>
                            </Box>
                        </Card> {/* E-commerce 2 */}
                    </Box>

                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => router.push("/")}
                        sx={{
                            fontWeight: 'Bold',
                            alignSelf: 'center',
                            mt: 4
                        }}
                    >
                        {t('button')}
                    </Button>
                </Box>

            </Box>
        </>
    )
}