import style from "./CustomTypography.module.scss"
import { useTheme } from "@mui/material/styles";



export function Text(props: any) {
    return (
        <div
            className={style.Text}
            {...props}
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
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                fontSize: props.fontSize ? props.fontSize : "1.5rem",
                fontWeight: props.fontWeight ? props.fontWeight : "bold",
            }}
        >
            {props.children ? props.children : "Aroma lebih penting dari harga."}
        </div>
    );
}