import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
SwiperCore.use([Pagination, Navigation]);

import { Paragraf } from "../../../Component/StyledComponent/Typography/CustomTypography";
import { useEffect, useState } from "react";
import { getGuest } from "../../../Component/FunctionComponent/axiosClient/axiosClient";
import {
    ResultCard,
    ResultCard1,
} from "../../../Component/StyledComponent/CustomCard/CustomCard";
import { Box, Button, Grid as G } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import { useDispatch, useSelector } from "react-redux";
import { setDataEntry, selectDataEntry } from "@/Redux/feature/dataSlice";

import style from "./Recommendation.module.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useTranslation } from "react-i18next";
import { Flex } from "@/Component/StyledComponent/CustomBox/CustomBox";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider, TrackDetails } from "keen-slider/react";

const Grid = styled(G)(() => ({
    paddingTop: "20px",
}));

const GridItem = styled(G)(() => ({
    padding: "10px",
}));

export default function Recommendation() {
    const { t } = useTranslation();

    const [item, setItem] = useState<object[]>([]);
    const dispatch = useDispatch();
    const dataEntry = useSelector(selectDataEntry);
    useEffect(() => {
        if (dataEntry) {
            try {
                getGuest("v1/parfums/view?random=1&qty=5")
                    .then((res: any) => {
                        // console.log(res)
                        setItem(res.data.data);
                        dispatch(setDataEntry(res.data));
                    })
                    .catch((err: object) => {});
            } catch (err) {}
        } else {
            setItem(dataEntry);
        }
    }, []);

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
                "(min-width: 400px)": {
                    slides: { perView: 2, spacing: 5 },
                },
                "(min-width: 1000px)": {
                    slides: { perView: 3, spacing: 10 },
                },
            },
            detailsChanged(s) {
                setDetails(s.track.details);
            },
            initial: 2,
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
            <Center>
                <Paragraf
                    styledTitle={true}
                    title={t("homeTitle3")}
                    width={"300px"}
                >
                    <i>{t("homeDesc3")}</i>
                </Paragraf>
            </Center>

            {/* <div className={style.swiper}>
                {loaded && instanceRef.current && (
                    <div className={style.navigation}>
                        <button
                            onClick={(e: any) =>
                                e.stopPropagation() ||
                                instanceRef.current?.prev()
                            }
                        >
                            <ArrowBackIosIcon />
                        </button>
                    </div>
                )}
                <div ref={sliderRef} className="keen-slider zoom-out">
                    {item.map((item: any, index) => (
                        <div
                            key={index}
                            className="keen-slider__slide zoom-out__slide"
                        >
                            <div style={scaleStyle(index)}>
                                <ResultCard1
                                    title={item.brand + " - " + item.nama}
                                    image={item.foto}
                                    data={item}
                                    key={index}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {loaded && instanceRef.current && (
                    <div className={style.navigation}>
                        <button
                            onClick={(e: any) =>
                                e.stopPropagation() ||
                                instanceRef.current?.next()
                            }
                        >
                            <NavigateNextIcon />
                        </button>
                    </div>
                )}
            </div> */}

            {/* <div className={style.swiper}>
                <Swiper
                    effect="coverflow"
                    grabCursor
                    mousewheel
                    loop
                    centeredSlides
                    keyboard
                    slidesPerView={3}
                    spaceBetween={0}
                    speed={300}
                    autoplay={{
                        delay: 3000,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 3,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        600: {
                            //sm
                            centeredSlides: false,
                            slidesPerView: 2,
                        },
                        0: {
                            //base
                            slidesPerView: 1,
                        },
                    }}
                    // simulateTouch
                    // navigation
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {item.map((item: any, index) => (
                        <SwiperSlide key={index} className={style.swiperItem}>
                            <ResultCard1
                                title={item.brand + " - " + item.nama}
                                image={item.foto}
                                data={item}
                                key={index}
                            />
                        </SwiperSlide>
                    ))}
                    <button className="slider-prev">
                        <ArrowBackIosIcon />
                    </button>
                    <button className="slider-next">
                        <NavigateNextIcon />
                    </button>
                </Swiper>
            </div> */}

            <Grid container>
                {item.map((item: any, index) => {
                    return (
                        <GridItem item xs={12} key={index}>
                            <ResultCard
                                title={item.nama}
                                image={item.foto}
                                data={item}
                                key={index}
                            />
                        </GridItem>
                    );
                })}
            </Grid>
        </>
    );
}

// recommendation reference : https://codepen.io/JavaScriptJunkie/pen/ZMMRRQ
// tak terwujud :)
