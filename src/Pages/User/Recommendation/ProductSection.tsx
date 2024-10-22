import "swiper/css";
import "swiper/css/pagination";
import "./ProductSection.scss";

import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper/modules";
import {selectDataEntry, setDataEntry} from "@/Redux/feature/dataSlice";
import {getGuest} from "@/Component/FunctionComponent/axiosClient/axiosClient";
import {useDispatch, useSelector} from "react-redux";
import {ResultCard} from "@/Component/StyledComponent/CustomCard/CustomCard";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import {Paragraf} from "@/Component/StyledComponent/Typography/CustomTypography";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import Left from "@mui/icons-material/ArrowCircleLeftRounded";
import Right from "@mui/icons-material/ArrowCircleRightRounded";

export default function ProductSection() {
  const {t} = useTranslation();
  const [item, setItem] = useState<object[]>([]);
  const dispatch = useDispatch();
  const dataEntry = useSelector(selectDataEntry);
  const navigate = useNavigate();
  const handler = () => navigate("/product ");

  useEffect(() => {
    if (dataEntry) {
      try {
        getGuest("v1/parfums/view?random=1&qty=10")
            .then((res: any) => {
              console.log(res);
              setItem(res.data.data);
              dispatch(setDataEntry(res.data));
            })
            .catch((err: object) => {
              console.error(err);
            });
      } catch (err) {
        console.error(err);
      }
    } else {
      setItem(dataEntry);
    }
  }, []);

  const swiperRef = useRef();

  return (
      <div className="ProductSection">
        <div>
          <div>
            <Center>
              <Paragraf
                  styledTitle={true}
                  title={t("homeTitle3")}
                  width={"300px"}
              >
                <i>{t("homeDesc3")}</i>
              </Paragraf>
            </Center>
            <div className="ProductContainer">
              <IconButton
                  className="navbutton"
                  onClick={() => {
                    if (swiperRef.current) {
                      (swiperRef.current as any).slidePrev();
                    }
                  }}
              >
                <Left fontSize="large"/>
              </IconButton>
              <Swiper
                  className="ProductCardContainer"
                  modules={[Pagination, Navigation, A11y]}
                  navigation={true}
                  onSwiper={(swiper: any) => {
                    if (swiper) {
                      swiperRef.current = swiper;
                    }
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    600: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    900: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
              >

                {
                  item ?
                      item.map((item: any, index) => {
                        return (
                            <SwiperSlide key={index}>
                              <ResultCard
                                  title={item.brand + " - " + item.nama}
                                  image={item.foto}
                                  data={item}
                                  key={index}
                              />
                            </SwiperSlide>
                        );
                      })

                      : <div>
                        Loading
                      </div>
                }
              </Swiper>
              <IconButton
                  className="navbutton"
                  onClick={() => {
                    if (swiperRef.current) {
                      (swiperRef.current as any).slideNext();
                    }
                  }}
              >
                <Right fontSize="large"/>
              </IconButton>
            </div>
            <div className="btnContainer">
              <button className="MoreProductButton" onClick={handler}>
                More Product
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
