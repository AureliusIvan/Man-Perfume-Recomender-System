import style from "./CustomFormik.module.scss";

import { ErrorMessage, Form, Formik } from "formik";
import { CustomTextInput } from "./CustomTextInput";
import { getInputs } from "./getInputs";

import Spacer from "@/Pages/User/Spacer/spacer";
import Center from "../CustomCenter/Center";
import { CustomButton as Button } from "@/Component/StyledComponent/CustomButton/CustomButton";

interface nyam {
  formName: string;
}

const CustomFormik = (props : nyam) => {
  const { initialValues, inputs, validationSchema } = getInputs(`${props.formName}`);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        {inputs.map(({ label, name, type, value, ...props }) => {
          return (
            <>
              <CustomTextInput
                key={name}
                label={label}
                name={name}
                placeholder={props.placeholder}
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
