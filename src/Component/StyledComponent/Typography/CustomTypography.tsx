import style from "./CustomTypography.module.scss"
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Spacer from "@/Pages/User/Spacer/spacer";


export function Text(props: any) {
    const theme = useTheme();
    return (
        <div
            className={style.Text}
            {...props}
            style={{
                ...props.style,
                width: props.width ? props.width : "100%",
                height: props.height ? props.height : "100%",
                textAlign: props.textalign ? props.textalign : "center",
                fontSize: props.fontSize ? props.fontSize : "15px",
                fontWeight: props.fontWeight ? props.fontWeight : "normal",
                color: theme.palette.mode === (props.reverse ? "light" : "dark") ? '#fff' : '#000',
                // margin
                // margin: props.margin ? props.margin : "0px",
                marginTop: props.margintop ? props.margintop : "0px",
                marginBottom: props.marginbottom ? props.marginbottom : "0px",
                marginLeft: props.marginleft ? props.marginleft : "0px",
                marginRight: props.marginright ? props.marginright : "0px",
                // padding
                padding: props.padding ? props.padding : "0px",
                paddingTop: props.paddingtop ? props.paddingtop : "0px",
                paddingBottom: props.paddingbottom ? props.paddingbottom : "0px",
                paddingLeft: props.paddingleft ? props.paddingleft : "0px",
                paddingRight: props.paddingright ? props.paddingright : "0px",
            }}>
            {props.children ? props.children : "Aroma lebih penting dari harga."}
        </div>
    );
}

export function Title(props: any) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.values.sm.toString());
    return (
        <div
            className={style.Title}
            {...props}
            style={{
                ...props.style,
                textAlign: props.textalign ? props.textalign : "left",
                color: theme.palette.mode === (props.reverse ? "light" : "dark") ? '#fff' : '#000',
                fontSize: props.fontSize ? props.fontSize : "",
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
            textalign={props.textalign ? props.textalign : "left"}>
            {props.title}
        </Title>
        <Spacer y={props.spacer ? props.spacer : "20px"} />
        <Text style={{
            textAlign: props.textAlign ? props.textAlign : "center",
        }}
            width={props.width ? props.width : "100%"}
        >
            {props.children ? props.children : "Aroma lebih penting dari harga. Ini adalah Paragraf"}
        </Text>
    </>
    );
}