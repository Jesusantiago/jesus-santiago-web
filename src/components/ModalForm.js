import {Box, Modal, Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Formulary from "@/app/[locate]/Formulary";
import {useState} from "react";
import {useTranslations} from "next-intl";

const ModalForm = ({open, handleClose, onSuccess}) => {
    const t = useTranslations('Home.formulary');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                width: '1',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 600,
                    maxHeight: '90vh',
                    bgcolor: 'background.default',
                    p: {xs: 3, md: 5},
                    borderRadius: 4,
                    boxShadow: 24,
                    overflowY: 'auto',
                }}

            >
                <Formulary onSuccess={onSuccess}/>
            </Box>

        </Modal>
    )
}

export default ModalForm;