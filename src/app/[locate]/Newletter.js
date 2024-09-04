import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Divider, Link, Button, Stack } from '@mui/material'
import React from 'react'
import NewsLetterBD from '@/database/Newletter'
import {useTranslations} from 'next-intl'


const Newletter = () => {
    const t = useTranslations('Home')


    return (
        <Box
            component='section'
            sx={{
                width: '.8',
                maxWidth: '1520px',
                my: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'space-between' },
                gap: 4,
            }}
        >
            <Typography
                variant='h2'
                component='h3'
                textAlign='center'
                fontWeight='500'
                sx={{
                    textWrap: 'balance',
                    width: '1',
                    px: 2,
                    fontFamily: (theme) => theme.typography.lexend.fontFamily
                }}
            >
                {t('newletter.title')}
            </Typography>

            <Stack direction={{xs:'column', md: 'row'}} spacing={{xs:6, lg:10}}>
                {NewsLetterBD.map((val) => {
                    return (
                        <Card
                        key={val.article}
                            component='article'
                            sx={{
                                width:'1',
                                maxWidth: 345,
                                minHeight: 345,
                                backgroundColor: (theme) => theme.palette.card.main,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                            }}
                        >
                            <Button href={val.link} target='_black'>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        height='180'
                                        image={val.image}
                                        alt='Imagen de un articulo'
                                        sx={{objectFit:'cover'}}
                                    />
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            py: 2,
                                            px: 4

                                        }}
                                    >
                                        <Typography
                                            fontWeight='700'
                                        >
                                            {val.article}
                                        </Typography>
                                        <Divider />
                                        <Typography
                                            sx={{
                                                color: 'primary.main',
                                                opacity: '.8'
                                            }}
                                        >
                                            {val.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Button>
                        </Card>
                    )
                })}
            </Stack>


        </Box>
    )
}

export default Newletter
