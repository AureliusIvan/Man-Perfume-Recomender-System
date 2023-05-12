import { useState } from "react";
import { useField } from "formik";

import "./CustomFormik.module.scss";

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomImageInput = (props: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="drop-container">
        <input
          id="images"
          // helperText={meta.error && meta.touched ? meta.error : ""}
          // error={meta.error && meta.touched ? true : false}
          accept="image/*"
          required
					{...field}
					{...props}
        />
      </label>
    </>
  );
};
