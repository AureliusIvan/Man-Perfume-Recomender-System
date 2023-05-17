import style from "./CustomFormik.module.scss";

import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import { CustomTextInput } from "./CustomTextInput";
import { getInputs } from "./getInputs";

import Spacer from "@/Pages/User/Spacer/spacer";
import Center from "../CustomCenter/Center";
import { Box, Typography } from "@mui/material";

import { CustomButton as Button } from "@/Component/StyledComponent/CustomButton/CustomButton";
import { CustomImageInput } from "./CustomImageInput";
import { Confirmations } from "../CustomModal/CustomModal";
import CustomInputImage from "@/Component/CustomInputImage/CustomInputImage";

interface nyam {
  formName: string;
  onSubmit?: any;
  title?: string;

  // Form values (hardcode :'D)
  fName: string;
  fMerk: string;
  fScent: string;
  fSize: number;
  fPrice: number;
  fImage: unknown;

  [x: string | number | symbol]: unknown;
}

const CustomFormik = (props: nyam) => {
  const { inputs, validationSchema } = getInputs(`${props.formName}`);

  const initialValues = {
    name: props.fName,
    merk: props.fMerk,
    scent: props.fScent,
    size: props.fSize,
    price: props.fPrice,
    image: props.fImage,
    link: props.fLink,
  };

  const onSubmit = (values: any) => console.log(values);

  return (
    <>
      <Typography
        id="modal-modal-title"
        fontWeight="bold"
        variant="h6"
        component="h2"
      >
        {props.title}
      </Typography>
      <Box className={style.content}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={props.onSubmit ? props.onSubmit : onSubmit}
          enableReinitialize={true}
          
        >
          <Form>
            {inputs.map(
              ({ label, name, type, value, validations, ...inProps }) => {
                switch (type) {
                  case "file":
                    return (
                      <>
                        <Spacer y="10px" />
                        {/* <CustomImageInput
                          key={name}
                          label={label}
                          name={name}
                          placeholder={inProps.placeholder}
                          type={type}
                        /> */}
                        <CustomInputImage
                            key={name}
                            label={label}
                            name={name}
                            placeholder={inProps.placeholder}
                            type={type}
                        />
                        <Spacer y="10px" />
                        <ErrorMessage
                          name={name}
                          component="div"
                          className={style.errorImg}
                        />
                        <Spacer y="10px" />
                      </>
                    );
                  default:
                    return (
                      <>
                        <CustomTextInput
                          key={name}
                          label={label}
                          name={name}
                          placeholder={inProps.placeholder}
                          type={type}
                        />
                        <Spacer y="10px" />
                      </>
                    );
                }
              }
            )}
            <Spacer y="10px" />
            <Center>
              <Box className={style.btnGroup}>
                {props.deletable ? (
                  <Confirmations
                    title="Delete"
                    onConfirm={""}
                    onCancel={""}
                  ></Confirmations>
                ) : null}
                <Button type="submit">Submit</Button>
              </Box>
            </Center>
            <Spacer y="10px" />
          </Form>
        </Formik>
      </Box>
    </>
  );
};

export default CustomFormik;

// reference : https://dev.to/franklin030601/dynamic-forms-with-formik-and-react-js-3no1
