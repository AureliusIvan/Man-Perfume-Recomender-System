import * as React from 'react';
// import Box from '@mui/material/Box';
import { CustomBox as Box } from '../CustomBox/CustomBox';
// import Button from '@mui/material/Button';
import { CustomButton as Button } from '../CustomButton/CustomButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from "./CustomModal.module.scss";

// const style = {
//     position: 'absolute' as 'absolute',
//     top: '0',
//     bottom: '0',
//     left: '0',
//     right: '0',
//     margin: 'auto',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     borderRadius: '10px',
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
// };

export function CustomModal(props: any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <React.Fragment>
                    <Box
                        // sx={style}
                        className={style.modal}
                    >
                        {
                            props.children ? props.children :
                                <>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {props.title ? props.title : "Title"}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {props.desc ? props.desc : "Description"}
                                    </Typography>
                                </>
                        }

                    </Box>
                </React.Fragment>
            </Modal>
        </div>
    );
}



// Modal Confirmation page
export function Confirmations(props: any) {
    return (
        <CustomModal>
            {/* <Button>Yes</Button> */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.title ? props.title : "Title"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.desc ? props.desc : "Description"}
            </Typography>
            <Button
                onClick={props.onConfirm}
            >Yes</Button>
            <Button
                onClick={props.onCancel}
            >No</Button>
        </CustomModal>
    )
}