import style from "./CustomFormik.module.scss";

import { ErrorMessage, Form, Formik } from "formik";
import { CustomTextInput } from "./CustomTextInput";
import { getInputs } from "./getInputs";

import Spacer from "@/Pages/User/Spacer/spacer";
import Center from "../CustomCenter/Center";
import { CustomButton as Button } from "@/Component/StyledComponent/CustomButton/CustomButton";

interface nyam {
  formName: string;
  onSubmit: any;
}

const CustomFormik = (props : nyam) => {
  const { initialValues, inputs, validationSchema } = getInputs(`${props.formName}`);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
      // onSubmit={(values) => console./log(values)}
    >
      <Form>
        {inputs.map(({ label, name, type, value, validations, ...inProps }) => {
          return (
            <>
              <CustomTextInput
                key={name}
                label={label}
                name={name}
                placeholder={inProps.placeholder}
                type={type}
              />
              <ErrorMessage name={name} component="div" className={style.error} />
              <br />
            </>
          );
        })}
        <Spacer y="20px" />
        <Center>
          <Button type="submit">Submit</Button>
        </Center>
      </Form>
    </Formik>
  );
};

export default CustomFormik;

// reference : https://dev.to/franklin030601/dynamic-forms-with-formik-and-react-js-3no1
