import React, { useEffect, useState } from "react";
// import { BoxSection } from "../../../Component/StyledComponent/CustomBox/CustomBox";
import { Title } from "../../../Component/StyledComponent/Typography/CustomTypography";
// import CustomSlider from "../../../Component/StyledComponent/CustomSlider/CustomSlider";
// import { get } from "../../../Component/FunctionComponent/axiosClient/axiosClient";
import {
    ResultCard
} from "../../../Component/StyledComponent/CustomCard/CustomCard";
import { Grid as G } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import { useSelector } from "react-redux";
import { selectDataEntry } from "@/Redux/feature/dataSlice";
import Spacer from "../Spacer/spacer";
import { CustomButton } from "@/Component/StyledComponent/CustomButton/CustomButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useNavigate } from "react-router";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider, TrackDetails } from "keen-slider/react";
import { IconButton } from "@mui/material";

import { useTranslation } from "react-i18next";

import style from "@/Pages/User/Recommendation/Recommendation.module.scss";
import Left from "@mui/icons-material/ArrowCircleLeftRounded";
import Right from "@mui/icons-material/ArrowCircleRightRounded";

const Grid = styled(G)(() => ({
    // padding: '100px',
    paddingTop: "20px",
}));

const GridItem = styled(G)(() => ({
    padding: "10px",
    // width: '90%',
}));

// interface itemType {
//     nama: string,
//     foto: string,
//     preference_value: number,
//     id: number
// }

export default function Result() {
    const { t } = useTranslation();

    // const [length, setLenght] = useState<number>(0);
    const dataEntry: object[] = useSelector(selectDataEntry);
    useEffect(() => {
        // console.log(dataEntry);
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    const [details, setDetails] = React.useState<TrackDetails | null>(null);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: "free-snap",
            slides: {
                perView: 1,
                spacing: 15,
            },
            breakpoints: {
                "(min-width: 600px)": {
                    slides: { perView: 2, spacing: 5 },
                },
                "(min-width: 900px)": {
                    slides: { perView: 3, spacing: 10 },
                },
            },
            detailsChanged(s) {
                setDetails(s.track.details);
            },
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 4000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    function scaleStyle(idx: number) {
        if (!details) return {};
        const slide = details.slides[idx];
        const scale_size = 0.7;
        const scale = 1 - (scale_size - scale_size * slide.portion);
        return {
            transform: `scale(${scale})`,
            WebkitTransform: `scale(${scale})`,
        };
    }

    return (
        <>
            <Spacer y={"40px"} />
            <Center>
                <Title>{t("result")}</Title>
                <br />
                <CustomButton
                    bgcolor={"rgb(0,0,0,0)"}
                    onclick={() => {
                        navigate("/start");
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {t("restartTest")} <RestartAltIcon />
                    </span>
                </CustomButton>
            </Center>
            <div className={style.swiper}>
                {loaded && instanceRef.current && (
                    <IconButton
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                    >
                        <Left fontSize="large" />
                    </IconButton>
                )}
                <div ref={sliderRef} className="keen-slider zoom-out">
                    {Array.isArray(dataEntry) ? (
                        dataEntry.map((item: any, index: number) => {
                            if (index >= 10) return;
                            return (
                                <div
                                    key={index}
                                    className="keen-slider__slide zoom-out__slide"
                                >
                                    <div
                                        style={scaleStyle(index)}
                                        className={style.swiperItem}
                                    >
                                        <ResultCard
                                            title={
                                                item.brand + " - " + item.nama
                                            }
                                            image={item.foto}
                                            data={item}
                                            key={index}
                                            accuracy={item.preference_value}
                                            rank={index+1}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%",
                                minHeight: "50vh",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "rgb(255, 255, 255, 0.5)",
                            }}
                        >
                            Hasil tidak konsisten, coba lagi!
                        </div>
                    )}
                </div>

                {loaded && instanceRef.current && (
                    <IconButton
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                    >
                        <Right fontSize="large" />
                    </IconButton>
                )}
            </div>
        </>
    );
}
