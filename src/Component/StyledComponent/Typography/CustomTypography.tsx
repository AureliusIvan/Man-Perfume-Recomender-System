import style from "./CustomTypography.module.scss"
import { useTheme } from "@mui/material/styles";



export function Text(props: any) {
    const theme = useTheme();
    return (
        <div
            className={style.Text}
            {...props}
            style={{
                ...props.style,
                textAlign: props.textAlign ? props.textAlign : "center",
                fontSize: props.fontSize ? props.fontSize : "1rem",
                fontWeight: props.fontWeight ? props.fontWeight : "normal",
                color: theme.palette.mode === (props.reverse ? "light" : "dark") ? '#fff' : '#000',
            }}

        >
            {props.children ? props.children : "Aroma lebih penting dari harga."}
        </div>
    );
}

export function Title(props: any) {
    const theme = useTheme();
    return (
        <div
            className={style.Title}
            {...props}
            style={{
                ...props.style,
                textAlign: props.textAlign ? props.textAlign : "left",
                // textAlign: 'left',
                color: theme.palette.mode === (props.reverse ? "light" : "dark") ? '#fff' : '#000',
                fontSize: props.fontSize ? props.fontSize : "1.5rem",
                fontWeight: props.fontWeight ? props.fontWeight : "bold",
            }}
        >
            {props.children ? props.children : "Aroma lebih penting dari harga."}
        </div>
    );
}

export function Paragraf(props: any) {
    return (<>
        <Title
            textAlign={props.textAlign ? props.textAlign : "left"}>
            {props.title}
        </Title>
        <Text style={{ textAlign: props.textAlign ? props.textAlign : "center", }}>
            {props.children ? props.children : "Aroma lebih penting dari harga. Ini adalah Paragraf"}
        </Text>
    </>
    );
}