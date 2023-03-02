import { useEffect } from 'react'
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import style from "./LoadingScreen.module.scss"

function LoadingScreen(props: any) {
    // Prevent scrolling when loading screen is active
    useEffect(() => {
        // document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [])

    return (
        <div
            className={style.loadingscreen}
            style={{
                backgroundColor: props.backgroundColor ? props.backgroundColor : "",
            }}
        >
            <CustomSpinner />
        </div>
    )
}

export default LoadingScreen;