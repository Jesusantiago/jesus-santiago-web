import React, { useState } from 'react';
import ModalForm from './ModalForm';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useTranslations} from "next-intl";


const ParentComponent = ({ children }) => {
    const t = useTranslations('Home');

    const [modalOpen, setModalOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleCloseSnackbar = (event, reason) => {
        setSnackbarOpen(false);
    };

    const handleSuccess = () => {
        console.log("🎯 handleSuccess llamado desde Formulary");
        setSnackbarOpen(true);
        setModalOpen(false);
    };

    const childWithProps = React.isValidElement(children)
        ? React.cloneElement(children, { onClick: handleOpenModal })
        : null;


    return (
        <>
            {childWithProps}
            <ModalForm
                open={modalOpen}
                handleClose={handleCloseModal}
                onSuccess={handleSuccess}
            />
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                    zIndex: 9000000000, // ya es 1400 por defecto
                    position: 'fixed',
                    bottom: { xs: 20, sm: 40 },
                    width: 'auto',
                }}

            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleCloseSnackbar}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    {t('formulary.success')}
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default ParentComponent;