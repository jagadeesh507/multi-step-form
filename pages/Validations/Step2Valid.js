import * as Yup from "yup";

export const Step2Valid = Yup.object().shape({
  schoolname: Yup.string().required("required!"),
  schoolcgpa: Yup.number().required(" required!"),
  schoolpassyear: Yup.date().required("required!"),
  Degree: Yup.string().required("Choose one option "),
  course:Yup.string().required("required!"),
  branch:Yup.string().required("required!"),
  degreecgpa:Yup.number().required("required!"),
  degreepassyear:Yup.number().required("required!"),
});


