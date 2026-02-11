import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {usePathname, useRouter} from '@/i18n/routing';
import {useParams} from "next/navigation";

const ButtonChange = () => {
    const params = useParams();
    const [select, setSelect] = useState(params.locate)
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setSelect(params.locate)
    }, [select]);

    const onSelectChange = (e) => {
        const nextLocale = e.target.textContent;
        console.log(nextLocale)
        setSelect(params.locate);

        router.replace(
            pathname,
            {locale: nextLocale}
        )
    }

    return (
        <Box
            sx={{
                width: {xs: '40px', md: '100px'},
                height: {xs: '40px', md: '70px'},
                backgroundColor: (theme) => theme.palette.secondary.main,
                border: '1px solid #fefefe',
                position: 'fixed',
                zIndex: '3000',
                top: {xs: 180, md: 250},
                right: 0,
                borderTopLeftRadius: {xs: 10, md: 20},
                borderBottomLeftRadius: {xs: 10, md: 20},
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Button
                onClick={onSelectChange}
                size="large"
            >
                {select == "es" ? `en` : `es`}
            </Button>
        </Box>
    );
};

export default ButtonChange;