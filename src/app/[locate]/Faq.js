import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardMedia, Fade, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded'
import { useTranslations } from 'next-intl'
import { useState } from 'react';

const Faq = () => {
    const t = useTranslations('Home.FAQ')

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

                <Accordion
                    sx={{
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography
                            variant='h5'
                        >
                            ¿Que puedo hacer por ti?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant='body1'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>


                </Accordion>

                <Accordion
                    sx={{
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography
                            variant='h5'
                        >
                            Custom transition using Fade
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant='body1'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>


                </Accordion>

                <Accordion
                    sx={{
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography
                            variant='h5'
                        >
                            Custom transition using Fade
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant='body1'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>


                </Accordion>

                <Accordion
                    sx={{
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography
                            variant='h5'
                        >
                            Custom transition using Fade
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant='body1'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>


                </Accordion>

                <Accordion
                    sx={{
                        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                    }}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography
                            variant='h5'
                        >
                            Custom transition using Fade
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant='body1'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>


                </Accordion>


            </Box>
        </Box>
    )
}

export default Faq
