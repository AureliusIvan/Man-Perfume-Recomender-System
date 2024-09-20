import "./Menu.scss";

import React, {useState} from "react";
import {Box} from "@material-ui/core";
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
import compressImage from "@/Component/FunctionComponent/ImageCompressor/ImageCompressor";
import {useTranslation} from "react-i18next";
import {Form, Formik, FormikProps} from "formik";

export default function AddMenu() {
  const {t} = useTranslation();

  return (
      <>
        <Modal
            title={t("add")}
            portrait
            xbutton={true}
            buttonMarginBottom={"10px"}
        >
          <h1 style={{textAlign: "center"}}>{t("add")}</h1>
          <Box className="content">
            <TheForm/>
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
}

const TheForm: React.FunctionComponent = () => {
  const {t} = useTranslation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  return (
      <Formik
          initialValues={{
            nama: "",
            foto: null,
            image: "",
            brand: "",
            harga: "",
            tipe_aroma: "",
            tipe_parfum: "",
            kategori: "",
            deskripsi: "",
            quality_index: "",
            durability_index: "",
            aroma_index: "",
            price_index: "",
            ukuran: "",
            link_pembelian: "",
          }}
          onSubmit={(values: LoginForm, actions) => {
            try {
              const formData = new FormData();
              formData.append("nama", values.nama);
              formData.append("brand", values.brand);
              formData.append("harga", values.harga);
              formData.append("tipe_aroma", values.tipe_aroma);
              formData.append("tipe_parfum", values.tipe_parfum);
              formData.append("kategori", values.kategori);
              formData.append("deskripsi", values.deskripsi);
              formData.append("quality_index", values.quality_index);
              formData.append(
                  "durability_index",
                  values.durability_index
              );
              formData.append("aroma_index", values.aroma_index);
              formData.append("price_index", values.price_index);
              formData.append("ukuran", values.ukuran);
              formData.append("link_pembelian", values.link_pembelian);

              setLoading(true);

              async function login() {
                const foto: any = await compressImage(values.foto);
                formData.append("foto", foto);
                await post("v1/admin/parfums/create", {
                  foto: foto,
                  nama: values.nama,
                  brand: values.brand,
                  harga: values.harga,
                  tipe_aroma: values.tipe_aroma,
                  tipe_parfum: values.tipe_parfum,
                  kategori: values.kategori,
                  deskripsi: values.deskripsi,
                  quality_index: values.quality_index,
                  durability_index: values.durability_index,
                  aroma_index: values.aroma_index,
                  price_index: values.price_index,
                  ukuran: values.ukuran,
                  link_pembelian: values.link_pembelian,
                })
                    .then((res: any) => {
                      if (res.status === 200) {
                        window.location.reload();
                      } else {
                        setMessage("Something went wrong");
                        showError();
                      }
                    })
                    .catch((err) => {
                      setMessage("Something went wrong");
                      showError();
                    })
                    .finally(() => {
                      setLoading(false);
                    });
              }

              login();
            } catch (err) {
              setMessage("Something went wrong");
              showError();
              setLoading(false);
            }
            actions.setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            foto: Yup.mixed().required(`${t("rImageVld")}`),
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
                <Form>
                  {error && <Alert severity="error">{message}</Alert>}
                  <div className="fileinput">
                    <label htmlFor="foto">
                      Change Image
                      <div className={style.profilepic}>
                        <img
                            src={
                                values.foto &&
                                URL.createObjectURL(values.foto)
                            }
                            alt=""
                        />
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

                  <br/>
                  {error && (
                      <Alert severity="error">{message}</Alert>
                  ) && <br/>}
                  <Input
                      name={Data[0].value}
                      label={t(Data[0].label)}
                      type={Data[0].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.nama && touched.nama
                            ? errors.nama
                            : ""
                      }
                      error={
                        (errors.nama && touched.nama) || dirty
                      }
                  />
                  <Input
                      name={Data[1].value}
                      label={t(Data[1].label)}
                      type={Data[1].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      helperText={
                        errors.deskripsi && touched.deskripsi
                            ? errors.deskripsi
                            : ""
                      }
                      error={
                        !!(errors.deskripsi && touched.deskripsi)
                      }
                  />
                  <Input
                      name={Data[7].value}
                      label={t(Data[7].label)}
                      type={Data[7].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.quality_index &&
                        touched.quality_index
                            ? errors.quality_index
                            : ""
                      }
                      error={
                        !!(errors.quality_index &&
                            touched.quality_index)
                      }
                  />
                  <Input
                      name={Data[8].value}
                      label={t(Data[8].label)}
                      type={Data[8].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.durability_index &&
                        touched.durability_index
                            ? errors.durability_index
                            : ""
                      }
                      error={
                        !!(errors.durability_index &&
                            touched.durability_index)
                      }
                  />
                  <Input
                      name={Data[9].value}
                      label={t(Data[9].label)}
                      type={Data[9].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.aroma_index && touched.aroma_index
                            ? errors.aroma_index
                            : ""
                      }
                      error={
                        !!(errors.aroma_index && touched.aroma_index)
                      }
                  />
                  <Input
                      name={Data[10].value}
                      label={t(Data[10].label)}
                      type={Data[10].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.price_index && touched.price_index
                            ? errors.price_index
                            : ""
                      }
                      error={
                        !!(errors.price_index && touched.price_index)
                      }
                  />
                  <Input
                      name={Data[11].value}
                      label={t(Data[11].label)}
                      type={Data[11].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.ukuran && touched.ukuran
                            ? errors.ukuran
                            : ""
                      }
                      error={
                        !!(errors.ukuran && touched.ukuran)
                      }
                  />
                  <Input
                      name={Data[12].value}
                      label={t(Data[12].label)}
                      type={Data[12].type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.link_pembelian &&
                        touched.link_pembelian
                            ? errors.link_pembelian
                            : ""
                      }
                      error={
                        !!(errors.link_pembelian &&
                            touched.link_pembelian)
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
};
