import CustomProgress from "../CustomProgress/CustomProgress";
import style from "./Footer.module.scss";
import Center from "../CustomCenter/Center";

export default function Footer(props: any) {
    return (
        <div className={style.footer}>
            {props.children}
        </div>
    )
}


export function UserFooter(props: any) {
    return (
        <Footer>
            <Center margin="20px">
                <CustomProgress />
            </Center>
        </Footer>
    )
}