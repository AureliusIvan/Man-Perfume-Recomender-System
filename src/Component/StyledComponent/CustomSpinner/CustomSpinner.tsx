import React from "react";
import style from "./CustomSpinner.module.scss";

export default function CustomSpinner() {
  const i = 12;
  return (
      <div className={style.lds}
           style={{
             height: "80px",
             width: "80px",
           }}
      >
        {Array(i).fill(0).map((_, index) => {
          return (
              <div key={index}></div>
          )
        })}
      </div>
  )
}