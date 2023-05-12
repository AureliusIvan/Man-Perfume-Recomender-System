// bisa ambil value dari back end kahh? dari fe mumet belom bisa..

export interface InputProps {
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  label?: string;
  handleSubmit?: Function;
  type: "text" | "number" | "file" | "radio-group" | "email" | "password" | "select" | "checkbox";
  typeValue?: "string" | "boolean";
  options?: Opt[];
  validations: Validation[];
}

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Validation {
  type: "required" | "isEmail" | "minLength" | "isTrue";
  value?: string | number | boolean;
  message: string;
}

export const forms: { [x: string]: InputProps[] } = {
  editPerfume: [
    {
      label: "Nama Parfum",
      type: "text",
      name: "name",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 3,
          message: "Min. 3 characters",
        },
        {
          type: "required",
          message: "Perfume name is required",
        },
      ],
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Password is required",
        },
      ],
    },
  ],
  newPerfume: [
    {
      label: "Nama Parfum",
      type: "text",
      name: "name",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Perfume name is required",
        },
      ],
    },
    {
      label: "Merk",
      type: "text",
      name: "merk",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Brand is required",
        },
      ],
    },
    {
      label: "Ukuran (ml)",
      type: "number",
      name: "size",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Size is required",
        },
      ],
    },
    {
      label: "",
      type: "file",
      name: "image",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Perfume image is required",
        },
      ],
    },
  ],

  // how to make use of other input styles
  // {
  //   type: "select",
  //   name: "rol",
  //   label: "Select an option: ",
  //   value: "",
  //   options: [
  //     {
  //       value: "admin",
  //       desc: "Admin",
  //     },
  //     {
  //       value: "user",
  //       desc: "User",
  //     },
  //     {
  //       value: "super-admin",
  //       desc: "Super Admin",
  //     },
  //   ],
  //   validations: [
  //     {
  //       type: "required",
  //       message: "Rol is required",
  //     },
  //   ],
  // },
  // {
  //   type: "radio-group",
  //   name: "gender",
  //   label: "Gender: ",
  //   value: "",
  //   options: [
  //     {
  //       value: "man",
  //       desc: "Man",
  //     },
  //     {
  //       value: "woman",
  //       desc: "Woman",
  //     },
  //     {
  //       value: "other",
  //       desc: "Other",
  //     },
  //   ],
  //   validations: [
  //     {
  //       type: "required",
  //       message: "Gender is required",
  //     },
  //   ],
  // },
  // {
  //   type: "checkbox",
  //   name: "terms",
  //   typeValue: "boolean",
  //   label: "Terms and Conditions",
  //   value: false,
  //   validations: [
  //     {
  //       type: "isTrue",
  //       message: "Accept the terms!",
  //     },
  //   ],
  // },
};
