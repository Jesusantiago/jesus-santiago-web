import {Box, Button, Typography} from "@mui/material";
import { useTranslations } from "next-intl";
import {ArrowRight} from "@mui/icons-material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, {useState} from "react";
import ModalForm from "@/components/ModalForm";
import ParentComponent from "@/components/ParentComponent";

const SectionForm  = ( ) => {
    const [ open, setOpen ] = useState( false );
    const t = useTranslations('Home.CTA')

    return(
        <Box
            component='section'
            sx={{
                height: '100px',
                width: 1,
                mt: {xs: '250px', md: '150px'},
                backgroundColor: (theme) => theme.palette.card.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >

            <Box
                component='article'
                sx={{
                    width: '.9',
                    maxWidth: '1620px',
                    height: 'auto',
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    position: 'relative',
                    top: {xs:'-100px', md: '-50px'},
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: {xs: 5},
                    px: {xs: 5, lg: 10},
                    py: {xs: 5, md: 5}
                }}
            >

                <Typography
                    variant='h5'
                    fontWeight='700'
                    color='#292929'
                    sx={{
                        fontFamily: (theme) => theme.typography.lexend,
                        textAlign: {xs: 'center', md: 'start'},
                        width: {xs: 1, md: '0.2'}
                    }}
                >
                    {t('title')}
                </Typography>

                <Typography
                    variant='h5'
                    fontWeight='700'
                    color='#292929'
                    sx={{
                        fontFamily: (theme) => theme.typography.lexend,
                        textWrap: 'balance',
                        textAlign: 'center',
                        flexGrow: 4,
                        width: {xs: 1, md: '0.6'}
                    }}
                >
                    {t('description')}
                </Typography>

                <ParentComponent>
                    <Button
                        variant='contained'
                        size='large'
                        color= 'primary'
                        endIcon={<ArrowCircleRightIcon size={'large'}/>}
                        sx={{
                            width: { xs: 1, md: '0.2' },
                        }}
                    >
                        {t('cta')}
                    </Button>
                </ParentComponent>
            </Box>

        </Box>

    )
}

export default SectionForm;