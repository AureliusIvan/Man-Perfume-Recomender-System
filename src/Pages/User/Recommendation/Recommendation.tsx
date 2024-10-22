import "keen-slider/keen-slider.min.css";

import React, {useEffect, useState} from "react";
import {Paragraf} from "@/Component/StyledComponent/Typography/CustomTypography";
import {getGuest} from "@/Component/FunctionComponent/axiosClient/axiosClient";
import {ResultCard} from "@/Component/StyledComponent/CustomCard/CustomCard";
import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import {useDispatch, useSelector} from "react-redux";
import {selectDataEntry, setDataEntry} from "@/Redux/feature/dataSlice";
import style from "./Recommendation.module.scss";
import Left from "@mui/icons-material/ArrowCircleLeftRounded";
import Right from "@mui/icons-material/ArrowCircleRightRounded";
import {useTranslation} from "react-i18next";
import {TrackDetails, useKeenSlider} from "keen-slider/react";
import {IconButton} from "@mui/material";

export default function Recommendation() {
  const {t} = useTranslation();
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
            .catch((err: object) => {
            });
      } catch (err) {
      }
    } else {
      setItem(dataEntry);
    }
  }, []);

  const [details, setDetails] = React.useState<TrackDetails | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
      {
        loop: true,
        slides: {
          perView: 1,
        },
        breakpoints: {
          "(min-width: 600px)": {
            slides: {perView: 2, spacing: 5},
          },
          "(min-width: 900px)": {
            slides: {perView: 3, spacing: 10},
          },
        },
        detailsChanged(s: any) {
          setDetails(s.track.details);
        },
        initial: 2,
        slideChanged(slider: any) {
          setCurrentSlide(slider.track.details.rel);
        },
        created() {
          setLoaded(true);
          console.log("loaded");
        },
      },
      [
        (slider: any) => {
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
            }, 3000);
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
        <div className={style.swiper}>
          {loaded && instanceRef.current && (
              <IconButton
                  onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                  }
              >
                <Left fontSize="large"/>
              </IconButton>
          )}
          <div ref={sliderRef} className="keen-slider zoom-out">
            {item.map((item: any, index) => (
                <div
                    key={index}
                    className="keen-slider__slide zoom-out__slide"
                >
                  <div
                      style={scaleStyle(index)}
                      className={style.swiperItem}
                  >
                    <ResultCard
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
              <IconButton
                  onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                  }
              >
                <Right fontSize="large"/>
              </IconButton>
          )}
        </div>
      </>
  );
}