import React, { useEffect, useRef, useState } from "react";
// import style from "./LoginPage.module.scss";
import { Box } from "@material-ui/core";
import { LogoImage } from "@/Component/StyledComponent/CustomImage/CustomImage";
import { Formik, FormikProps, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { get, post, postGuest } from "@/Component/FunctionComponent/axiosClient/axiosClient";
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

export default function EditMenu(props: any) {
    return (<>
        <Modal
            title={"Edit"}
            xbutton={true}
        >
            <CustomBox>
                <h1>Edit Data Parfum</h1>
                <Box padding={"50px"}>
                    <TheForm
                        id={props.id}
                        data={props.data}
                    />
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

function TheForm(props: any) {
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

    const [data, setData] = useState<any>({});
    const [criteria, setCriteria] = useState<any>({});

    useEffect(() => {
        setData(props.data);
        setCriteria(props.data);
        console.log(criteria);
    }, []);

    return (
        <Formik
            initialValues={{
                nama: props.data.nama,
                foto: data.foto,
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
                    const formdata = new FormData;
                    setLoading(true);
                    async function login() {
                        console.log(values);
                        // const foto: any = await compressImage(values.foto);  
                        formdata.append("foto", values.foto);
                        await post(`v1/admin/parfums/update/${props.id}`,
                            {
                                foto: formdata.get("foto"),
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
                // foto: Yup.string().required("foto Required"),
                nama: Yup.string().required("nama Required"),
                brand: Yup.string().required("brand Required"),
                harga: Yup.string().required("harga Required"),
                tipe_aroma: Yup.string().required("tipe_aroma Required"),
                tipe_parfum: Yup.string().required("tipe_parfum Required"),
                // kategori: Yup.string().required("kategori Required"),
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
                const { initialValues, touched, errors, handleChange, handleBlur, isSubmitting, values, setFieldValue, dirty } = props;
                return (
                    <Form>
                        {error &&
                            <Alert severity="error">{message}</Alert>}
                        <div className="fileinput">
                            <label htmlFor="foto">
                                Change Image
                                <div className={style.profilepic}>
                                    <img src={values.foto ? URL.createObjectURL(values.foto) : data.foto} alt="" />
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
                        {errors.nama && touched.nama && (
                            <Alert severity="error">{errors.nama?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[0].value}
                            label={Data[0].placeholder}
                            type={Data[0].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.nama}
                        />
                        {errors.harga && touched.harga && (
                            <Alert severity="error">{errors.harga?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[1].value}
                            label={Data[1].placeholder}
                            type={Data[1].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.harga}
                        />
                        {errors.brand && touched.brand && (
                            <Alert severity="error">{errors.brand?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[2].value}
                            label={Data[2].placeholder}
                            type={Data[2].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.brand}
                        />
                        {errors.tipe_aroma && touched.tipe_aroma && (
                            <Alert severity="error">{errors.tipe_aroma?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[3].value}
                            label={Data[3].placeholder}
                            type={Data[3].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.tipe_aroma}
                        />
                        {errors.tipe_parfum && touched.tipe_parfum && (
                            <Alert severity="error">{errors.tipe_parfum?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[4].value}
                            label={Data[4].placeholder}
                            type={Data[4].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.tipe_parfum}
                        />
                        {errors.kategori && touched.kategori && (
                            <Alert severity="error">{errors.kategori?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[5].value}
                            label={Data[5].placeholder}
                            type={Data[5].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.kategori}
                        />
                        {errors.deskripsi && touched.deskripsi && (
                            <Alert severity="error">{errors.deskripsi?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[6].value}
                            label={Data[6].placeholder}
                            type={Data[6].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.deskripsi}
                        />
                        {errors.quality_index && touched.quality_index && (
                            <Alert severity="error">{errors.quality_index?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[7].value}
                            label={Data[7].placeholder}
                            type={Data[7].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.quality_index}
                        />
                        {errors.durability_index && touched.durability_index && (
                            <Alert severity="error">{errors.durability_index?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[8].value}
                            label={Data[8].placeholder}
                            type={Data[8].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.durability_index}
                        />
                        {errors.aroma_index && touched.aroma_index && (
                            <Alert severity="error">{errors.aroma_index?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[9].value}
                            label={Data[9].placeholder}
                            type={Data[9].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.aroma_index}
                        />
                        {errors.price_index && touched.price_index && (
                            <Alert severity="error">{errors.price_index?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[10].value}
                            label={Data[10].placeholder}
                            type={Data[10].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.price_index}
                        />
                        {errors.ukuran && touched.ukuran && (
                            <Alert severity="error">{errors.ukuran?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[11].value}
                            label={Data[11].placeholder}
                            type={Data[11].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.ukuran}
                        />
                        {errors.link_pembelian && touched.link_pembelian && (
                            <Alert severity="error">{errors.link_pembelian?.toString()}</Alert>
                        )}
                        <Input
                            name={Data[12].value}
                            label={Data[12].placeholder}
                            type={Data[12].type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={initialValues.link_pembelian}
                        />





                        <Spacer y="20px" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button type="submit"
                                disabled={loading || isSubmitting || !props.isValid || !dirty}
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