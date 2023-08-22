import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import { selectDataEntry, setDataEntry } from "@/Redux/feature/dataSlice";
import { getGuest } from "@/Component/FunctionComponent/axiosClient/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { ResultCard } from "@/Component/StyledComponent/CustomCard/CustomCard";
import { CustomModal } from "@/Component/StyledComponent/CustomModal/CustomModal";
import "./ProductSection.scss";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import { Paragraf } from "@/Component/StyledComponent/Typography/CustomTypography";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import Left from "@mui/icons-material/ArrowCircleLeftRounded";
import Right from "@mui/icons-material/ArrowCircleRightRounded";

export default function ProductSection() {
  const { t } = useTranslation();
  const [item, setItem] = useState<object[]>([]);
  const dispatch = useDispatch();
  const dataEntry = useSelector(selectDataEntry);
  const navigate = useNavigate();
  const handler = () => navigate("/product ");

  useEffect(() => {
    if (dataEntry) {
      try {
        getGuest("v1/parfums/view?random=1&qty=5")
          .then((res: any) => {
            console.log(res);
            setItem(res.data.data);
            dispatch(setDataEntry(res.data));
          })
          .catch((err: object) => {});
      } catch (err) {}
    } else {
      setItem(dataEntry);
    }
    // console.log(data)
  }, []);

  const cardData = Array.from({ length: 10 }, () => "testimoni");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const swiperRef = useRef();

  const swiper = useSwiper();

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
              <Left fontSize="large" />
            </IconButton>
            <Swiper
              className="ProductCardContainer"
              // slidesPerView={2}
              // spaceBetween="auto"
              // pagination={{
              //   clickable: true,
              // }}
              onSwiper={(swiper: any) => {
                if (swiper) {
                  swiperRef.current = swiper;
                }
              }}
              modules={[Pagination, Navigation, A11y]}
              navigation={true}
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
              {item.map((item: any, index) => {
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
              })}
            </Swiper>
            <IconButton
              className="navbutton"
              onClick={() => {
                if (swiperRef.current) {
                  (swiperRef.current as any).slideNext();
                }
              }}
            >
              <Right fontSize="large" />
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
