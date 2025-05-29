import { LinkRounded } from "@mui/icons-material"
import GitHub from "@mui/icons-material/GitHub"
import {Box, CardMedia, Typography, Link, Button} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import { useParams } from "next/navigation";
import { useTranslations } from 'next-intl'




const AboutMe = () => {

    const t = useTranslations('Home.about')
    const {locate} = useParams()

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
                        image='cerebro.png'
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
                            sx={{
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                textWrap:'balance',
                                fontSize: {xs: '16px', sm: '18px'}
                        }}
                        >
                            {t('paragraph1-1')}
                        </Typography>

                        <Typography
                            sx={{
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                textWrap:'balance',
                                fontSize: {xs: '16px', sm: '18px'}
                        }}
                        >
                            {t('paragraph2-1')} <b> {t('paragraph2-2')} </b>
                        </Typography>

                        <Typography
                            sx={{
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                textWrap:'balance',
                                fontSize: {xs: '16px', sm: '18px'}
                        }}
                        >
                            {t('paragraph3-1')}
                        </Typography>

                        <Typography
                            sx={{
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                textWrap:'balance',
                                fontSize: {xs: '16px', sm: '18px'}
                        }}
                        >
                            {t('paragraph4-1')}
                        </Typography>


                </Grid>


            </Grid>
            <Link href={`/${locate}/about`}>About</Link>

            {/*<Link href="/${locate}/about">*/}
                    {/*<Button*/}
                    {/*    variant="contained"*/}
                    {/*    color="secondary"*/}

                    {/*>*/}
                    {/*    {t('title')}*/}
                    {/*</Button>*/}
                {/*About*/}
                {/*</Link>*/}

        </Box>
    )
}

export default AboutMe
