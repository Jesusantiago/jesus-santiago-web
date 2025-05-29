import {Box, Button, Card, CardMedia, Divider, Typography} from '@mui/material'
import BrushIcon from '@mui/icons-material/Brush';
import {useTranslations} from 'next-intl'
import {DateRange} from '@mui/icons-material';
import {SchoolRounded} from '@mui/icons-material';
import {LocationOnRounded} from '@mui/icons-material';
import {DoneRounded} from '@mui/icons-material';
import {ComputerRounded} from '@mui/icons-material';
import Link from "next/link";
import {useParams} from "next/navigation";

const Education = () => {
    const t = useTranslations('Home.education')
    const {locate} = useParams()

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
                    width: {xs: 0.95, lg: 0.8},
                    maxWidth: '1620px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8
                }}
            >
                {/* eep-igroup */}
                <Card
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        // flexDirection: {xs: 'column', lg: 'row'},
                        flexDirection: 'column',
                        borderRadius: 4,
                        paddingBottom: 2,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary},
                         -15px -15px 30px ${theme.palette.card.shadowSecondary}`,


                    }}>

                    <CardMedia
                        component='img'
                        image='institute/logo_eepigroup.png'
                        alt='Imagen presentativa de Moorishville'
                        sx={{
                            height: 150,
                            // width: {xs: 1, lg: 265},
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
                            gap: 2,
                            py: 2,
                            px: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: {xs: 'start', sm: 'center'},
                                flexDirection: {xs: 'column', lg: 'row'},
                                gap: {xs: 2, sm: 0},
                            }}
                        >
                            <Typography
                                color={({palette}) => palette.primary.main}
                                sx={{display: 'flex', alignItems: 'center', gap: 1, fontSize:"22px", fontWeight: "bold"}}>
                                <BrushIcon/> {t('eep.title')}
                            </Typography>
                            <Typography
                                // color='primary.text.neutral'
                                color='text.neutral'
                                sx={{display: 'flex', alignItems: 'center', gap: 1, fontSize:"16px"}}>
                                <DateRange/> {t('eep.date')}
                            </Typography>
                        </Box>
                        <Divider/>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: {xs: 'start', sm: 'center'},
                                flexDirection: {xs: 'column', lg: 'row'},
                                gap: {xs: 2, sm: 0},
                            }}
                        >
                            <Typography
                                color='text.main'
                                sx={{display: 'flex', alignItems: 'center', gap: 1, fontSize:"18px", fontWeight: "600"}}>
                                <SchoolRounded/> {t('eep.institute')}
                            </Typography>
                            <Typography
                                color='text.secondary'
                                sx={{display: 'flex', alignItems: 'center', gap: 1, fontSize:"15px", fontWeight:"regular"}}>
                                <LocationOnRounded
                                /> {t('eep.location')}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography 
                                color='text.main'
                                sx={{display: 'flex', alignItems: 'center', gap: 1, fontSize:"16px", fontWeight: "Regular"}}>
                                <DoneRounded/> {t('eep.description')}
                            </Typography>
                        </Box>

                        <Divider/>

                        <Typography
                            color='text.muted'
                            sx={{fontSize:"16px", fontWeight: "medium"}}>
                            Durante este ciclo he profundizado en desarrollo Backend con Java y Spring Boot, y en
                            desarrollo móvil con Android. Destaco la creación de una app completa desde cero, además de
                            proyectos en Python, C# y Java que me permitieron trabajar con
                            interfaces gráficas, archivos locales y estructuras de datos. Este camino formativo ha sido
                            clave para definir mi perfil como desarrollador, afianzando tanto mis habilidades técnicas
                            como mi pasión por crear soluciones funcionales y bien estructuradas.
                        </Typography>

                        <Divider/>

                        <Typography
                            color='text.accent'
                            fontWeight='600'
                        >
                            MySQL - JAVA - SPRING BOOT - PYTHON - C# - ANDROID - TEST
                        </Typography>

                    </Box>


                </Card>

                <Link href={`/${locate}/education`}>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            fontWeight:"600",
                            letterSpacing: '0.5px',
                        }}
                    >
                        Ver más
                    </Button>
                </Link>



            </Box>
        </Box>
    )
}

export default Education
