import "./ProductPage.scss";

import {getGuest} from '@/Component/FunctionComponent/axiosClient/axiosClient';
import {ResultCard} from '@/Component/StyledComponent/CustomCard/CustomCard';
import {Title} from '@/Component/StyledComponent/Typography/CustomTypography';
import {selectDataEntry, setDataEntry} from '@/Redux/feature/dataSlice';
import React, {useEffect, useState} from 'react'
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

export default function ProductPage() {
  const {t} = useTranslation();
  const [item, setItem] = useState<object[]>([]);
  const dispatch = useDispatch();
  const dataEntry = useSelector(selectDataEntry);

  useEffect(() => {
    if (dataEntry) {
      try {
        getGuest("v1/parfums/view")
            .then((res: any) => {
              setItem(res.data.data);
              dispatch(setDataEntry(res.data));
            })
            .catch((err: object) => {
              console.error(err);
            });
      } catch (e) {
        console.error(e);
      }
    } else {
      setItem(dataEntry);
    }
  }, []);

  return (
      <>
        <Helmet>
          <title>Product</title>
        </Helmet>
        <div
            className='ProductPage'
        >
          <Title>
            {t("productPageTitle")}
          </Title>
          <div
              className='CardContainer'
          >
            {
              item.map((item: any, index) => {
                return (
                    <ResultCard
                        title={item.brand + " - " + item.nama}
                        image={item.foto}
                        data={item}
                        key={index}
                    />
                )
              })
            }
          </div>
        </div>
      </>
  )
}
