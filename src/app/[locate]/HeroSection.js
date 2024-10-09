'use client'
import Circle  from '@mui/icons-material/Circle'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { Box, Button, Container, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {useTranslations} from 'next-intl'
import {useState} from "react";
import ModalForm from "@/components/ModalForm";

const HeroSection = () => {
    const [ open, setOpen ] = useState( false)
  const t = useTranslations('Home')

    const handleOpen = () => { setOpen( true ); };
    const handleClose = () => { setOpen( false ); };

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
        pt: {xs: 14, md: 20},
        px:2,
        pl:{xs:2, md:8},
        mt: 2,
        alignItems: {xs: 'end', md: 'center'},
        justifyContent: {xs:'center', md: 'space-between'}
      }}>

      <Grid xs={12} md={7} 
      component='article'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: {xs:'center', md:'start'},
          mb:4,
        }}
      >
        <Button
          variant='text'
          color='primary'
          size='large'
          sx={{
            mb: {xs: 0, sm: 1, fontWeight:'700'},
            alignSelf: 'center'
          }}
          startIcon={
            <Circle color='success' />
          }
        >
          {t('hero.status')}
        </Button>

        <Typography
          variant='h1'
          component='h2'
          textAlign={{xs:'center', md: 'start'}}
          fontWeight='700'
          sx={{
            width:1, 
            textWrap: 'balance',
            background: (theme) => `linear-gradient(282deg, ${theme.palette.text.secondary} 0%, ${theme.palette.text.main} 53%, ${theme.palette.text.secondary} 108%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: (theme) => theme.typography.lexend
        }}
        >
          {t('hero.title')}

        </Typography>

        <Typography
          variant='h4'
          component='h1'
          textAlign= {{xs:'center', md: 'start'}}
          sx={{width:1, textWrap: 'balance', mb:2}}
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
            onClick={handleOpen}
            endIcon={
              <ArrowCircleRightIcon/>
            }
            sx={{
              fontFamily: (theme) => theme.typography.lexend
            }}
          >
            {t('hero.btnCTA')}
          </Button>

            <ModalForm open={open} handleClose={handleClose} />

          <Button
              
            variant='outlined'
            size='large'
            endIcon={
              <DownloadForOfflineRoundedIcon/>
            }
            sx={{
              fontFamily: (theme) => theme.typography.lexend
            }}
            target='_blank'
            href='CvJesusSantiago-Front-End.pdf'
          >
            {t('hero.btnCV')}
          </Button>
        </Box>


      </Grid>

      <Grid xs={12} md={5}
        component='article'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <picture className='object'>
          {/* <source srcSet='contenido-pequeña.png' media='(max-width:750px)' type='image/png'/>
          <source srcSet='contenido-grande.png' media='(max-width:1080px)' type='image/png'/> */}
          {/* <img src='contenido-grande.png' alt='imagen de presentaación del hero de Jesús Santiago' className='object'/> */}
          <img src='hero.webp' alt='imagen de presentación del hero de Jesús Santiago' className='hola'/>
        </picture>
      </Grid>

    </Grid>
  )
}

export default HeroSection

