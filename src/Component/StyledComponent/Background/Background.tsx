import React from 'react'
import style from './Background.module.scss'

function Background() {
  return (
      <div className={style.Background}>
        <div className={style.area}>
          <ul className={style.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
  )
}

export default Background