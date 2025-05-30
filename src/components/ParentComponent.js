import React, { useState } from 'react';
import ModalForm from './ModalForm'; // tu componente actual sin Snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useTranslations} from "next-intl";
import {Button} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const ParentComponent = () => {
    const t = useTranslations('Home');

    const [modalOpen, setModalOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarOpen(false);
    };

    const handleSuccess = () => {
        console.log("🎯 handleSuccess llamado desde Formulary");
        setSnackbarOpen(true);
        setModalOpen(false);
    };

    return (
        <>
            <Button
                variant='contained'
                size='large'
                color='primary'
                endIcon={<ArrowCircleRightIcon size={'large'} />}
                onClick={handleOpenModal} // botón controla la apertura del modal
                sx={{
                    width: { xs: 1, md: '0.2' },
                }}
            >
                {t('CTA.cta')}
            </Button>

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


// const ParentComponent = ({ children }) => {
//     const t = useTranslations('Home.formulary');
//
//     const [modalOpen, setModalOpen] = useState(false);
//     const [snackbarOpen, setSnackbarOpen] = useState(false);
//
//     const handleOpenModal = () => setModalOpen(true);
//     const handleCloseModal = () => setModalOpen(false);
//
//     const handleShowSnackbar = () => {
//         setSnackbarOpen(true);
//     };
//
//     const handleCloseSnackbar = (event, reason) => {
//         if (reason === 'clickaway') return; // para evitar que se cierre con click fuera
//         setSnackbarOpen(false);
//     };
//
//     const handleSuccess = () => {
//         console.log("🎯 handleSuccess llamado desde Formulary");
//         setSnackbarOpen(true);     // muestra el snackbar
//         setModalOpen(false);       // cierra el modal
//     };
//
//     return (
//         <>
//
//             { children }
//             <ModalForm
//                 open={modalOpen}
//                 handleClose={handleCloseModal}
//                 onSuccess={handleSuccess}  // le paso el callback
//             />
//             <Snackbar
//                 open={snackbarOpen}
//                 autoHideDuration={4000}
//                 onClose={handleCloseSnackbar}
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//             >
//                 <MuiAlert
//                     elevation={6}
//                     variant="filled"
//                     onClose={handleCloseSnackbar}
//                     severity="success"
//                     sx={{ width: '100%' }}
//                 >
//                     {t('success')}
//                 </MuiAlert>
//             </Snackbar>
//         </>
//     );
// };
