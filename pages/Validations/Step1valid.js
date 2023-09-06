import * as Yup from "yup";

export const Step1valid = Yup.object().shape({
  fname: Yup.string().required("Name is required!"),
  lname: Yup.string().required("Name is required!"),
  email: Yup.string().email().required("Email is required!"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required!"),
});

