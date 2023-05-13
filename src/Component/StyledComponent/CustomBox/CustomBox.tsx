// Custom box is a component that allows you to create a box with custom style.
import Box from "@material-ui/core/Box"
import styled from "@emotion/styled"
import style from "./CustomBox.module.scss"
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";

// our custom box style
const CBox = styled(Box)(() => ({
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
}));

export function CustomBox(props: any) {
    const theme = useTheme();
    return (
        <CBox
            className={style.Box}
            {...props}
            style={{
                ...props.style,
                backgroundColor: theme.palette.mode === (props.reverse ? 'light' : 'dark') ? "#1e1e1e" : '#f5f5f5',
                width: props.width ? props.width : "90%",
                padding: props.padding ? props.padding : "",
                margin: props.margin ? props.margin : "",
                borderRadius: props.borderRadius ? props.borderRadius : "20px",
                maxWidth: props.maxWidth ? props.maxWidth : "100%",
                maxHeight: props.maxHeight ? props.maxHeight : "100%",
            }}
        >
            {props.children}
        </CBox>
    )
}


export function Flex(props: any) {
    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: props.direction ? props.direction : 'row',
            alignItems: props.align ? props.align : 'center',
            justifyContent: props.justify ? props.justify : 'center',
            gap: props.gap ? props.gap : '10px',

        }}
            {...props}
        >
            {props.children}
        </div >
    )
}


export function BoxSection(props: any) {
    return (
        <div
            className={style.BoxSection}
            {...props}
        >
            {props.children}
            <Divider variant="middle" />
        </div>
    )
}
