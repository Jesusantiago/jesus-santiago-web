import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Divider, Link, Button } from '@mui/material'
import React from 'react'
import NewsLetterBD from '../database/Newletter.js'
import NextLink from 'next/link'
const Newletter = () => {
    console.log(NewsLetterBD)

    return (
        <Box
            component='section'
            sx={{
                width: '.9',
                maxWidth: '1620px',
                mt: 6,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'space-between' },
                gap: 4,
            }}
        >
            <Typography
                variant='h3'
                component='h3'
                textAlign='center'
                fontWeight='700'
                sx={{
                    textWrap: 'balance',
                    width: '1',
                    px: 2,
                }}
            >
                Te interesa o estas comenzando en la programación, he escrito estos articulos para ti.
            </Typography>

            {NewsLetterBD.map((val) => {
                return (
                    <Card
                        component='article'
                        sx={{
                            maxWidth: 345,
                            height: 345,
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

        </Box>
    )
}

export default Newletter