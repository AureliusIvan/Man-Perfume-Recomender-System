import React from 'react'
// import { CustomModal as Modal } from '../CustomModal/CustomModal'
import style from "./HelpComponent.module.scss";
// import { Modal } from '@mui/material';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomBox as Box } from '../CustomBox/CustomBox';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Flex } from '../CustomBox/CustomBox';
import { CustomButton as Button } from '../CustomButton/CustomButton';

interface HelpComponentProps {
    children?: React.ReactNode;
    title?: string;
    desc?: string;
    confirmbutton?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    bgColor?: string;
}


function HelpComponent(props: HelpComponentProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    return (
        <>
            <button
                className={style.helpbtn}
                type='button'
                onClick={handleOpen}
            >?</button>
            <Modal
                open={open}
                onClose={props.onClose ? props.onClose : handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Box
                        maxWidth="80vw"
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
                                        {/* {props.title ? props.title : "Title"} */}
                                        Bantuan
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{
                                        mt: 2,
                                        wordWrap: "break-word",
                                        overflow: "hidden",
                                        wordBreak: "break-all",
                                    }}>
                                        {/* {props.desc ? props.desc : "Description"} */}
                                        gagagkagkagkakakagka
                                        gagagkagkagkakakagkagakgakgka
                                        gagagkagkagkakakagkagakgakgkagkaga
                                        gakgakgakakgak
                                    </Typography>
                                </>
                        }
                        <Flex>
                            {props.confirmbutton ?
                                <><Button
                                    onclick={
                                        props.onConfirm ? props.onConfirm : handleClose
                                    }
                                >
                                    Yes
                                </Button>
                                    <Button
                                        bgcolor={props.bgColor ? props.bgColor : "rgb(255, 255, 255, 0)"}
                                        onclick={props.onCancel ? props.onCancel : handleClose}
                                    >
                                        No
                                    </Button></> : null}
                        </Flex>
                    </Box>
                </>
            </Modal>
        </>

    )
}

export default HelpComponent