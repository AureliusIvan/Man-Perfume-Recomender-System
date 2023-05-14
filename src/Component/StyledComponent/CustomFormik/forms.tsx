export interface InputProps {
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  label?: string;
  handleSubmit?: Function;
  type:
    | "text"
    | "number"
    | "file"
    | "range"
    | "radio-group"
    | "email"
    | "password"
    | "select"
    | "checkbox";
  typeValue?: "string" | "boolean" | "number";
  options?: Opt[];
  validations: Validation[];

  [x: string | number | symbol]: unknown;
}

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Validation {
  type: "required" | "isEmail" | "minLength" | "isTrue" | "isPositive";
  value?: string | number | boolean;
  message: string;
}

export const forms: { [x: string]: InputProps[] } = {
  editPerfume: [
    {
      label: "Perfume Name",
      type: "text",
      name: "name",
      placeholder: "",
      value: "Mangga",
      validations: [
        {
          type: "required",
          message: "Perfume name is required",
        },
      ],
    },
    {
      label: "Brand",
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
      label: "Scent",
      type: "text",
      name: "scent",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Scent is required",
        },
      ],
    },
    {
      label: "Volume Size (ml)",
      type: "number",
      name: "size",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Volume size is required",
        },
        {
          type: "isPositive",
          message: "Must be greater than 0",
        },
      ],
    },
    {
      label: "Price Range (Min)",
      type: "number",
      name: "minPrice",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Price range is required",
        },
        {
          type: "isPositive",
          message: "Must be greater than 0",
        },
      ],
    },
    {
      label: "Price Range (Max)",
      type: "number",
      name: "maxPrice",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Price range is required",
        },
        {
          type: "isPositive",
          message: "Must be greater than 0",
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
  newPerfume: [
    {
      label: "Perfume Name",
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
      label: "Brand",
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
      label: "Scent",
      type: "text",
      name: "scent",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Scent is required",
        },
      ],
    },
    {
      label: "Volume Size (ml)",
      type: "number",
      name: "size",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Volume size is required",
        },
        {
          type: "isPositive",
          message: "Must be greater than 0",
        },
      ],
    },
    {
      label: "Price Range (Min)",
      type: "number",
      name: "minPrice",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Price range is required",
        },
        {
          type: "isPositive",
          message: "Must be greater than 0",
        },
      ],
    },
    {
      label: "Price Range (Max)",
      type: "number",
      name: "maxPrice",
      placeholder: "",
      value: "",
      validations: [
        {
          type: "required",
          message: "Price range is required",
        },
        {
          type: "isPositive",
          message: "Must be greater than 0",
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
