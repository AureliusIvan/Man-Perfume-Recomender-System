import * as React from 'react'
import { useTheme } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { CustomBox as Box, Flex } from '../CustomBox/CustomBox';
import { CustomButton as Button } from '../CustomButton/CustomButton';
import CustomFormik from '../CustomFormik/CustomFormik';

import style from "./CustomModal.module.scss";

import { add, update, delData, appendData } from '../DataFunction/DataFunction';
import CustomInputImage from '@/Component/CustomInputImage/CustomInputImage';


type CustomModalProps = {
    children?: React.ReactNode;
    title?: string;
    desc?: string;
    confirmbutton?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    bgcolor?: string;
    open?: boolean;
    xbutton?: boolean;
    toDelete?: boolean;
    rowID?: string;
    button?: React.ReactNode;
    hideButton?: boolean;
    buttonHeight?: string;
    buttonWidth?: string;
    buttonMargin?: string;
    buttonMarginBottom?: string;
    buttonPadding?: string;
    disabled?: boolean;
    useFormik?: boolean;
    formName?: string | any;
    editornew?: string;
    fId?: string;
    fName?: string;
    fMerk?: string;
    fScent?: string;
    fSize?: string | any;
    fPrice?: string | any;
    fImage?: string | any;
    fLink?: string | any;
    fDesc?: string | any;
    fscentIdx?: number | any;
    fdurIdx?: number | any;
    fpriceIdx?: number | any;
    fqualityIdx?: number | any;
    portrait?: boolean | any;
    overflowY?: string | any;
    outline?: string | any;
    deletable?: boolean | any;
};

export function CustomModal(props: CustomModalProps) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    return (
        <div>
            {props.hideButton ? "" :
                props.button ? props.button :
                    <Button
                        outline={props.outline}
                        height={props.buttonHeight}
                        width={props.buttonWidth}
                        margin={props.buttonMargin}
                        marginBottom={props.buttonMarginBottom}
                        padding={props.buttonPadding}
                        bgcolor={props.bgcolor}
                        disabled={props.disabled}
                        onclick={handleOpen}>{
                            props.title
                        }</Button>

            }
            <Modal
                open={props.open ? props.open : open}
                onClose={props.onClose ? props.onClose : handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <div
                        className={style.modal}
                    >
                        {props.xbutton ?
                            <button
                                className={style.closebtn}
                                onClick={props.onClose ? props.onClose : handleClose}
                                style={{
                                    color: theme.palette.mode === 'dark' ? "black" : "white",
                                    backgroundColor: theme.palette.mode === 'dark' ? "white" : "black",

                                }}
                            >
                                <span className={style.closebtnspan}>
                                    X
                                </span>
                            </button> :
                            null}
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
                                onSubmit={(values: any) => {
                                    {
                                        props.editornew === "new"
                                            ? add(appendData(values), values.foto)
                                            : update(appendData(values), props.fId)
                                    }
                                    // console.log(formdata);
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

                                fscentIdx={props.fscentIdx ? props.fscentIdx : ""}
                                fdurIdx={props.fdurIdx ? props.fdurIdx : ""}
                                fpriceIdx={props.fpriceIdx ? props.fpriceIdx : ""}
                                fqualityIdx={props.fqualityIdx ? props.fqualityIdx : ""}
                            />) : null}
                        <Flex>
                            {props.confirmbutton ?
                                <><Button
                                    onclick={props.onConfirm
                                        ? props.onConfirm
                                        : () => {
                                            {
                                                props.toDelete
                                                    ? delData(props.rowID)
                                                    // ? console.log("delete me")
                                                    : null
                                            }
                                            handleClose();
                                        }
                                    }

                                >
                                    Yes
                                </Button>
                                    <Button
                                        variant='outlined'
                                        // bgcolor={props.bgcolor ? props.bgcolor : "rgb(255, 255, 255, 0)"}
                                        onclick={props.onCancel ? props.onCancel : handleClose}
                                    >
                                        No
                                    </Button></> : null}
                        </Flex>
                    </div>
                </>
            </Modal>
        </div>
    );
}

// Modal Confirmation page
export function Confirmations(props: any) {
    return (
        <CustomModal
            outline={props.outline}
            bgcolor={props.bgcolor}
            onClose={props.onClose && props.onClose}
            disabled={props.disabled}
            title={props.title ? props.title : "Submit"}
            onConfirm={props.onConfirm}
            open={props.open && props.open}
            confirmbutton={true}
            xbutton={props.xbutton ? props.xbutton : false}
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