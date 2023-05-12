import { useField } from "formik";
import { CustomInput } from "../CustomInput/CustomInput";

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomTextInput = (props: Props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <CustomInput
        helperText={meta.error && meta.touched ? meta.error : ""}
        error={meta.error && meta.touched ? true : false}
        {...field}
        {...props}
      />
    </div>
  );
};
