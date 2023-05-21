import React, { useRef, useState } from "react";
// import style from "./LoginPage.module.scss";
import { Box } from "@material-ui/core";
import { LogoImage } from "@/Component/StyledComponent/CustomImage/CustomImage";
import { Formik, FormikProps, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { post, postGuest } from "@/Component/FunctionComponent/axiosClient/axiosClient";
import { CustomModal as Modal } from "../../CustomModal/CustomModal";
import { Alert } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { setCookie } from "react-use-cookie";
import { setLogin } from "@/Redux/feature/dataSlice";
import { CustomInput as Input } from "../../CustomInput/CustomInput";
import { CustomButton as Button } from "../../CustomButton/CustomButton";
import Spacer from "@/Pages/User/Spacer/spacer";
import { EntryData as Data } from "./EntryData";
import { CustomBox } from "../../CustomBox/CustomBox";
import CustomInputImage from "@/Component/CustomInputImage/CustomInputImage";
import { FileUploader } from "react-drag-drop-files";
import style from "../../../CustomInputImage/CustomInputImage.module.scss";
import compressImage from "@/Component/FunctionComponent/ImageCompressor/ImageCompressor";
import "./Menu.scss";

export default function AddMenu() {
    return (<>
        <Modal
            title={"Add +"}
            xbutton={true}
        >
            <CustomBox>
                <h1>Tambah Data Parfum</h1>
                <Box padding={"50px"}>
                    <TheForm />
                </Box>
            </CustomBox>
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
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const showerror = () => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 3000);
    }
    const inputRefs = useRef<any>([]);

    const handleKeyDown = (e: any, index: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextIndex = index + 1;
            if (inputRefs.current[nextIndex]) {
                inputRefs.current[nextIndex].focus();
            }
        }
    };

    const handleFileChange = (event: any, setFieldValue: any) => {
        const file = event.target.files[0];
        setFieldValue('image', file);
    };

    return (
        <Formik
            initialValues={{
                nama: "Sungut Lele",
                foto: null,
                image: "",
                brand: "Sungut Lele",
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
                    console.log(values.foto);
                    const formdata = new FormData;
                    formdata.append("nama", values.nama);
                    formdata.append("brand", values.brand);
                    formdata.append("harga", values.harga);
                    formdata.append("tipe_aroma", values.tipe_aroma);
                    formdata.append("tipe_parfum", values.tipe_parfum);
                    formdata.append("kategori", values.kategori);
                    formdata.append("deskripsi", values.deskripsi);
                    formdata.append("quality_index", values.quality_index);
                    formdata.append("durability_index", values.durability_index);
                    formdata.append("aroma_index", values.aroma_index);
                    formdata.append("price_index", values.price_index);
                    formdata.append("ukuran", values.ukuran);
                    formdata.append("link_pembelian", values.link_pembelian);

                    setLoading(true);
                    async function login() {
                        const foto: any = await compressImage(values.foto);
                        formdata.append("foto", foto);
                        console.log(formdata.get("foto"));
                        // 
                        await post("v1/admin/parfums/create",
                            {
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
                            }
                        ).then((res: any) => {
                            if (res.status === 200) {
                                console.log(res);
                                setLoading(false);
                                window.location.reload();
                            } else {
                                setLoading(false);
                                setMessage("Something went wrong");
                                showerror();
                                console.log(res);
                            }
                        }
                        ).catch((err) => {
                            console.log(err);
                            setMessage("Something went wrong");
                            showerror();
                            setLoading(false);
                        })
                    }

                    login();
                } catch (err) {
                    console.log(err);
                    setMessage("Something went wrong");
                    showerror();
                    setLoading(false);
                }
                actions.setSubmitting(false);
            }}
            validationSchema={Yup.object().shape({
                foto: Yup.mixed().required("Foto wajib diisi"),
                nama: Yup.string().required("Nama Parfum wajib diisi"),
                brand: Yup.string().required("Merk Parfum wajib diisi"),
                harga: Yup.string().required("Harga Parfum wajib diisi"),
                tipe_aroma: Yup.string().required("Tipe Aroma wajib diisi"),
                tipe_parfum: Yup.string().required("Tipe Parfum wajib diisi"),
                deskripsi: Yup.string().required("Deskripsi wajib diisi"),
                quality_index: Yup.number().required("Index Kualitas wajib diisi").max(5, "Index Kualitas tidak boleh lebih dari 5").min(1, "Index Kualitas harus 1 atau lebih"),
                durability_index: Yup.number().required("Index Durabilitas wajib diisi").max(5, "Index Durabilitas tidak boleh lebih dari 5").min(1, "Index Durabilitas harus 1 atau lebih"),
                aroma_index: Yup.number().required("Index Aroma wajib diisi").max(5, "Index Aroma tidak boleh lebih dari 5").min(1, "Index Aroma harus 1 atau lebih"),
                price_index: Yup.number().required("Index Harga wajib diisi").max(5, "Index Harga tidak boleh lebih dari 5").min(1, "Index Harga harus 1 atau lebih"),
                ukuran: Yup.string().required("Ukuran Parfum wajib diisi"),
                link_pembelian: Yup.string().required("Link pembelian wajib diisi"),
            })}
        >
            {(props: FormikProps<LoginForm>) => {
                const { touched, errors, handleChange, handleBlur, isSubmitting, values, setFieldValue } = props;
                return (
                    <Form>
                        {error &&
                            <Alert severity="error">{message}</Alert>}
                        <div className="fileinput">
                            <label htmlFor="foto">
                                Change Image
                                <div className={style.profilepic}>
                                    <img src={values.foto && URL.createObjectURL(values.foto)} alt="" />
                                </div>
                                <input
                                    placeholder="Foto"
                                    onChange={e => {
                                        handleChange
                                        setFieldValue("foto", e.currentTarget.files?.[0]);
                                    }}
                                    type="file"
                                    accept='image/*'
                                    id={"foto"}
                                    name={"foto"}
                                />
                            </label>
                        </div>

                        <br />
                        <Input
                            name={Data[0].value}
                            label={Data[0].placeholder}
                            type={Data[0].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.nama && touched.nama ? errors.nama : ""}
                            error={errors.nama && touched.nama ? true : false}
                        />
                        <Input
                            name={Data[1].value}
                            label={Data[1].placeholder}
                            type={Data[1].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.harga && touched.harga ? errors.harga : ""}
                            error={errors.harga && touched.harga ? true : false}
                        />
                        <Input
                            name={Data[2].value}
                            label={Data[2].placeholder}
                            type={Data[2].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.brand && touched.brand ? errors.brand : ""}
                            error={errors.brand && touched.brand ? true : false}
                        />
                        <Input
                            name={Data[3].value}
                            label={Data[3].placeholder}
                            type={Data[3].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.tipe_aroma && touched.tipe_aroma ? errors.tipe_aroma : ""}
                            error={errors.tipe_aroma && touched.tipe_aroma ? true : false}
                        />
                        <Input
                            name={Data[4].value}
                            label={Data[4].placeholder}
                            type={Data[4].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.tipe_parfum && touched.tipe_parfum ? errors.tipe_parfum : ""}
                            error={errors.tipe_parfum && touched.tipe_parfum ? true : false}
                        />
                        <Input
                            name={Data[5].value}
                            label={Data[5].placeholder}
                            type={Data[5].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.kategori && touched.kategori ? errors.kategori : ""}
                            error={errors.kategori && touched.kategori ? true : false}
                        />
                        <Input
                            name={Data[6].value}
                            label={Data[6].placeholder}
                            type={Data[6].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.deskripsi && touched.deskripsi ? errors.deskripsi : ""}
                            error={errors.deskripsi && touched.deskripsi ? true : false}
                        />
                        <Input
                            name={Data[7].value}
                            label={Data[7].placeholder}
                            type={Data[7].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.quality_index && touched.quality_index ? errors.quality_index : ""}
                            error={errors.quality_index && touched.quality_index ? true : false}
                        />
                        <Input
                            name={Data[8].value}
                            label={Data[8].placeholder}
                            type={Data[8].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.durability_index && touched.durability_index ? errors.durability_index : ""}
                            error={errors.durability_index && touched.durability_index ? true : false}
                        />
                        <Input
                            name={Data[9].value}
                            label={Data[9].placeholder}
                            type={Data[9].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.aroma_index && touched.aroma_index ? errors.aroma_index : ""}
                            error={errors.aroma_index && touched.aroma_index ? true : false}
                        />
                        <Input
                            name={Data[10].value}
                            label={Data[10].placeholder}
                            type={Data[10].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.price_index && touched.price_index ? errors.price_index : ""}
                            error={errors.price_index && touched.price_index ? true : false}
                        />
                        <Input
                            name={Data[11].value}
                            label={Data[11].placeholder}
                            type={Data[11].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.ukuran && touched.ukuran ? errors.ukuran : ""}
                            error={errors.ukuran && touched.ukuran ? true : false}
                        />
                        <Input
                            name={Data[12].value}
                            label={Data[12].placeholder}
                            type={Data[12].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.link_pembelian && touched.link_pembelian ? errors.link_pembelian : ""}
                            error={errors.link_pembelian && touched.link_pembelian ? true : false}
                        />
                        <Spacer y="20px" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button type="submit"
                                disabled={loading || isSubmitting || !props.isValid}
                            >
                                {loading ? <CircularProgress /> : "Submit"}
                            </Button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};