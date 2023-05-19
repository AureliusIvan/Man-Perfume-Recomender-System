import * as React from 'react'
import { useTheme } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { CustomBox as Box, Flex } from '../CustomBox/CustomBox';
import { CustomButton as Button } from '../CustomButton/CustomButton';
import CustomFormik from '../CustomFormik/CustomFormik';

import style from "./CustomModal.module.scss";

import { add, update, delData } from '../DataFunction/DataFunction';

export function CustomModal(props: any) {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    return (
        <div>
            {props.hideButton ? "" :
                props.button ? props.button :
                    <Button
                        disabled={props.disabled}
                        onclick={handleOpen}>{
                            props.title
                        }</Button>

            }
            <Modal
                open={props.open ? props.open : open}
                onClose={props.onClose ? props.onClose : handleClose}
                // onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Box
                        maxWidth="440px"
                        maxHeight="80vh"
                        overflowY={props.overflowY ? props.overflowY : "auto"}
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
                        {props.useFormik ? (
                            <CustomFormik
                                formName={props.formName}
                                title={props.title ? props.title : "Title"}
                                deletable={props.deletable}
                                onSubmit={(value: any) => {
                                    handleClose();
                                    setTheValue(value);
                                    {
                                        props.editornew === "new"
                                            ? add(theValue)
                                            : update(theValue)
                                onSubmit={(value : any) => {
                                    const formdata = new FormData();
                                    formdata.append("nama", value.name);
                                    formdata.append("nama", value.name);
                                    {props.editornew === "new" 
                                        ? add(value)
                                        : update(value)
                                    }
                                    // console.log(value);
                                    handleClose();
                                }}
                                fName={props.fName ? props.fName : ""}
                                fMerk={props.fMerk ? props.fMerk : ""}
                                fScent={props.fScent ? props.fScent : ""}
                                fSize={props.fSize ? props.fSize : ""}
                                fPrice={props.fPrice ? props.fPrice : ""}
                                fImage={props.fImage ? props.fImage : ""}
                                fLink={props.fLink ? props.fLink : ""}
                                fDesc={props.fDesc ? props.fDesc : ""}
                            /> ) : null}
                        <Flex>
                            {props.confirmbutton ?
                                <><Button
                                    onclick={props.onConfirm
                                        ? props.onConfirm
                                        : () => {
                                            {props.toDelete 
                                                ? delData(props.rowID)
                                                // ? console.log("delete me")
                                                : null}
                                            handleClose();
                                        }
                                    }

                                >
                                    Yes
                                </Button>
                                    <Button
                                        bgcolor={props.bgcolor ? props.bgcolor : "rgb(255, 255, 255, 0)"}
                                        onclick={props.onCancel ? props.onCancel : handleClose}
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
    return (
        <CustomModal
            onClose={props.onClose && props.onClose}
            disabled={props.disabled}
            title={props.title ? props.title : "Submit"}
            onConfirm={props.onConfirm}
            open={props.open && props.open}
            confirmbutton={true}
            toDelete={props.toDelete}
            rowID={props.rowID}
        >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.desc ? props.desc : "Are you sure to " + (props.title ? props.title : "want to submit") + "?"}
            </Typography>
            {props.children}
        </CustomModal >
    )
}