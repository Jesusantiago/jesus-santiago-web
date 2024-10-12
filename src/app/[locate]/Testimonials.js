import { Avatar, Box, Card, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const Testimonials = () => {
    const t = useTranslations('Home.testimonials')
    const [ activeStep, setActiveStep ] = useState(0);



  return (
    <Box
        component='section'
        sx={{
            width: '1',
            py : { xs: 6, md: 10},
            px: 2,
            mt:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6
        }}
    >
        <Typography
            variant='h2'
            component='h3'
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
                width: { xs: 0.8, lg: .7 },
                maxWidth: '1255px',
                minHeight: '450px',
                display: 'flex',
                // flexWrap: 'wrap',
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap:6,
            }}
        >
            {/* memi */}
            <Card
                sx={{
                    // width: {xs : 1, md: .45},
                    width: 1,
                    py: 6,
                    px: 4,
                    boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    borderRadius: 4
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4
                    }}
                >
                    <Avatar 
                        alt='avatar del primer testimonio' 
                        src='girlTestimoneal.png'
                        sx={{
                            width: 64,
                            height: 64,
                        }}    
                    />
                </Box>

                <Typography
                    variant='body1'
                    sx={{
                        mb:2
                    }}
                >
                    {t('memi.description')}
                </Typography>

                <Typography
                    sx={{
                        mb:2
                    }}
                >
                <b>{t('memi.name')}</b>
                </Typography>

                <Typography>
                {t('memi.title')}
                </Typography>

                
            </Card>

            {/* tywan */}
            <Card
                sx={{
                    // width: {xs : 1, md: .45},
                    width: 1,
                    height: '100%',
                    py: 6,
                    px: 4,
                    boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    borderRadius: 4,

                }}
            >
                <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4,
                }}
                >
                    <Avatar 
                        alt='avatar del primer testimonio' 
                        src='manTestimoneal.png'
                        sx={{
                            width: 64,
                            height: 64,
                        }}    
                    />
                </Box>

                <Typography
                    sx={{
                        mb:2
                    }}
                >
                    {t('freelacer.description')}
                </Typography>

                <Typography
                    sx={{
                        mb:2
                    }}
                >
                <b>{t('freelacer.name')}</b>
                </Typography>

                <Typography
                    sx={{
                        mb:2
                    }}
                >
                {t('freelacer.title')}
                </Typography>

                
            </Card>


        </Box>

    </Box>
  )
}

export default Testimonials
