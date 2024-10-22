import * as Yup from "yup";
import { InputProps, forms } from "./forms";
import { AnyObject } from "yup/lib/types";

type YupBoolean = Yup.BooleanSchema<
  boolean | undefined,
  AnyObject,
  boolean | undefined
>;

type YupString = Yup.StringSchema<
  string | undefined,
  AnyObject,
  string | undefined
>;

type YupNumber = Yup.NumberSchema<
  number | undefined,
  AnyObject,
  number | undefined
>;

type YupImage = Yup.AnySchema<
  File | undefined,
  AnyObject,
  File | undefined
>;

type Yupi = typeof Yup.mixed extends (...args:any[]) => infer R ? R : never;


const generateValidations = (field: InputProps) => {
  let schema = Yup[field.typeValue ? field.typeValue : "string"]();

  for (const rule of field.validations) {
    switch (rule.type) {
      case "isTrue":
        schema = (schema as YupBoolean).isTrue(rule.message);
        break;

      case "isEmail":
        schema = (schema as YupString).email(rule.message);
        break;

      case "minLength":
        schema = (schema as YupString).min(rule?.value as number, rule.message);
        break;

      case "isLink":
        schema = (schema as YupString).url(rule.message)
        break;

      case "isPositive":
        schema = (schema as YupNumber).test(
          "is-positive",
          rule.message,
          (value) => value === undefined || value > 0
        );
        break;

      case "isIndex":
        schema = (schema as YupNumber).test(
          "between 1-5",
          rule.message,
          (value) => value === undefined || (value > 0 && value < 6)
        );
        break;

      // case "image":
      //   const format = [
      //     "image/jpg",
      //     "image/jpeg",
      //     "image/png",
      //   ]

      //   const imageSchema = Yup.object().shape({
      //     file: Yup.mixed()
      //     .test(
      //       "fileFormat",
      //       rule.message,
      //       value => value && format.includes(value.type)
      //     )
      //   })

      //   schema = imageSchema;
      //   break;

      default:
        schema = schema.required(rule.message);
        break;
    }
  }

  return schema;
};

export const getInputs = (section: string) => {
  // let initialValues: { [key: string]: any } = {};
  const validationsFields: { [key: string]: any } = {};

  for (const field of forms[section]) {
    // initialValues[field.name] = field.value;

    // get validation
    if (!field.validations) continue;

    const schema = generateValidations(field);
    validationsFields[field.name] = schema;
  }

  return {
    validationSchema: Yup.object({ ...validationsFields }),
    // initialValues,
    inputs: forms[section],
  };
};
