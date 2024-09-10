import GitHub from '@mui/icons-material/GitHub'
import Build from '@mui/icons-material/Build'
import Done from '@mui/icons-material/Done'
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Box, Button, Card, CardMedia, Chip, Divider, Typography } from '@mui/material';
import { useTranslations } from 'next-intl'

const Experience = () => {
    const t = useTranslations('Home.experience')

    return (
        <Box
            component='section'
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
                {/* agiliza */}
                <Button
                    href='https://agiliza-sa.com/'
                    target='_black'
                >
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
                        <CardMedia
                            component='img'
                            image='portfolio/agiliza1-1.png'
                            alt='Imagen presentativa de Agiliza'
                            sx={{
                                height: 320,
                                width: { xs: 1, lg: 345 },
                                objectPosition: 'center'
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
                            }}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography
                                    variant='h6'
                                    width={1/2}
                                    textAlign={'start'}
                                    fontWeight={'700'}
                                >
                                    {t('projectAgiliza.name')}
                                </Typography>
                                <Typography
                                    variant='button'
                                    width={1/2}
                                    textAlign={'right'}
                                >
                                    {t('projectAgiliza.date')}
                                </Typography>

                            </Box>
                            <Divider />
                            <Typography
                                variant='body1'
                                color='primary.transparent'
                                fontWeight='500'
                            >
                                {t('projectAgiliza.myRole')}
                            </Typography>

                            <Typography variant='body1'>
                                {t('projectAgiliza.description')}
                            </Typography>

                            <Box
                                sx={{
                                    display : 'flex',
                                    flexWrap : 'wrap',
                                    gap: 1,
                                    mt:6
                                }}
                            >
                                <Chip
                                    label='JavaScript'
                                />
                                <Chip
                                    label='React'
                                />
                                <Chip
                                    label='ReactStrap'
                                />
                            </Box>

                        </Box>
                    </Card>
                </Button>

                {/* Moorishville */}
                <Button>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            borderRadius: 4,
                            boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`
                        }}>
                        <CardMedia
                            component='img'
                            image='portfolio/moorishville.png'
                            alt='Imagen presentativa de Moorishville'
                            sx={{
                                height: 300,
                                width: { xs: 1, lg: 345 },
                                objectPosition: 'center'
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
                            }}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems : 'center'
                                }}
                            >
                                <Typography
                                    variant='h6'
                                    width={1/2}
                                    textAlign={'start'}
                                    fontWeight={'700'}
                                >
                                    {t('projectMoorishville.name')}
                                </Typography>
                                <Typography
                                    variant='button'
                                    width={1/2}
                                    textAlign={'right'}
                                >
                                    {t('projectMoorishville.date')}
                                </Typography>

                            </Box>

                            <Divider />
                            <Typography
                                variant='body1'
                                color='primary.transparent'
                                fontWeight='500'
                                textAlign='left'
                            >
                                {t('projectMoorishville.myRole')}
                            </Typography>
                            <Typography variant='body1' textAlign='left'>
                                {t('projectMoorishville.description')}
                            </Typography>

                            <Box
                                sx={{
                                    display : 'flex',
                                    flexWrap : 'wrap',
                                    gap: 1,
                                    mt:8
                                }}
                            >
                                <Chip
                                    label='HTML'
                                />
                                <Chip
                                    label='CSS'
                                />
                                <Chip
                                    label='JavaScript'
                                />
                            </Box>
                        </Box>
                    </Card>
                </Button>
            </Box>
        </Box>
    )
}

export default Experience;
// 