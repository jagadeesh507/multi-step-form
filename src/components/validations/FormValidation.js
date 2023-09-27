import * as Yup from "yup";

export const validation1=Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email: Yup.string().email("invalid email").required("Email is required!"),
    phone: Yup.string()
    .matches(/^[0-9]{10}$/, "exactly  10 digits allowed")
    .required("Phone number is required"),
})