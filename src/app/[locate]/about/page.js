'use client'

import {Avatar, Container, Typography} from "@mui/material"
import {useRouter} from "next/navigation"
import ButtonChange from "@/components/ButtonChange";
import Box from "@mui/material/Box";
import {useTranslations} from "next-intl";
import Grid from '@mui/material/Grid';

export default function About() {
    const router = useRouter();
    const t = useTranslations('AboutMe')

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

                    <Box component="section" sx={{ py: 8, textAlign: 'center' }}>
                        <Typography variant="h3" sx={{ fontWeight: 600 }}>
                            {t('title')}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 2 }}>
                            {t('subtitle')}
                        </Typography>
                    </Box>

                    <Container maxWidth="md" sx={{ py: 6 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {/* Imagen opcional */}
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar
                                    src="/profileAboutMe.png"
                                    alt="Jesús Santiago"
                                    sx={{ width: 120, height: 120, objectPosition: 'bottom' }}
                                />
                            </Box>


                            <Typography
                                variant="body1"
                                sx={{ color: 'text.primary', lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                {t('paragraph1')}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: 'text.primary', lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                {t('paragraph2')}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: 'text.primary', lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                {t('paragraph3')}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: 'text.primary', lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                {t('paragraph4')}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: 'text.primary', lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                {t('paragraph5')}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: 'text.primary', lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                {t('paragraph6')}
                            </Typography>
                        </Box>
                    </Container>

                    <Container maxWidth="lg" sx={{ py: 8 }}>
                        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                            {t('titleTwo')}
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={7}>
                                <Box
                                    component="img"
                                    src="/me.jpg"
                                    alt="Foto practicando Airsoft"
                                    sx={{
                                        width: '100%',
                                        height: 600,
                                        objectFit: 'cover',
                                        borderRadius: 3,
                                        boxShadow: 4,
                                        objectPosition: 'top'
                                    }}
                                />
                                <Typography
                                    textAlign='center'
                                    fontWeight='bold'
                                >
                                    {t('caption1')}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={5}>
                                <Box
                                    component="img"
                                    src="/setup.jpeg"
                                    alt="Mi setup tecnológico"
                                    sx={{
                                        width: '100%',
                                        height: 300,
                                        objectFit: 'cover',
                                        borderRadius: 3,
                                        boxShadow: 4,
                                    }}
                                />
                                <Typography
                                    textAlign='center'
                                    fontWeight='bold'
                                >
                                    {t('caption2')}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Box
                                    component="img"
                                    src="/montana.jpg"
                                    alt="Aventura en la montaña"
                                    sx={{
                                        width: '100%',
                                        height: 800,
                                        objectFit: 'cover',
                                        borderRadius: 3,
                                        boxShadow: 4,
                                        mt: 2,
                                    }}
                                />
                                <Typography
                                    textAlign='center'
                                    fontWeight='bold'
                                >
                                    {t('caption3')}
                                </Typography>

                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}