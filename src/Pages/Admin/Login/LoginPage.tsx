// This is Login Page for user to be able to access admin page
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox";
import { CustomInput as Input } from "../../../Component/StyledComponent/CustomInput/CustomInput";
// import { Confirmations } from "../../../Component/StyledComponent/CustomModal/CustomModal"
// import { Rating } from "@mui/material"
import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton";
import { LogoImage } from "../../../Component/StyledComponent/CustomImage/CustomImage";
// import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import style from "./LoginPage.module.scss";
import Spacer from "../../User/Spacer/spacer";
import { useState } from "react";
import { Formik, FormikProps, Form } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { setLogin } from "@/Redux/feature/dataSlice";
import { useNavigate } from "react-router-dom";

import { post } from "@/Component/FunctionComponent/axiosClient/axiosClient";
import { setCookie } from "react-use-cookie";
// import CustomSpinner from "@/Component/StyledComponent/CustomSpinner/CustomSpinner";
import { CircularProgress } from "@mui/material";
import Alert from "@/Component/StyledComponent/CustomAlert/CustomAlert";

function LoginPage() {
  return (
    <div className={style.LoginPage}>
      {/* <Center y> */}
      <Box padding={"50px"}>
        <LogoImage size="200px" />
        {/* if validation goes well, redirect to admin page */}
        <TheForm />
      </Box>
      {/* </Center> */}
    </div>
  );
}

// Login Components

interface LoginForm {
  username: string;
  password: string;
}

const TheForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const showerror = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values: LoginForm, actions) => {
        // const formdata = new FormData;
        setLoading(true);
        async function login() {
          await post("v1/admin/auth/login", {
            username: values.username,
            password: values.password,
          }).then((res: any) => {
            dispatch(setLogin());
            if (res.status === 200) {
              setLoading(false);
              setCookie("TOKEN", res.data.data.token);
              navigate("/admin");
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
        actions.setSubmitting(false);
      }}
      // validator
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username Required"),
        password: Yup.string()
          .required("Password Required"),
      })}
    >
      {(props: FormikProps<LoginForm>) => {
        const { touched, errors, handleChange, handleBlur, isSubmitting, values } = props;
        return (
          <Form>
            {error &&
              <Alert severity="error">{message}</Alert>}
            <Input
              name="username"
              label="Username"
              type="text"
              helperText={
                errors.username && touched.username ? errors.username : ""
              }
              error={errors.username && touched.username ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <Input
              name="password"
              label="Password"
              type="password"
              helperText={
                errors.password && touched.password ? errors.password : ""
              }
              error={errors.password && touched.password ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Spacer y="20px" />
            <Button type="submit"
              disabled={loading || isSubmitting || !props.isValid || !props.dirty}
            >
              {loading ? <CircularProgress /> : "Login"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

// EO Login Components

export default LoginPage;