import React from "react";
import style from "./Footer.module.scss";

interface FooterProps {
  children?: React.ReactNode,
}

export default function Footer(props: FooterProps) {
  return (
      <div className={style.footer}>
        {props.children}
        &copy; Copyright 2023 by Universitas Multimedia Nusantara
      </div>
  )
}   