import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const nickNameRules = /^[a-zA-Z0-9]{1,30}/;
const nameRules = /^[a-zA-Z]{1,50}/; //same for surname
const phoneRules =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
const emailRules = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const firstStepSchema = yup.object().shape({
  // email: yup.string().email("Please enter a valid email").required("Required"),
  // age: yup.number().positive().integer().required("Required"),
  // password: yup
  //   .string()
  //   .min(5)
  //   .matches(passwordRules, { message: "Please create a stronger password" })
  //   .required("Required"),
  // confirmPassword: yup
  //   .string()
  //   // @ts-ignore
  //   .oneOf([yup.ref("password"), null], "Passwords must match")
  //   .required("Required"),
});

export const secondStepSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    // @ts-ignore
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
