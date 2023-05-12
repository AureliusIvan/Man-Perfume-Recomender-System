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
            {props.button ? props.button :
                <Button onClick={handleOpen}>{
                    props.title
                }</Button>
            }
            <Modal
                open={open}
                onClose={props.onClose ? props.onClose : handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Box
                        maxWidth="440px"
                        maxHeight="80vh"
                        className={style.modal}
                    >
                        {props.xbutton ? <button
                            className={style.closebtn}
                            onClick={props.onClose ? props.onClose : handleClose}
                            style={{
                                color: theme.palette.mode === 'dark' ? "black" : "white",
                                backgroundColor: theme.palette.mode === 'dark' ? "white" : "black",

                            }}
                        >X</button> : null}
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
                        <Flex>
                            {props.confirmbutton ?
                                <><Button
                                    onClick={
                                        props.onConfirm ? props.onConfirm : handleClose
                                    }
                                >
                                    Yes
                                </Button>
                                    <Button
                                        bgColor={props.bgColor ? props.bgColor : "rgb(255, 255, 255, 0)"}
                                        onClick={props.onCancel ? props.onCancel : handleClose}
                                    >
                                        No
                                    </Button></> : null}
                        </Flex>
                    </Box>
                </>
            </Modal>
        </div>
    );
}

// Modal Confirmation page
export function Confirmations(props: any) {
    // const [ onClose, setOnClose ] = React.useState(false)
    return (
        <CustomModal
            title={props.title ? props.title : "Submit"}
            onConfirm={props.onConfirm}
            confirmbutton={true}
        >
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.title ? props.title : "Submit"}?
            </Typography> */}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.desc ? props.desc : "Are you sure to " + (props.title ? props.title : "want to submit") + "?"}
            </Typography>
            {props.children}
        </CustomModal >
    )
}