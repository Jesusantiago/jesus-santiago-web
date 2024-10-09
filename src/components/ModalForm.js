import {Box, Modal, Typography} from "@mui/material";
import Formulary from "@/app/[locate]/Formulary";

const ModalForm = ({ open, handleClose }) => {

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
                    width: {xs:.9, md: .8},
                    maxWidth: '1620px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: (theme) => theme.palette.background.default,
                    p: {xs:2, sm:10},
                    // border: '1px solid black',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Formulary/>
            </Box>

        </Modal>
    )
}

export default ModalForm;