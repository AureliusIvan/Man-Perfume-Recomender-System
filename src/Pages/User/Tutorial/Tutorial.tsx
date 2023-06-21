import { Paragraf } from "../../../Component/StyledComponent/Typography/CustomTypography";
import { Grid } from "@mui/material";
import { styled } from "@material-ui/styles";
import { TutorialData } from "./TutorialData";

import style from "./Tutorial.module.scss";

import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { Flex } from "@/Component/StyledComponent/CustomBox/CustomBox";
import { useEffect, useState } from "react";
import { CustomButton } from "@/Component/StyledComponent/CustomButton/CustomButton";
import { Button } from "@material-ui/core";
import { max } from "lodash";

export default function Tutorial() {
    const { t } = useTranslation();
    const [clicked, setClicked] = useState(0);

    const handleClick = (id: any) => {
        setClicked(id);
    };

    const mobile = useMediaQuery<boolean>("(max-width:900px)");

    return (
        <>
            <Paragraf title={t("homeTitle2")}>
                <i>{t("homeDesc2")}</i>
            </Paragraf>
            <div className={style.container}>
                {!mobile ? (
                    <Description
                        title={t("step") + " " + TutorialData[clicked].id}
                        text={t(`stepDesc${TutorialData[clicked].id}`)}
                    />
                ) : null}
                <div className={style.content}>
                    <div className={style.bulletGrp}>
                        {TutorialData.map((id, i) => (
                            <Button
                                onClick={() => {
                                    handleClick(i);
                                }}
                                className={
                                    i === clicked
                                        ? `${style.active}`
                                        : `${style.btn}`
                                }
                            >
                                <div className={style.bullet}>{i + 1}</div>
                            </Button>
                        ))}
                    </div>
                    {mobile ? (
                        <Description
                            title={t("step") + " " + TutorialData[clicked].id}
                            text={t(`stepDesc${TutorialData[clicked].id}`)}
                        />
                    ) : null}
                    <Card
                        img={
                            mobile
                                ? TutorialData[clicked].imageM
                                : TutorialData[clicked].image
                        }
                    />
                </div>
            </div>
        </>
    );
}

function Card(props: any) {
    return (
        <div className={style.card}>
            <img className={style.img} src={props.img} />
        </div>
    );
}

function Description(props: any) {
    return (
        <div className={style.desc}>
            <h3 className={style.h3}>{props.title}</h3>
            <p className={style.p}>{props.text}</p>
        </div>
    );
}
