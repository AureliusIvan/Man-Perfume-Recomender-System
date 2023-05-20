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
                foto: Yup.string().required("foto Required"),
                nama: Yup.string().required("nama Required"),
                brand: Yup.string().required("brand Required"),
                harga: Yup.string().required("harga Required"),
                tipe_aroma: Yup.string().required("tipe_aroma Required"),
                tipe_parfum: Yup.string().required("tipe_parfum Required"),
                kategori: Yup.string().required("kategori Required"),
                deskripsi: Yup.string().required("deskripsi Required"),
                quality_index: Yup.string().required("quality_index Required").max(5, "quality_index must be less than 5").min(1, "quality_index must be more than 1"),
                durability_index: Yup.string().required("durability_index Required").max(5, "durability_index must be less than 5").min(1, "durability_index must be more than 1"),
                aroma_index: Yup.string().required("aroma_index Required").max(5, "aroma_index must be less than 5").min(1, "aroma_index must be more than 1"),
                price_index: Yup.string().required("price_index Required").max(5, "price_index must be less than 5").min(1, "price_index must be more than 1"),
                ukuran: Yup.string().required("ukuran Required"),
                link_pembelian: Yup.string().required("link_pembelian Required"),
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
                                {values.foto &&
                                    <div className={style.profilepic}>
                                        <img src={values.foto ? URL.createObjectURL(values.foto) : ""} alt="" />
                                    </div>
                                }

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
                        {
                            Data.map((item, index) => {
                                return (
                                    <>
                                        {errors[item.value as keyof LoginForm] && touched[item.value as keyof LoginForm] && (
                                            <Alert severity="error">{errors[item.value as keyof LoginForm]?.toString()}</Alert>
                                        )}
                                        <Input
                                            label={item.placeholder}
                                            key={index}
                                            name={item.value}
                                            type={item.type}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </>
                                )
                            }
                            )
                        }
                        <Spacer y="20px" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button type="submit"
                                disabled={loading || isSubmitting || !props.isValid || !props.dirty || props.isSubmitting}
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