import { LinkRounded } from "@mui/icons-material"
import GitHub from "@mui/icons-material/GitHub"
import { Box, CardMedia, Typography, Link } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslations } from 'next-intl'




const AboutMe = () => {

    const t = useTranslations('Home.about')

    return (
        <Box
            component='section'
            id='aboutMe'
            sx={{
                width: '1',
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
                    fontFamily: (theme) => theme.typography.lexend,
                }}
            >
                {t('title')}
            </Typography>

            <Grid
                container
                component='section'
                sx={{
                    width: { xs: 0.8, lg: .7 },
                    maxWidth: '1620px',
                    gap: {xs: 4, md: 0}
                }}
            >

                <Grid xs={12} md={5}>
                    <CardMedia
                        component='img'
                        image='aboutMe1.webp'
                        alt='Imagen representativa del projecto de NebulaWear'
                        sx={{
                            height: {xs: 300, md: 1},
                            width: { xs: 1, md: 350 },
                            objectPosition: 'center',
                            objectFit: 'contain'
                        }}
                    />
                </Grid>

                <Grid xs={12} md={7}
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                    }}
                >

                        <Typography
                            variant="h5"
                            sx={{textWrap:'balance'}}
                        >
                            {t('paragraph1-1')} <b>{t('paragraph1-2')}</b> {t('paragraph1-3')} <b>{t('paragraph1-4')}</b> {t('paragraph1-5')} <b>{t('paragraph1-6')}</b> {t('paragraph1-7')}
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{textWrap:'balance'}}
                        >
                            {t('paragraph1-10')}
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{textWrap:'balance'}}
                        >
                            {t('paragraph2-1')}
                            <Link variant='text' href='https://www.eep-igroup.es/tecnico-superior-doble-titulacion-dam-daw.php' target='_black'><b>{t('paragraph2-2')}</b></Link>
                            {t('paragraph2-3')}
                            <Link variant='text' href='https://www.eep-igroup.es' target='_black'><b>{t('paragraph2-4')}</b> </Link>
                            {t('paragraph2-5')}
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{textWrap:'balance'}}
                        >
                            {t('paragraph3-1')} <b>{t('paragraph3-2')}</b> {t('paragraph3-3')} <b>{t('paragraph3-4')}</b> {t('paragraph3-5')} <b>{t('paragraph3-6')}</b> {t('paragraph3-7')} <b>{t('paragraph3-8')}</b>
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{textWrap:'balance'}}
                        >
                            {t('paragraph4-1')} <b>{t('paragraph4-2')}</b> {t('paragraph4-3')} <b>{t('paragraph4-4')}</b>
                        </Typography>

                </Grid>


            </Grid>

            {/*<Link href='/about'> */}
            {/*        <Button*/}
            {/*            variant="contained"*/}
            {/*            color="secondary"*/}
            {/*            */}
            {/*        >*/}
            {/*            {t('title')}*/}
            {/*        </Button>  */}
            {/*    </Link>*/}

        </Box>
    )
}

export default AboutMe
