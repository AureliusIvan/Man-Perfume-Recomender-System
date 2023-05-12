import style from "./CustomFormik.module.scss";

import { ErrorMessage, Form, Formik } from "formik";
import { CustomTextInput } from "./CustomTextInput";
import { getInputs } from "./getInputs";

import Spacer from "@/Pages/User/Spacer/spacer";
import Center from "../CustomCenter/Center";
import { Box } from "@material-ui/core";

import { CustomButton as Button } from "@/Component/StyledComponent/CustomButton/CustomButton";
import { CustomImageInput } from "./CustomImageInput";

interface nyam {
  formName: string;
  onSubmit: any;
}

const CustomFormik = (props: nyam) => {
  const { initialValues, inputs, validationSchema } = getInputs(
    `${props.formName}`
  );

  return (
    <Box className={style.content}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={props.onSubmit}
        // onSubmit={(values) => console./log(values)}
      >
        <Form>
          {inputs.map(
            ({ label, name, type, value, validations, ...inProps }) => {
              switch (type) {
                case "file":
                  return (
                    <>
                      <Spacer y="10px" />
                      <CustomImageInput
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
                        className={style.error}
                      />
                      <Spacer y="10px" />
                    </>
                  );
                // case "range":
                //   return (
                //     <>
                //       <Box sx={{ display: 'flex' }} className="rangeInput">
                //         <Spacer y="10px" />
                //         <CustomTextInput
                //           key={name}
                //           label={label}
                //           name={name}
                //           placeholder={inProps.placeholder}
                //           type="number"
                //           style = {{width: "30%"}}
                //         />
                //         <CustomTextInput
                //           key={name}
                //           label={label}
                //           name={name}
                //           placeholder={inProps.placeholder}
                //           type="number"
                //           style = {{width: "30%"}}
                //         />
                        
                //         <Spacer y="10px" />
                //       </Box>
                //     </>
                //   );
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
          <Spacer y="20px" />
          <Center>
            <Button type="submit">Submit</Button>
          </Center>
          <Spacer y="10px" />
        </Form>
      </Formik>
    </Box>
  );
};

export default CustomFormik;

// reference : https://dev.to/franklin030601/dynamic-forms-with-formik-and-react-js-3no1
