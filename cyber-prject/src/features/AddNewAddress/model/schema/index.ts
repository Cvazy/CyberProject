import * as yup from "yup";

export const newAddressScheme = yup.object().shape({
  addressTitle: yup.string().required("Please fill in your address title"),

  fullAddress: yup.string().required("Please fill in your full address"),

  phoneNumber: yup.string().required("Please fill in your phone number"),
});
