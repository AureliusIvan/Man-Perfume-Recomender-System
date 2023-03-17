import * as React from 'react';
import { CustomBox as Box, Flex } from '../CustomBox/CustomBox';
import { CustomButton as Button } from '../CustomButton/CustomButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from "./CustomModal.module.scss";
import { useTheme } from '@mui/material/styles';

export function CustomModal(props: any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    return (
        <div>
            <Button onClick={handleOpen}>{
                props.title
            }</Button>
            <Modal
                open={open}
                onClose={props.onClose ? props.onClose : handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Box
                        maxWidth="440px"
                        className={style.modal}
                    >
                        <button
                            className={style.closebtn}
                            onClick={props.onClose ? props.onClose : handleClose}
                            style={{
                                color: theme.palette.mode === 'dark' ? "black" : "white",
                                backgroundColor: theme.palette.mode === 'dark' ? "white" : "black",
                                
                            }}
                        >X</button>
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
                </>
            </Modal>
        </div>
    );
}



// Modal Confirmation page
export function Confirmations(props: any) {
    return (
        <CustomModal
            title={props.title}
        >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.title ? props.title : "Title"}?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.desc ? props.desc : "Are you sure to " + props.title + "?"}
            </Typography>
            <Flex>
                <Button
                    onClick={
                        props.onConfirm
                    }
                >
                    Yes
                </Button>
                <Button
                    onClick={props.onCancel}
                >
                    No
                </Button>
            </Flex>
        </CustomModal >
    )
}