import Box from "@material-ui/core/Box"
import styled from "@emotion/styled"
import style from "./CustomBox.module.scss"
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";

const CBox = styled(Box)(() => ({
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    // paddingRight: '10px',
}));

export function CustomBox(props: any) {
    const theme = useTheme();
    return (
        <CBox
            className={style.Box}
            {...props}
            style={{
                ...props.style,
                backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
            }}
        >
            {props.children}
        </CBox>
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
