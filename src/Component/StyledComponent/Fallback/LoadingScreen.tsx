import React, {useEffect} from 'react'
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import style from "./LoadingScreen.module.scss"


interface LoadingScreenProps {
  style?: React.CSSProperties,
  backgroundColor?: string,
}

function LoadingScreen(props: LoadingScreenProps) {
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [])

  return (
      <div
          className={style.loadingscreen}
          style={{
            ...props.style,
            backgroundColor: props.backgroundColor ? props.backgroundColor : "",
          }}
      >
        <CustomSpinner/>
      </div>
  )
}

export default LoadingScreen;