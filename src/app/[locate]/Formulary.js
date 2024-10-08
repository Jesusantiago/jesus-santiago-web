import { Alert } from "@mui/material"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useTranslations } from 'next-intl'
import { useState } from "react"
import { useForm } from 'react-hook-form'

const Formulary = () => {
    const [ alert, setAlert ] = useState(null)

    const t = useTranslations('Home.formulary')
    const { register, handleSubmit, formState: {errors} } = useForm()

    const OnSubmit = async (data) => {
        console.log(JSON.stringify(data))
        try{

            const response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            if(response.ok) setAlert(true)
            else setAlert(false)
        } catch(err){
            console.log(err)
        }
    }
 
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

            {alert && <Alert variant="outlined" severity="success"> Su correo ha sido enviado </Alert>}

            <Box
                component='form'
                onSubmit={handleSubmit(OnSubmit)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap : 'wrap',
                    gap: 2
                }}
            >

                <TextField 
                    label={t('name')}
                    variant="filled"
                    sx={{
                        width: .4,

                    }}
                    {...register('name')}
                />

                <TextField 
                    label={t('email')}
                    variant="filled"
                    sx={{
                        width: .4
                    }}
                    {...register('email')}

                />
                
                <TextField 
                    label={t('text')}
                    variant="filled"
                    sx={{
                        width: 1
                    }}
                    {...register('text')}
                />

                <Button
                    variant="contained"
                    type="submit"
                > Hola 
                
                </Button>
            </Box>

        </Box>
    )
}

export default Formulary
  