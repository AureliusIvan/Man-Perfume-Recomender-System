import "./Menu.scss";

import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import {Form, Formik, FormikProps} from "formik";
import * as Yup from "yup";
import {post,} from "@/Component/FunctionComponent/axiosClient/axiosClient";
import {CustomModal as Modal} from "../../CustomModal/CustomModal";
import {Alert, CircularProgress} from "@mui/material";
import {CustomInput as Input} from "../../CustomInput/CustomInput";
import {CustomButton as Button} from "../../CustomButton/CustomButton";
import Spacer from "@/Pages/User/Spacer/spacer";
import {EntryData as Data} from "./EntryData";
import {Flex} from "../../CustomBox/CustomBox";
import style from "../../../CustomInputImage/CustomInputImage.module.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import {useTranslation} from "react-i18next";

export default function EditMenu(props: any) {
  const {t} = useTranslation();

  return (
      <>
        <Modal
            title={"Edit"}
            portrait
            xbutton={true}
            buttonMarginBottom={"10px"}
        >
          <h1 style={{textAlign: "center"}}>Edit {t("perfume")}</h1>
          <Box className="content">
            <TheForm id={props.id} data={props.data}/>
          </Box>
        </Modal>
      </>
  );
}

interface LoginForm {
  nama: string;
  foto: any;
  brand: string;
  harga: string;
  tipe_aroma: string;
  tipe_parfum: string;
  kategori: string;
  deskripsi: string;
  quality_index: string;
  durability_index: string;
  aroma_index: string;
  price_index: string;
  ukuran: string;
  link_pembelian: string;
  image: any;
  deleteImg: boolean;
}

function TheForm(props: any) {
  const {t} = useTranslation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const showerror = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const [data, setData] = useState<any>({});
  const [criteria, setCriteria] = useState<any>({});
  useEffect(() => {
    setData(props.data);
    setCriteria(props.data);
  }, []);

  return (
      <Formik
          initialValues={{
            deleteImg: false,
            nama: props.data.nama,
            foto: null,
            image: data.foto,
            brand: props.data.brand,
            harga: props.data.harga,
            tipe_aroma: props.data.tipe_aroma,
            tipe_parfum: props.data.tipe_parfum,
            kategori: props.data.kategori,
            deskripsi: props.data.deskripsi,
            quality_index: props.data.criteria[0].index_id,
            durability_index: props.data.criteria[1].index_id,
            aroma_index: props.data.criteria[2].index_id,
            price_index: props.data.criteria[3].index_id,
            ukuran: props.data.ukuran,
            link_pembelian: props.data.link_pembelian,
          }}
          onSubmit={(values: LoginForm, actions) => {
            try {
              const formdata = new FormData();
              setLoading(true);
              if (!values.deleteImg) {
                values.foto
                    ? formdata.append("foto", values.foto)
                    : formdata.append("foto", "1");
              }
              formdata.append("nama", values.nama);
              formdata.append("brand", values.brand);
              formdata.append("harga", values.harga);
              formdata.append("tipe_aroma", values.tipe_aroma);
              formdata.append("tipe_parfum", values.tipe_parfum);
              formdata.append("kategori", values.kategori);
              formdata.append("deskripsi", values.deskripsi);
              formdata.append("quality_index", values.quality_index);
              formdata.append(
                  "durability_index",
                  values.durability_index
              );
              formdata.append("aroma_index", values.aroma_index);
              formdata.append("price_index", values.price_index);
              formdata.append("ukuran", values.ukuran);
              formdata.append("link_pembelian", values.link_pembelian);

              async function SubmitEdit() {
                await post(
                    `v1/admin/parfums/update/${props.id}`,
                    formdata
                )
                    .then((res: any) => {
                      if (res.status === 200) {
                        // console.log(res);
                        setLoading(false);
                        window.location.reload();
                      } else {
                        setLoading(false);
                        setMessage("Something went wrong");
                        showerror();
                      }
                    })
                    .catch((err) => {
                      setMessage("Something went wrong");
                      showerror();
                      setLoading(false);
                    });
              }

              SubmitEdit();
            } catch (err) {
              setMessage("Something went wrong");
              showerror();
              setLoading(false);
            }
            actions.setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            nama: Yup.string().required(`${t("rNameVld")}`),
            brand: Yup.string().required(`${t("rBrandVld")}`),
            harga: Yup.string().required(`${t("rPriceVld")}`),
            tipe_aroma: Yup.string().required(`${t("rsTypeVld")}`),
            tipe_parfum: Yup.string().required(`${t("rpTypeVld")}`),
            deskripsi: Yup.string().required(`${t("rDescVld")}`),
            quality_index: Yup.number()
                .required(`${t("rQIndex")}`)
                .max(5, `${t("maxQIndex")}`)
                .min(1, `${t("minQIndex")}`),
            durability_index: Yup.number()
                .required(`${t("rDIndex")}`)
                .max(5, `${t("maxDIndex")}`)
                .min(1, `${t("maxDIndex")}`),
            aroma_index: Yup.number()
                .required(`${t("rSIndex")}`)
                .max(5, `${t("maxSIndex")}`)
                .min(1, `${t("maxSIndex")}`),
            price_index: Yup.number()
                .required(`${t("rPIndex")}`)
                .max(5, `${t("maxPIndex")}`)
                .min(1, `${t("maxPIndex")}`),
            ukuran: Yup.string().required(`${t("rSizeVld")}`),
            link_pembelian: Yup.string()
                .required(`${t("rLinkVld")}`)
                .url(`${t("urlLink")}`),
          })}
      >
        {(props: FormikProps<LoginForm>) => {
          const {
            initialValues,
            touched,
            errors,
            handleChange,
            handleBlur,
            isSubmitting,
            values,
            setFieldValue,
            dirty,
          } = props;
          return (
              <Flex>
                <Form className={style.content}>
                  {error && <Alert severity="error">{message}</Alert>}
                  <div className="fileinput">
                    <label htmlFor="foto">
                      Change Image
                      <div className={style.profilepic}>
                        {!values.deleteImg && (
                            <img
                                src={
                                  values.foto
                                      ? URL.createObjectURL(
                                          values.foto
                                      )
                                      : data.foto
                                }
                                alt=""
                            />
                        )}
                      </div>
                      <input
                          placeholder="Foto"
                          onChange={(e) => {
                            handleChange;
                            setFieldValue(
                                "foto",
                                e.currentTarget.files?.[0]
                            );
                          }}
                          type="file"
                          accept="image/*"
                          id={"foto"}
                          name={"foto"}
                      />
                    </label>
                  </div>

                  <button
                      onClick={() => setFieldValue("deleteImg", true)}
                      type="button"
                      className={"delete"}
                  >
                    <DeleteForeverIcon/>
                  </button>

                  <br/>
                  <Input
                      name={Data[0].value}
                      label={t(Data[0].label)}
                      type={Data[0].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.nama}
                      helperText={
                        errors.nama && touched.nama
                            ? errors.nama
                            : ""
                      }
                      error={
                        !!(errors.nama && touched.nama)
                      }
                  />
                  <Input
                      name={Data[1].value}
                      label={t(Data[1].label)}
                      type={Data[1].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.harga}
                      helperText={
                        errors.harga && touched.harga
                            ? errors.harga
                            : ""
                      }
                      error={
                        !!(errors.harga && touched.harga)
                      }
                  />
                  <Input
                      name={Data[2].value}
                      label={t(Data[2].label)}
                      type={Data[2].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.brand}
                      helperText={
                        errors.brand && touched.brand
                            ? errors.brand
                            : ""
                      }
                      error={
                        !!(errors.brand && touched.brand)
                      }
                  />
                  <Input
                      name={Data[3].value}
                      label={t(Data[3].label)}
                      type={Data[3].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.tipe_aroma}
                      helperText={
                        errors.tipe_aroma && touched.tipe_aroma
                            ? errors.tipe_aroma
                            : ""
                      }
                      error={
                        !!(errors.tipe_aroma && touched.tipe_aroma)
                      }
                  />
                  <Input
                      name={Data[4].value}
                      label={t(Data[4].label)}
                      type={Data[4].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.tipe_parfum}
                      helperText={
                        errors.tipe_parfum && touched.tipe_parfum
                            ? errors.tipe_parfum
                            : ""
                      }
                      error={
                        !!(errors.tipe_parfum && touched.tipe_parfum)
                      }
                  />
                  <Input
                      name={Data[5].value}
                      label={t(Data[5].label)}
                      type={Data[5].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.kategori}
                      helperText={
                        errors.kategori && touched.kategori
                            ? errors.kategori
                            : ""
                      }
                      error={
                        !!(errors.kategori && touched.kategori)
                      }
                  />
                  <Input
                      name={Data[6].value}
                      label={t(Data[6].label)}
                      type={Data[6].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.deskripsi}
                      helperText={
                        errors.deskripsi && touched.deskripsi
                            ? errors.deskripsi
                            : ""
                      }
                      error={
                        errors.deskripsi && touched.deskripsi
                            ? true
                            : false
                      }
                  />
                  <Input
                      name={Data[7].value}
                      label={t(Data[7].label)}
                      type={Data[7].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.quality_index}
                      helperText={
                        errors.quality_index &&
                        touched.quality_index
                            ? errors.quality_index
                            : ""
                      }
                      error={
                        errors.quality_index &&
                        touched.quality_index
                            ? true
                            : false
                      }
                  />
                  <Input
                      name={Data[8].value}
                      label={t(Data[8].label)}
                      type={Data[8].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.durability_index}
                      helperText={
                        errors.durability_index &&
                        touched.durability_index
                            ? errors.durability_index
                            : ""
                      }
                      error={
                        errors.durability_index &&
                        touched.durability_index
                            ? true
                            : false
                      }
                  />
                  <Input
                      name={Data[9].value}
                      label={t(Data[9].label)}
                      type={Data[9].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.aroma_index}
                      helperText={
                        errors.aroma_index && touched.aroma_index
                            ? errors.aroma_index
                            : ""
                      }
                      error={
                        errors.aroma_index && touched.aroma_index
                            ? true
                            : false
                      }
                  />
                  <Input
                      name={Data[10].value}
                      label={t(Data[10].label)}
                      type={Data[10].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.price_index}
                      helperText={
                        errors.price_index && touched.price_index
                            ? errors.price_index
                            : ""
                      }
                      error={
                        errors.price_index && touched.price_index
                            ? true
                            : false
                      }
                  />
                  <Input
                      name={Data[11].value}
                      label={t(Data[11].label)}
                      type={Data[11].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.ukuran}
                      helperText={
                        errors.ukuran && touched.ukuran
                            ? errors.ukuran
                            : ""
                      }
                      error={
                        errors.ukuran && touched.ukuran
                            ? true
                            : false
                      }
                  />
                  <Input
                      name={Data[12].value}
                      label={t(Data[12].label)}
                      type={Data[12].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.link_pembelian}
                      // error={errors.username && touched.username ? true : false}
                      helperText={
                        errors.link_pembelian &&
                        touched.link_pembelian
                            ? errors.link_pembelian
                            : ""
                      }
                      error={
                        errors.link_pembelian &&
                        touched.link_pembelian
                            ? true
                            : false
                      }
                  />
                  <Spacer y="20px"/>
                  <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                  >
                    <Button
                        type="submit"
                        disabled={
                            loading ||
                            isSubmitting ||
                            !props.isValid ||
                            !dirty
                        }
                    >
                      {loading ? (
                          <CircularProgress/>
                      ) : (
                          t("submit")
                      )}
                    </Button>
                  </div>
                </Form>
              </Flex>
          );
        }}
      </Formik>
  );
}
