import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    Link,
    Button,
    Stack,
    Skeleton
} from '@mui/material'
import React, {useEffect, useState} from 'react'
import NewsLetterBD from '@/database/Newletter'
import {useTranslations} from 'next-intl';
import {useParams} from "next/navigation";
import {log} from "next/dist/server/typescript/utils";
import {createAsyncLocalStorage} from "next/dist/client/components/async-local-storage";

    const path = process.env.NEXT_PUBLIC_API_URL;
    const pathImage = process.env.NEXT_PUBLIC_API_IMAGE ;

const Blog = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const t = useTranslations('Home.blog');
    const {locate} = useParams();
    console.log(locate);

    useEffect(() => {
        fetch(`${path}Blogs?populate=*&locale=${locate}`)
            .then((res) => res.json())
            .then((res) => {
                    const { data } = res;
                    setData(data);
                    setLoading(false);
                }
            );

    }, [path]);

    console.log(data)




    return (
        <Box
            component='section'
            sx={{
                width: '.8',
                maxWidth: '1520px',
                mt: 10,
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
                    background: (theme) => `linear-gradient(282deg, ${theme.palette.text.secondary} 0%, ${theme.palette.text.main} 53%, ${theme.palette.text.secondary} 108%)`,    
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: (theme) => theme.typography.lexend
                }}
            >
                {t('title')}
            </Typography>
            <Stack direction={{xs:'column', md: 'row'}} spacing={{xs:6, lg:10}}>
            {loading ? <Skeleton variant="rounded" width={210} height={250} />
                :
                data.map((val) => {
                    return (
                        <Card
                        key={val.id}
                            component='article'
                            sx={{
                                width:'1',
                                maxWidth: 345,
                                minHeight: 345,
                                backgroundColor: (theme) => theme.palette.card.main,
                                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                            }}
                        >
                            <Button href={val.Link} target='_black'>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        height='180'
                                        image={`${pathImage}${val.Picture.url}`}
                                        alt={val.Picture.alternativeText}
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
                                            {val.Article}
                                        </Typography>
                                        <Divider />
                                        <Typography
                                            sx={{
                                                color: 'primary.main',
                                                opacity: '.8'
                                            }}
                                        >
                                            {val.Description}
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

export default Blog
