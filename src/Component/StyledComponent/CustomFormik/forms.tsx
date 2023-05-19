import React from "react";
export interface InputProps {
  name: string;
  placeholder?: string;
  label?: string;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
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
  type: "required" | "isEmail" | "minLength" | "isTrue" | "isLink" | "isPositive" | "isIndex" | "image";
  value?: string | number | boolean;
  message: string;
}

export const forms: { [x: string]: InputProps[] } = {
  perfume: [
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
    {
      label: "Index Aroma",
      type: "number",
      name: "scentIdx",
      placeholder: "",
      divideHere: true,
      validations: [
        {
          type: "required",
          message: "Index aroma wajib diisi",
        },
        {
          type: "isIndex",
          message: "Index aroma wajib bernilai 1-5",
        }
      ],
    },
    {
      label: "Index Durabilitas",
      type: "number",
      name: "durIdx",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Index durabilitas wajib diisi",
        },
        {
          type: "isIndex",
          message: "Index durabilitas wajib bernilai 1-5",
        }
      ],
    },
    {
      label: "Index Harga",
      type: "number",
      name: "priceIdx",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Index harga wajib diisi",
        },
        {
          type: "isIndex",
          message: "Index harga wajib bernilai 1-5",
        }
      ],
    },
    {
      label: "Index Kualitas",
      type: "number",
      name: "qualityIdx",
      placeholder: "",
      validations: [
        {
          type: "required",
          message: "Index kualitas wajib diisi",
        },
        {
          type: "isIndex",
          message: "Index kualitas wajib bernilai 1-5",
        }
      ],
    },
  ],
};
