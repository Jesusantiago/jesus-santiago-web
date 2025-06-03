'use client'


import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";
import ButtonChange from "@/components/ButtonChange";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Box, Button, Card, CardContent, CardMedia, Chip, Divider, Stack, Typography} from "@mui/material";

export default function Project() {
    const router = useRouter();
    const t = useTranslations('Project')

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

                    <Box component="section" sx={{py: 8, textAlign: 'center'}}>
                        <Typography variant="h3" sx={{fontWeight: 600}}>
                            {t('title')}
                        </Typography>
                        <Typography variant="subtitle1" sx={{color: 'text.secondary', mt: 2}}>
                            {t('subtitle')}
                        </Typography>
                    </Box>

                    <Divider/>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                            gap: 4,
                            mt: 6,
                        }}
                    >
                        {[1, 2].map((_, index) => (
                            <Card
                                key={index}
                                elevation={3}
                                sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    bgcolor: (theme) => theme.palette.card.main,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/images/project-sample.jpg" // reemplaza por tu imagen
                                    alt="Project thumbnail"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{ fontFamily: (theme) => theme.typography.lexend }}
                                    >
                                        Project Title
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        January 2025
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ my: 2, color: 'text.primary' }}
                                    >
                                        Brief description of the project. What problem it solves, what it does, or how you built it.
                                    </Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                                        <Chip label="React" />
                                        <Chip label="Node.js" />
                                        <Chip label="MongoDB" />
                                    </Stack>
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            endIcon={<LaunchIcon />}
                                            href="#"
                                            target="_blank"
                                        >
                                            Live
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                            endIcon={<GitHubIcon />}
                                            href="#"
                                            target="_blank"
                                        >
                                            Code
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>

                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => router.push("/")}
                        sx={{
                            fontWeight: 'Bold',
                            alignSelf: 'center'
                        }}
                    >
                        {t('button')}
                    </Button>
                </Box>
            </Box>
        </>
    )
}