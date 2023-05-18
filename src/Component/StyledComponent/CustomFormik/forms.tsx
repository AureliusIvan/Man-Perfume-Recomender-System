export interface InputProps {
  name: string;
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
  type: "required" | "isEmail" | "minLength" | "isTrue" | "isLink" | "isPositive";
  value?: string | number | boolean;
  message: string;
}

export const forms: { [x: string]: InputProps[] } = {
  editPerfume: [
    {
      label: "",
      type: "file",
      name: "image",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Gambar parfum wajib diisi",
        },
      ],
    },
    {
      label: "Nama Parfum",
      type: "text",
      name: "name",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Nama parfum wajib diisi",
        },
      ],
    },
    {
      label: "Merek",
      type: "text",
      name: "merk",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Merek wajib diisi",
        },
      ],
    },
    {
      label: "Aroma",
      type: "text",
      name: "scent",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Aroma wajib diisi",
        },
      ],
    },
    {
      label: "Ukuran (ml)",
      type: "number",
      name: "size",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Ukuran (ml) wajib diisi",
        },
        {
          type: "isPositive",
          message: "Ukuran harus bernilai positif",
        },
      ],
    },
    {
      label: "Deskripsi",
      type: "text",
      name: "desc",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Deskripsi wajib diisi",
        },
      ],
    },
    {
      label: "Harga",
      type: "number",
      name: "price",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Harga wajib diisi",
        },
        {
          type: "isPositive",
          message: "Harga harus bernilai positif",
        },
      ],
    },
    {
      label: "Tautan Pembelian",
      type: "text",
      name: "link",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Tautan pembelian wajib diisi",
        },
        {
          type: "isLink",
          message: "Isi harus berformat tautan"
        }
      ],
    },
  ],
  newPerfume: [
    {
      label: "",
      type: "file",
      name: "image",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Gambar parfum wajib diisi",
        },
      ],
    },
    {
      label: "Nama Parfum",
      type: "text",
      name: "name",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Nama parfum wajib diisi",
        },
      ],
    },
    {
      label: "Merek",
      type: "text",
      name: "merk",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Merek wajib diisi",
        },
      ],
    },
    {
      label: "Aroma",
      type: "text",
      name: "scent",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Aroma wajib diisi",
        },
      ],
    },
    {
      label: "Ukuran (ml)",
      type: "number",
      name: "size",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Ukuran (ml) wajib diisi",
        },
        {
          type: "isPositive",
          message: "Ukuran harus bernilai positif",
        },
      ],
    },
    {
      label: "Deskripsi",
      type: "text",
      name: "desc",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Deskripsi wajib diisi",
        },
      ],
    },
    {
      label: "Harga (Rp)",
      type: "number",
      name: "price",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Harga wajib diisi",
        },
        {
          type: "isPositive",
          message: "Harga harus bernilai positif",
        },
      ],
    },
    {
      label: "Tautan Pembelian",
      type: "text",
      name: "link",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Tautan pembelian wajib diisi",
        },
        {
          type: "isLink",
          message: "Isi harus berformat tautan"
        }
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
