import {Box, Modal, Typography} from "@mui/material";
import Formulary from "@/app/[locate]/Formulary";

const ModalForm = ({ open, handleClose }) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: (theme) => theme.palette.background.default,
                    p: 10,
                    m: 10,
                    // border: '1px solid black',
                    borderRadius: 4
                }}
            >
                <Formulary/>
            </Box>

        </Modal>
    )
}

export default ModalForm;