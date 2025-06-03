
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useTranslations } from 'next-intl'
import { useState } from "react"
import { useForm } from 'react-hook-form'

const Formulary = ({ onSuccess }) => {
    const t = useTranslations('Home.formulary');
    const [submitError, setSubmitError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setSubmitError('');
        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                onSuccess();
            } else {
                setSubmitError(t('error.else'));
            }
        } catch (err) {
            setSubmitError(t('error.server'));
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3
            }}
        >
            <TextField
                label={t('name')}
                variant="filled"
                {...register('name', { required: t('error.nameError') })}
            />
            {errors.name && (
                <Alert severity="error" variant="filled">{errors.name.message}</Alert>
            )}

            <TextField
                label={t('email')}
                variant="filled"
                {...register('email', {
                    required: t('error.emailError'),
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: t('error.emailPattern')
                    }
                })}
            />
            {errors.email && (
                <Alert severity="error" variant="filled">{errors.email.message}</Alert>
            )}

            <TextField
                label={t('text')}
                variant="filled"
                multiline
                minRows={4}
                {...register('text', {
                    required: t('error.textError'),
                    minLength: {
                        value: 50,
                        message: t('error.textLength')
                    }
                })}
            />
            {errors.text && (
                <Alert severity="error" variant="filled">{errors.text.message}</Alert>
            )}

            {submitError && (
                <Alert severity="error" variant="filled">
                    {submitError}
                    <Button
                        variant='text'
                        component='a'
                        href='mailto:jesuscsantiago27@gmail.com'
                    >
                        <b>{t('error.email')}</b>
                    </Button>
                </Alert>
            )}

            <Button type="submit" variant="contained" color="secondary">
                {t('button')}
            </Button>
        </Box>
    );
};

export default Formulary
  