import { LinkRounded } from "@mui/icons-material"
import GitHub from "@mui/icons-material/GitHub"
import { Box, Card, CardMedia, Chip, Divider, Typography } from "@mui/material"
import { useTranslations } from 'next-intl'
import Link from "next/link"


const Project = () => {

    const t = useTranslations('Home.project')

    return (
        <Box
            component='section'
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
                    fontFamily: (theme) => theme.typography.lexend.fontFamily,
                }}
            >
                {t('title')}
            </Typography>

            <Box
                component='section'
                sx={{
                    width: { xs: 0.8, lg: .7 },
                    maxWidth: '1255px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}
            >
                {/* nebula wear */}
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row-reverse' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}>
                    <CardMedia
                        component='img'
                        image='portfolio/nebulaWear1-1.png'
                        alt='Imagen representativa del projecto de NebulaWear'
                        sx={{
                            height: 350,
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
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                variant='h6'
                                width={1 / 2}
                            >
                                {t('projectNebula.name')}
                            </Typography>
                            <Typography
                                variant='button'
                                width={1 / 2}
                                textAlign={'right'}
                            >
                                {t('projectNebula.status')}
                            </Typography>

                        </Box>

                        <Divider />

                        <Typography
                            variant='body1'
                            color='primary.transparent'
                            fontWeight='500'
                        >
                            {t('projectNebula.myRole')}
                        </Typography>

                        <Typography variant='body1' >
                            {t('projectNebula.description')}
                        </Typography>

                        <Box
                            sx={{display : 'flex', flexWrap: 'wrap', gap: 1, mt:4}}
                        >
                            <Chip
                                label='JavaScript'
                            />
                            <Chip
                                label='React'
                            />
                            <Chip
                                label='Material UI'
                            />
                            <Chip
                                label='Firebase'
                            />
                            <Chip
                                label='GitHub'
                                icon={<GitHub/>}
                                onClick={ () => window.open('https://github.com/Jesusantiago/NebulaWear', '_black')}
                            />

                        </Box>
                    </Box>

                </Card>

                {/* Funko Shop */}
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row-reverse' },
                        borderRadius: 4,
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}>
                    <CardMedia
                        component='img'
                        image='portfolio/funkoShop.webp'
                        alt='Imagen representativa del projecto de NebulaWear'
                        sx={{
                            height: 350,
                            width: { xs: 1, lg: 345 },
                            objectPosition: 'center',
                            objectFit: 'cover'
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
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                variant='h6'
                                width={1 / 2}
                            >
                                {t('projectFunko.name')}
                            </Typography>
                            <Typography
                                variant='button'
                                width={1 / 2}
                                textAlign={'right'}
                            >
                                {t('projectFunko.status')}
                            </Typography>

                        </Box>

                        <Divider />

                        <Typography
                            variant='body1'
                            color='primary.transparent'
                            fontWeight='500'
                        >
                            {t('projectFunko.myRole')}
                        </Typography>

                        <Typography variant='body1' >
                            {t('projectFunko.description')}
                        </Typography>

                        <Box
                            sx={{display : 'flex', flexWrap: 'wrap', gap: 1, mt:4}}
                        >
                            <Chip
                                label='HTML'
                            />
                            <Chip
                                label='CSS'
                            />
                            <Chip
                                label='SASS'
                            />
                            <Chip
                                label='JavaScript'
                            />
                            <Chip
                                label='Node.js'
                            />
                            <Chip
                                label='Express.js'
                            />
                            <Chip
                                label='MySQL'
                            />
                            <Chip
                                label='GitHub'
                                icon={<GitHub/>}
                                onClick={ () => window.open('https://github.com/Jesusantiago/Funko', '_black')}
                            />
                            <Chip
                                label='Link'
                                icon={<LinkRounded/>}
                                onClick={ () => window.open('https://funko-shop-swart.vercel.app/', '_black')}
                            />

                        </Box>
                    </Box>

                </Card>

            </Box>

        </Box>
    )
}

export default Project
