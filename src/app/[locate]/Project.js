import {Box, Button, Card, CardMedia, Chip, Divider, Typography} from "@mui/material"
import {useTranslations} from 'next-intl'
import {useParams} from "next/navigation";
import Link from "next/link";

const Project = ({id}) => {
    const {locate} = useParams()
    const t = useTranslations('Home.project')

    return (
        <Box
            component='section'
            id='project'
            sx={{
                width: '1',
                backgroundColor: (theme) => theme.palette.card.main,
                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                py: {xs: 6, md: 10},
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
                    fontFamily: (theme) => theme.typography.lexend,
                }}
            >
                {t('title')}
            </Typography>

            <Box
                component='section'
                sx={{
                    width: {xs: 0.8, lg: .7},
                    maxWidth: '1255px',
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', lg: '1fr 1fr'},
                    gap: 5
                }}
            >

                {/* Rental Car*/}
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
                        image='portfolio/RentalCar.jpg'
                        alt='Imagen representativa del projecto de NebulaWear'
                        sx={{
                            height: 350,
                            width: 1,
                            objectPosition: 'center',
                            objectFit: 'cover'

                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            my: 2,
                            px: { xs: 2, sm: 4 },
                            height: '100%',
                            gap: 2
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
                                fontWeight='700'
                                width={1 / 2}
                            >
                                {t('projectRentalCar.name')}
                            </Typography>
                            <Typography
                                fontWeight='500'
                                variant='button'
                                width={1 / 2}
                                textAlign={'right'}
                            >
                                {t('projectRentalCar.status')}
                            </Typography>

                        </Box>

                        <Divider/>

                        <Typography variant='body1'>
                            {t('projectRentalCar.description')}
                        </Typography>

                        <Box
                            sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                        >
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>JAVA</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>SPRING BOOT</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>KOTLIN - ANDROID</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>JUNIT 5</Typography>}
                            />

                        </Box>

                        <Divider/>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                href='https://github.com/Jesusantiago/RentalCar'
                                target='_black'
                                fullWidth
                                variant='outlined'
                            >
                                {t('button2')}
                            </Button>
                        </Box>
                    </Box>
                </Card> {/* Rental Car*/}

                {/*---------------------------------------------------------------------------- */}

                {/* Funko Shop */}
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
                        image='portfolio/funkoShop.webp'
                        alt='Imagen representativa del projecto de NebulaWear'
                        sx={{
                            height: 350,
                            width: 1,
                            objectPosition: 'center',
                            objectFit: 'cover'

                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            my: 2,
                            px: { xs: 2, sm: 4 },
                            height: '100%',
                            gap: 2
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
                                width= '1'
                                fontWeight='700'
                            >
                                {t('projectFunko.name')}
                            </Typography>

                        </Box>

                        <Divider/>

                        <Typography variant='body1' fontWeight='400'>
                            {t('projectFunko.description')}
                        </Typography>

                        <Box
                            sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                        >
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>HTML</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>CSS</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>SASS</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>JAVASCRIPT</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>NODE</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>EXPRESS</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>MYSQL</Typography>}
                            />
                        </Box>

                        <Divider/>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', lg: 'row'},
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Button
                                href='https://funko-shop-swart.vercel.app/'
                                target='_black'
                                variant='contained'
                                sx={{
                                    width: {xs: '100%', lg: '1/2'}
                                }}
                            >
                                {t('button1')}
                            </Button>

                            <Button
                                href='https://github.com/Jesusantiago/Funko'
                                target='_black'
                                variant='outlined'
                                sx={{
                                    width: {xs: '100%', lg: '1/2'}
                                }}
                            >
                                {t('button2')}
                            </Button>
                        </Box>

                    </Box>
                </Card> {/* Funko Shop */}

                {/*---------------------------------------------------------------------------- */}

                {/* Jardín Burbujas */}
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
                        image='portfolio/JardinBurbuja.jpg'
                        alt='Imagen representativa del projecto de NebulaWear'
                        sx={{
                            height: 350,
                            width: 1,
                            objectPosition: 'center',
                            objectFit: 'cover'

                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            my: 2,
                            px: { xs: 2, sm: 4 },
                            gap: 2,
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
                                fontWeight='700'
                            >
                                {t('projectJardín.name')}
                            </Typography>

                        </Box>

                        <Divider/>

                        <Typography variant='body1' fw='400'>
                            {t('projectJardín.description')}
                        </Typography>

                        <Box
                            sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                        >
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>HTML</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>CSS</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>JAVASCRIPT</Typography>}
                            />
                        </Box>

                        <Divider/>

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
                                href='https://jesusantiago.github.io/JardinBurbujas/'
                                target='_black'
                                variant='contained'
                                sx={{
                                    width: {xs: '100%', lg: '1/2'}
                                }}
                            >
                                {t('button1')}
                            </Button>

                            <Button
                                href='https://github.com/Jesusantiago/JardinBurbujas'
                                target='_black'
                                variant='outlined'
                                sx={{
                                    width: {xs: '100%', lg: '1/2'}
                                }}
                            >
                                {t('button2')}
                            </Button>
                        </Box>
                    </Box>
                </Card> {/* Jardín Burbujas */}

                {/*---------------------------------------------------------------------------- */}

                {/* E-commerce 2 */}
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
                        image='portfolio/Shop.jpg'
                        alt='Imagen representativa del projecto de NebulaWear'
                        sx={{
                            height: 350,
                            width: 1,
                            objectPosition: 'center',
                            objectFit: 'cover'
                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            gap: 2,
                            my: 2,
                            px: { xs: 2, sm: 4 },
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
                                fontWeight='700'
                            >
                                {t('projectOtro.name')}
                            </Typography>
                        </Box>

                        <Divider/>

                        <Typography variant='body1' fontWeight='400'>
                            {t('projectOtro.description')}
                        </Typography>

                        <Box
                            sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}
                        >
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>HTML</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>CSS</Typography>}
                            />
                            <Chip
                                label={<Typography variant='caption' color='text.accent' fontWeight='500'>JAVASCRIPT</Typography>}
                            />
                        </Box>

                        <Divider/>

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
                                href='https://jesusantiago.github.io/Shop/index.html'
                                target='_black'
                                variant='contained'
                                sx={{
                                    width: {xs: '100%', lg: '1/2'}
                                }}
                            >
                                {t('button1')}
                            </Button>

                            <Button
                                href='https://github.com/Jesusantiago/Shop'
                                target='_black'
                                variant='outlined'
                                sx={{
                                    width: {xs: '100%', lg: '1/2'}
                                }}
                            >
                                {t('button2')}
                            </Button>
                        </Box>
                    </Box>
                </Card> {/* E-commerce 2 */}
            </Box>

            <Link href={`/${locate}/project`}>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        fontWeight: "600",
                        letterSpacing: '0.5px',
                    }}
                >
                    {t('button')}
                </Button>
            </Link>

        </Box>
    )
}

export default Project
