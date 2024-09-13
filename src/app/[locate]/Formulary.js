import { LinkRounded } from "@mui/icons-material"
import GitHub from "@mui/icons-material/GitHub"
import { Box, Button, Card, CardContent, CardMedia, Chip, Divider, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/routing";



const Formulary = () => {

    const t = useTranslations('Home.formulary')

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

            

        </Box>
    )
}

export default Formulary
