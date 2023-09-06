import * as Yup from "yup";

const Step3valid = Yup.object().shape({
    companyname: Yup.string().required("Company name required!"),
    jobtitile: Yup.string().required("position required!"),
    jobdiscription: Yup.string().required("required!"),
    experience: Yup.number("Should be in years").required("required!"),
});

export default Step3valid;