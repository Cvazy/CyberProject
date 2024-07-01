import * as yup from "yup";

export const regFormScheme = yup.object().shape({
  username: yup
    .string()
    .required("Please fill in your username")
    .matches(
      /^\w+$/,
      "The username was filled in incorrectly. Only letters and numbers are allowed",
    )
    .min(
      3,
      "The username was filled in incorrectly. The minimum login length is 3 characters",
    )
    .max(
      15,
      "The username was filled in incorrectly. The maximum login length is 15 characters",
    ),

  password: yup
    .string()
    .required("Please fill in the password")
    .matches(
      /^[\w#%]+$/,
      "The password was filled in incorrectly. Letters, numbers and symbols are allowed # %",
    )
    .min(
      6,
      "The password was filled in incorrectly. The minimum password length is 6 characters",
    )
    .max(
      30,
      "The password was filled in incorrectly. The maximum password length is 30 characters",
    ),

  repeatPassword: yup
    .string()
    .required("Please repeat the password")
    .oneOf([yup.ref("password"), ""], "Passwords don't match"),
});
