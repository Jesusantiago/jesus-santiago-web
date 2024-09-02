'use client'
import Circle  from '@mui/icons-material/Circle'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { Box, Button, Container, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {useTranslations} from 'next-intl'

const HeroSection = () => {
  const t = useTranslations('Home')
  return (
    <Grid
      container
      component='section'
      sx={{
        minHeight: '80svh',
        width:'.9',
        maxWidth: '1620px',
        borderRadius: 4,
        backgroundColor: (theme) => theme.palette.card.main,
        boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
        pt: {xs: 14, md: 10},
        px:2,
        mt: 2,
        alignItems: {xs: 'end', md: 'center'},
        justifyContent: {xs:'center', md: 'space-between'}
      }}>

      <Grid xs={12} lg={6} 
      component='article'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb:4
        }}
      >
        <Button
          variant='text'
          color='primary'
          size='large'
          sx={{
            mb: {xs: 0, sm: 1, md: 2}
          }}
          startIcon={
            <Circle color='secondary' />
          }
        >
          {t('hero.status')}
        </Button>

        <Typography
          variant='h1'
          component='h2'
          textAlign='center'
          fontWeight='700'
          sx={{width:1, textWrap: 'balance'}}
        >
          {t('hero.title')}

        </Typography>

        <Typography
          variant='h5'
          component='h1'
          textAlign='center'
          sx={{width:1, textWrap: 'balance'}}
        >
          {t('hero.subtitle')}
        </Typography>

        <Box
          display='flex'
          sx={{
            mt: {xs: 2, sm: 4, gap: '1rem'},
          }}
        >
          <Button
            color='secondary'
            variant='contained'
            size='large'
            endIcon={
              <ArrowCircleRightIcon/>
            }
          >
            {t('hero.btnCTA')}
          </Button>

          <Button
            variant='outlined'
            size='large'
            endIcon={
              <DownloadForOfflineRoundedIcon/>
            }
            target='_blank'
            href='CvJesusSantiago-Front-End.pdf'
          >
            {t('hero.btnCV')}
          </Button>
        </Box>


      </Grid>

      <Grid xs={12} lg={6}
        component='article'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <picture className='object'>
          <source srcSet='contenido-pequeña.png' media='(max-width:750px)' type='image/png'/>
          <source srcSet='contenido-grande.png' media='(max-width:1080px)' type='image/png'/>
          <img src='contenido-grande.png' alt='imagen de presentaación del hero de Jesús Santiago' className='object'/>
        </picture>
      </Grid>

    </Grid>
  )
}

export default HeroSection

