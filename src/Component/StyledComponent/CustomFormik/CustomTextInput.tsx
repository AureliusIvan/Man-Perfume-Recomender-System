import { useField } from "formik";
import { CustomInput } from "../CustomInput/CustomInput";

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomTextInput = (props: Props) => {
  const [field] = useField(props);

  return (
    <div>
      <CustomInput {...field} {...props} />
    </div>
  );
};
