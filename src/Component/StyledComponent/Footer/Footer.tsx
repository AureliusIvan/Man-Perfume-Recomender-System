// import CustomProgress from "../CustomProgress/CustomProgress";
import style from "./Footer.module.scss";
// import Center from "../CustomCenter/Center";

export default function Footer(props: any) {
    return (
        <div className={style.footer}>
            {props.children}
            @Copyright 2023 by Universitas Multimedia Nusantara
        </div>
    )
}   