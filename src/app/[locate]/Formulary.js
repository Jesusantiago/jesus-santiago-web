
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useTranslations } from 'next-intl'
import { useState } from "react"
import { useForm } from 'react-hook-form'

const Formulary = () => {
    const [ alert, setAlert ] = useState(null);
    const [ openName, setOpenName ] = useState( false );
    const [ openEmail, setOpenEmail ] = useState( false );
    const [ openText, setOpenText ] = useState( false );

    const handleOpenSnackBarName = () => {setOpenName( true );};
    const handleCloseSnackBarName = () => {setOpenName( false );};

    const handleOpenSnackBarEmail = () => {setOpenEmail( true );};
    const handleCloseSnackBarEmail = () => {setOpenEmail( false );};

    const handleOpenSnackBarText = () => {setOpenText( true );};
    const handleCloseSnackBarText = () => {setOpenText( false );};

    const t = useTranslations('Home.formulary')
    const { register,
        handleSubmit,
        formState: {errors}
    } = useForm()

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
                width: 1,
                height: {xs:'80svh', md:'40svh'},
                backgroundColor: (theme) => theme.palette.card.main,
                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
                p: { xs: 3, md: 10 },
                // mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap: 6,
                borderRadius: 4
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
                    fontFamily: (theme) => theme.typography.lexend,
                }}
            >
                {t('title')}
            </Typography>

            {alert && <Alert variant="outlined" severity="success"> Su correo ha sido enviado </Alert>}

            <Box
                component='form'
                onSubmit={handleSubmit(OnSubmit)}
                sx={{
                    height: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: {xs: 'end', md:'center'},
                    justifyContent: 'space-between',
                    gap: 4
                }}
            >
                {/*INPUT NAME*/}

                <Box
                    sx={{
                        width: {xs: 1 , md:.45},
                    }}
                >
                    <TextField
                        label={t('name')}
                        variant="filled"
                        sx={{
                            width: 1,
                            pb: '1rem'
                        }}
                        {...register('name', {
                            required: t('error.nameError')
                        })}
                    />
                    {errors.name && <Alert variant="filled" severity="error">{errors.name.message}</Alert>}
                </Box>

                {/*INPUT EMAIL*/}

                <Box
                    sx={{
                        width: {xs: 1 , md:.45},
                    }}
                >
                    <TextField
                        label={t('email')}
                        variant="filled"
                        sx={{
                            width:1,
                            pb: '1rem'
                        }}
                        {...register('email',{
                            required: t('error.emailError'),
                            pattern : {
                                value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
                                message: t('error.emailPattern')
                            }
                        })}
                    />
                    {errors.email && <Alert variant="filled" severity="error">{errors.email.message}</Alert>}
                </Box>

                {/*INPUT TEXT*/}
                
                <Box
                    sx={{
                        width: 1,
                    }}
                >
                    <TextField
                        label={t('text')}
                        variant="filled"
                        multiline={true}
                        minRows='4'
                        sx={{
                            width: 1,
                            pb: '1rem',
                        }}
                        {...register('text',{
                            required: t('error.textError'),
                            minLength : {
                                value : 50,
                                message : t('error.textLength')
                            }
                        })}
                    />

                    {errors.text && <Alert variant="filled" severity="error" sx={{ width: {xs: 1, md :'.5'}, fontWeight: 700 }} > {errors.text.message}</Alert>}


                </Box>

                


                <Button
                    variant="contained"
                    type="submit"
                    color="secondary"
                    fontWeight='700'
                >
                    {t('button')}
                </Button>
            </Box>

        </Box>
    )
}

export default Formulary
  