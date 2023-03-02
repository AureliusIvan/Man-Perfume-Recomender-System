import style from "./Center.module.scss";

// Center Child Component
export default function Center(props: any) {
    return (
        <div
            className={style.center}
            {...props}
            style={{
                ...props.style,
                width: props.width ? props.width : "100%",
                height: props.height ? props.height : "100%",
                margin: props.margin ? props.margin : "0px",
                alignItems: props.y ? "center" : "",
                // border: '1px solid black'
            }}
        >
            {props.children}
        </div>
    )
}
